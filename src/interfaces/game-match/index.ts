import { GetQueryInterface } from 'interfaces';

export interface GameMatchInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface GameMatchGetQueryInterface extends GetQueryInterface {
  id?: string;
}
