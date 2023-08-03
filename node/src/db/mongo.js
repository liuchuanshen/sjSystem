const { MongoClient, ObjectId } = require('mongodb')

const config = {
  url: 'mongodb://localhost:27017',
  dbName: 'money'
}

async function connect() {
  try {
    const client = await MongoClient.connect(config.url, { useUnifiedTopology: true })
    const db = client.db(config.dbName)
    return { client, db }
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * 增：添加数据
 * @param {String}          colName     集合名称
 * @param {Object|Array}    data        插入数据
 */
async function create(colName, data) {
  // 连接数据库
  const { db, client } = await connect()
  // 获取集合
  const col = db.collection(colName)
  if (!Array.isArray(data)) {
    data = [data]
  }

  // console.log('data',data)


  const result = await col.insertMany(data)

  // 关闭数据库连接
  client.close()
  return result
}

/**
 * 删：删除数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function remove(colName, query) {
  // 连接数据库
  const { db, client } = await connect()
  // 获取集合
  const col = db.collection(colName)

  const result = await col.deleteMany(query)
  client.close()
  return result
}

/**
 * 改：修改数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 * @param {Object} data     更新操作
 */
async function update(colName, query, data) {
  const { db, client } = await connect()

  // 获取集合
  const col = db.collection(colName)

  if (typeof query._id === 'string') {
    // 600a398f7fb70cd40a42e1f9 -> ObjectId("600a398f7fb70cd40a42e1f9")
    query._id = ObjectId(query._id)
  }

  const result = await col.updateOne(query, { $set: { 'fh': data.fh, 'rzsj': data.rzsj, 'zysj': data.zysj, 'xm': data.xm, 'sfzhm': data.sfzhm, 'sjhm': data.sjhm, 'hx': data.hx, 'jfqk': data.jfqk }})

  client.close()
  return result
}

/**
 * 查：查询数据
 * @param {String} colName    集合名称
 * @param {Object} query      查询条件
 * @param {Object} options
    * fields    过滤字段
    * skip      跳过数量（用于数据分页）
    * limit     限制数量（用于数据分页）
    * sort      排序
* @return {Array}            返回数据结果
*/
async function find(colName, query = {}, { fields, pageNum, sizeNum, sort } = {}) {
    const { db, client } = await connect()

    // 获取集合
    const col = db.collection(colName)

    if (typeof query._id === 'string') {
      query._id = ObjectId(query._id)
    }

    let params = query.name ? query : {}

    console.log('params',params)

    // 操作数据库
    let list = col.find(params, {
      // 过滤字段
      projection: fields
    })

    // 获取总数量
    const count = await list.count()
  
    // 排序
    if (sort) { 
      const [key, val = -1] = sort.trim().split(/\s*,\s*/)
      list = list.sort({
        [key]: val * 1
      })
    }
  
    if (pageNum) {
      list = list.skip(Number(pageNum))
    }
  
    if (sizeNum) {
      list = list.limit(Number(sizeNum))
    }
  
    list = await list.toArray()
    
    // 关闭连接
    client.close()
  
    return { total: count, list, pageNum, sizeNum }
}
  
module.exports = {
    create,
    remove,
    update,
    find,
}