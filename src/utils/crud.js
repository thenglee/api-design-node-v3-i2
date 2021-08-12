export const getOne = model => async (req, res) => {
  const result = await model.findById(req.params.id)

  if (!result) {
    return res.status(400).end()
  }

  res.status(200).json({ data: result })
}

export const getMany = model => async (req, res) => {
  const result = await model.find({ createdBy: req.user._id }).exec()
  if (!result) {
    return res.status(400).end()
  }

  res.status(200).json({ data: result })
}

export const createOne = model => async (req, res) => {
  const doc = await model.create({
    name: req.body.name,
    createdBy: req.user._id
  })

  if (!doc) {
    return res.status(400).end()
  }
  res.status(201).json({ data: doc })
}

export const updateOne = model => async (req, res) => {
  const doc = await model.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  if (!doc) {
    return res.status(400).end()
  }
  res.status(200).json({ data: doc })
}

export const removeOne = model => async (req, res) => {
  const doc = await model.findByIdAndDelete(req.params.id)
  if (!doc) {
    return res.status(400).end()
  }
  res.status(200).json({ data: doc })
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
