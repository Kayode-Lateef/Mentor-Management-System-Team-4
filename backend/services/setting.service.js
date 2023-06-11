import models from '../database/models';

const { Setting } = models;

const getSettingByUserId = async (id) => {
  return Setting.findOne({ where: { user_id: id } });
};

const updateSettingByUserId = async (id, updates) => {
  return Setting.update(updates, { where: { user_id: id } });
};

export { getSettingByUserId, updateSettingByUserId };
