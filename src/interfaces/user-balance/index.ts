import { GetQueryInterface } from 'interfaces';

export interface UserBalanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface UserBalanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
