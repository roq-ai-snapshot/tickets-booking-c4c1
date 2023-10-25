import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  review_text: yup.string().nullable(),
  review_date: yup.date().required(),
  event_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
