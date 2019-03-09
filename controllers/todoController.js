const todoModel = require('../models/todoModel')

const getAll = (req, res) => {
  res.json(todoModel.todo)
}

const detail = (req, res) => {
  res.json(todoModel.detail(req.params.id));
}

const add = (req, res) => {
  res.json(todoModel.add(req.body.item))
}

const remove = (req, res) => {
  res.json(todoModel.remove(req.params.id))
}

const update = (req, res) => {
  res.json(todoModel.update(req.params.id))
}


module.exports = {
  getAll,
  detail,
  add,
  remove,
  update
}