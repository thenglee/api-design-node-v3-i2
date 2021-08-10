import { Router } from 'express'
import {
  getItems,
  postItems,
  getItem,
  putItem,
  deleteItem
} from './item.controllers'

const router = Router()

router.route('/').get(getItems).post(postItems)

router.route('/:id').get(getItem).put(putItem).delete(deleteItem)

export default router
