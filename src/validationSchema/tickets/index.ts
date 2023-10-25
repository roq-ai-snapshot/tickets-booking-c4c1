import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  purchase_date: yup.date().required(),
  ticket_number: yup.number().integer().required(),
  price: yup.number().integer().required(),
  event_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
