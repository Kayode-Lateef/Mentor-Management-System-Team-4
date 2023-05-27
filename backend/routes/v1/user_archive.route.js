import express from 'express';
import UserArchiveController from '../../controllers/user_archive.controller';

const router = express.Router();

// Define routes for user archive-related endpoints
router.post('/', UserArchiveController.createUserArchive);

export default router;
