import express from 'express';
import validate from '../../middlewares/validate';
import * as UserArchiveController from '../../controllers/user_archive.controller';
import validateCreateUserArchive from '../../validations/user.validation';

const router = express.Router();

router.get('/', UserArchiveController.getUserArchives);
router.post('/', validate(validateCreateUserArchive), UserArchiveController.createUserArchive);

export default router;
