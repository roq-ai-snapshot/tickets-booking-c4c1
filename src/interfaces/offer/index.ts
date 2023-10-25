import { EventInterface } from 'interfaces/event';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  event_id: string;
  discount_percentage: number;
  start_date: any;
  end_date: any;
  description?: string;
  created_at?: any;
  updated_at?: any;

  event?: EventInterface;
  _count?: {};
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  event_id?: string;
  description?: string;
}
