import express from 'express';
const router = express.Router();
import {
  registerDepartment,
  getDepartments,
  deleteDepartment,
  getDepartmentById,
  updateDepartment,
} from '../controllers/departmentController.js';
import { protect, manager } from '../middleware/authMiddleware.js';

router
  .route('/')
  .post(registerDepartment)
  .get(protect, manager, getDepartments);
router
  .route('/:id')
  .delete(protect, manager, deleteDepartment)
  .get(protect, manager, getDepartmentById)
  .put(protect, manager, updateDepartment);

export default router;
