const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todoController')

router.get('/', todoController.getAll)
router.get('/detail/:id', todoController.detail)
router.post('/add', todoController.add)
router.delete('/remove/:id', todoController.remove)
router.put('/update/:id', todoController.update)

module.exports = router