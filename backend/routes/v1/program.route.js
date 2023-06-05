import express from 'express';
import validate from '../../middlewares/validate';
import * as programController from '../../controllers/program.controller';
import validateCreateUser from '../../validations/program.validation';

const router = express.Router();

router.get('/', programController.getAllUsers);
router.post('/', validate(validateCreateUser), programController.createUser);

export default router;
