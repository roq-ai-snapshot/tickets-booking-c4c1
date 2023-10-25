import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  discount_percentage: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  description: yup.string().nullable(),
  event_id: yup.string().nullable().required(),
});
