const getItems = (req, res) => {
  res.send({ get_item: 'hello' })
}

const postItems = (req, res) => {
  res.send({ post_item: req.body })
}

const getItem = (req, res) => {
  res.send({ get_item_id: req.params.id })
}

const putItem = (req, res) => {
  res.send({ put_item: req.params.id })
}

const deleteItem = (req, res) => {
  res.send({ delete_item: req.params.id })
}

export { getItems, postItems, getItem, putItem, deleteItem }
