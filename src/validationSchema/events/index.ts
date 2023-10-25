import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  date: yup.date().required(),
  location: yup.string().required(),
  ticket_price: yup.number().integer().required(),
  available_tickets: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
