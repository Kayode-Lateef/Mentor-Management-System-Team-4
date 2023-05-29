import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import * as privacyService from '../services/privacy.service';

export const getPrivacySettings = catchAsync(async (req, res) => {
  const privacySettings = await privacyService.getPrivacySettings();
  res.status(httpStatus.OK).json(privacySettings);
});

export const updatePrivacySettings = catchAsync(async (req, res) => {
  const { showLinkedin, showTwitter, showInstagram, showGithub, showContactInfo } = req.body;

  const updatedSettings = await privacyService.updatePrivacySettings({
    showLinkedin,
    showTwitter,
    showInstagram,
    showGithub,
    showContactInfo,
  });

  res.status(httpStatus.OK).json(updatedSettings);
});
