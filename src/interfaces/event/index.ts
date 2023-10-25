import { OfferInterface } from 'interfaces/offer';
import { ReviewInterface } from 'interfaces/review';
import { TicketInterface } from 'interfaces/ticket';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  date: any;
  location: string;
  ticket_price: number;
  available_tickets: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  offer?: OfferInterface[];
  review?: ReviewInterface[];
  ticket?: TicketInterface[];
  company?: CompanyInterface;
  _count?: {
    offer?: number;
    review?: number;
    ticket?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  company_id?: string;
}
