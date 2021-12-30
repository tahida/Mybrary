const express = require('express')
const router = express.Router()
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
const MongoError = require('mongodb').MongoError

router.get('/', (req, res) => {
    res.render('index')

} )

module.exports = router 