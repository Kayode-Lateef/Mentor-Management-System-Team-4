import express from 'express';
import validate from '../../middlewares/validate';
import * as profileController from '../../controllers/profile.controller';
import * as validateUserProfileUpdate from '../../validations/privacy.validation';

const router = express.Router();

router.get('/:userId', profileController.getUserProfile);
router.put('/:userId', validate(validateUserProfileUpdate), profileController.updateUserProfile);

export default router;
