const express = require('express')
const router = express.Router()

const { formatData, encrypto } = require('../utils')

// api/data/list
router.get('/list', async(req, res) => {
    res.send({data:'done'})
})

module.exports = router