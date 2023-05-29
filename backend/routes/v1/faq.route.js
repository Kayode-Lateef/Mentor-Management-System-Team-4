import express from 'express';
import validate from '../../middlewares/validate';
import * as faqController from '../../controllers/faq.controller';
import validateCreateFAQ from '../../validations/faq.validation';

const router = express.Router();

router.get('/', faqController.getAllFAQs);
router.post('/', validate(validateCreateFAQ), faqController.createFAQ);

export default router;
