import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
const router = Router()

router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
// so .post can go below :id but other .get methods can not?
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

export {
  router
}

// post/get/delete are HTTP methods


// index/show etc are CRUD methods
// CRUD - Create Read Update Delete