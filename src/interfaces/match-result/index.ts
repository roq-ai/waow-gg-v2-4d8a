import { GetQueryInterface } from 'interfaces';

export interface MatchResultInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MatchResultGetQueryInterface extends GetQueryInterface {
  id?: string;
}
