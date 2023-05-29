import express from 'express';
import validate from '../../middlewares/validate';
import * as privacyController from '../../controllers/privacy.controller';
import updatePrivacySettingsSchema from '../../validations/privacy.validation';

const router = express.Router();

router.get('/', privacyController.getPrivacySettings);
router.put('/', validate(updatePrivacySettingsSchema), privacyController.updatePrivacySettings);

export default router;
