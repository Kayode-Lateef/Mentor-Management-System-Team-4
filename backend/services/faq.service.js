import models from '../database/models';

const { FAQ } = models;

export const getAllFAQs = async () => {
  const allFAQs = await FAQ.findAll();
  return allFAQs;
};

export const createFAQ = async (type, question, answer) => {
  const createdFAQ = await FAQ.create({
    type,
    question,
    answer,
  });
  return createdFAQ;
};
