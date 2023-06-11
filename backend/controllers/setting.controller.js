import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import * as settingService from '../services/setting.service';

const getSettingByUserId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const settings = await settingService.getSettingByUserId(id);
  res.status(httpStatus.OK).json({ success: true, data: settings });
});

const updateSettingById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const setting = await settingService.getSettingByUserId(id);
  if (!setting) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Setting not found');
  }

  const updateSettingByUserId = await settingService.updateSettingByUserId(id, body);
  res.status(httpStatus.OK).json({ success: true, data: updateSettingByUserId });
});

export { getSettingByUserId, updateSettingById };
