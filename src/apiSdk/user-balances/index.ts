import queryString from 'query-string';
import { UserBalanceInterface, UserBalanceGetQueryInterface } from 'interfaces/user-balance';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getUserBalances = async (
  query?: UserBalanceGetQueryInterface,
): Promise<PaginatedInterface<UserBalanceInterface>> => {
  return fetcher('/api/user-balances', {}, query);
};

export const createUserBalance = async (userBalance: UserBalanceInterface) => {
  return fetcher('/api/user-balances', { method: 'POST', body: JSON.stringify(userBalance) });
};

export const updateUserBalanceById = async (id: string, userBalance: UserBalanceInterface) => {
  return fetcher(`/api/user-balances/${id}`, { method: 'PUT', body: JSON.stringify(userBalance) });
};

export const getUserBalanceById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/user-balances/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteUserBalanceById = async (id: string) => {
  return fetcher(`/api/user-balances/${id}`, { method: 'DELETE' });
};
