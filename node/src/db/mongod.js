// Requires official Node.js MongoDB Driver 3.0.0+
const mongodb = require("mongodb");
const { MongoClient, ObjectId } = require('mongodb')

const config = {
    url: "mongodb://localhost:27017",
    dbName: 'money'
  }

async function connect() {
  try {
    const client = await MongoClient.connect(config.url, { useUnifiedTopology: true })
    const db = client.db(config.dbName)
    return { db, client }
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

  const result = await col.insertMany(data)

  // 关闭数据库连接
  client.close()
  return result
}

async function find(colName, query, pageNum, sizeNum) {
  const { db, client } = await connect();
  const col = db.collection(colName);
  let list;
  let count;

  if (query) {
      // 模糊查询
      list = col.find({ name: { $regex: query, $options: 'i' } });
  } else {
      // 查询全部数据
      list = col.find();
  }

  // 计算总记录数
  count = await list.count();

  // 分页逻辑
  if (pageNum !== undefined && sizeNum !== undefined) {
      list = list.skip(pageNum * sizeNum).limit(sizeNum);
  }

  list = await list.toArray();
  client.close();

  return {
      total: count,
      list,
      pageNum: pageNum !== undefined ? pageNum + 1 : undefined,
      sizeNum,
  };
}


module.exports = {
  create,
  find,
}