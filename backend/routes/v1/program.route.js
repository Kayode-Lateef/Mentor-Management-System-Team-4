import express from 'express';
import validate from '../../middlewares/validate';
import * as archiveController from '../../controllers/program.controller';
import validateCreateUser from '../../validations/program.validation';

const router = express.Router();

router.get('/', archiveController.getAllUsers);
router.post('/', validate(validateCreateUser), archiveController.createUser);

export default router;
