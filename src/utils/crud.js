export const getOne = model => async (req, res) => {
  const result = await model.findById(req.params.id)

  if (result !== null) {
    res.status(200).json({ data: result })
  } else {
    res.status(400).end()
  }
}

export const getMany = model => async (req, res) => {
  const result = await model.find({ createdBy: req.user._id }).exec()
  if (result !== null) {
    res.status(200).json({ data: result })
  } else {
    res.status(400).end()
  }
}

export const createOne = model => async (req, res) => {
  model.create(
    {
      name: req.body.name,
      createdBy: req.user._id
    },
    (err, doc) => {
      if (err) {
        res.status(400).end()
      } else {
        res.status(201).json({ data: doc })
      }
    }
  )
}

export const updateOne = model => async (req, res) => {
  const doc = await model
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .exec()
  if (doc !== null) {
    res.status(200).json({ data: doc })
  } else {
    res.status(400).end()
  }
}

export const removeOne = model => async (req, res) => {
  const doc = await model.findByIdAndDelete(req.params.id)
  if (doc !== null) {
    res.status(200).json({ data: doc })
  } else {
    res.status(400).end()
  }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
