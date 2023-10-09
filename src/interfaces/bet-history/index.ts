import { GetQueryInterface } from 'interfaces';

export interface BetHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BetHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
