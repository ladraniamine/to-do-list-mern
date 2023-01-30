
const express = require('express')
const router = express.Router()
const _ = require('lodash')
const { getTask, postTask, putForContent, putCheckTask, deleteTask } = require('../controllers/task')

//get
router.get('/' , getTask)
//post
router.post('/' , postTask)
//put for content
router.put('/content/:id', putForContent)
//put for checktask
router.put('/check/:id' ,  putCheckTask)
//delete
router.delete('/:id' , deleteTask)
module.exports = router