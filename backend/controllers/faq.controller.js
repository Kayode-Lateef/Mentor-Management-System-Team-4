import * as faqService from '../services/faq.service';

export const getAllFAQs = async (req, res) => {
  const allFAQs = await faqService.getAllFAQs();
  return res.status(200).json(allFAQs);
};

export const createFAQ = async (req, res) => {
  const { type, question, answer } = req.body;
  const createdFAQ = await faqService.createFAQ(type, question, answer);
  return res.status(201).json(createdFAQ);
};
