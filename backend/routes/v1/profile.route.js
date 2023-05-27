import express from 'express';
import ProfileController from '../../controllers/profile.controller';

const router = express.Router();

// Define routes for profile-related endpoints
router.get('/:userId', ProfileController.getProfile);
router.put('/:userId', ProfileController.updateProfile);

export default router;
