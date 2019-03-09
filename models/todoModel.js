const todo = []
let id = 1

const add = item => {
  todo.push({
    id: id,
    item: item,
    status: false
  })
  id++
  return todo
}

const detail = id => {
  const result = todo.filter(d => d.id == id)
  if (result.length > 0) {
    return result
  }
  return []
}

const remove = id => {
  const findIndex = todo.findIndex(d => d.id == id)
  if (findIndex >= 0) {
    todo.splice(findIndex-1, 1)
    return todo
  }
  return {
    error: true,
    message: "invalid id"
  }
}

const update = id => {
  const findIndex = todo.findIndex(d => d.id == id)
  if(findIndex >= 0) {
    todo[findIndex].status = !todo[findIndex].status
    return todo
  }
  return {
    error: true,
    message: 'invalid id',
  }
}

module.exports = {
  todo,
  add,
  detail,
  remove,
  update,
}