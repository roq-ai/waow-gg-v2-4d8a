import queryString from 'query-string';
import { BetHistoryInterface, BetHistoryGetQueryInterface } from 'interfaces/bet-history';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBetHistories = async (
  query?: BetHistoryGetQueryInterface,
): Promise<PaginatedInterface<BetHistoryInterface>> => {
  return fetcher('/api/bet-histories', {}, query);
};

export const createBetHistory = async (betHistory: BetHistoryInterface) => {
  return fetcher('/api/bet-histories', { method: 'POST', body: JSON.stringify(betHistory) });
};

export const updateBetHistoryById = async (id: string, betHistory: BetHistoryInterface) => {
  return fetcher(`/api/bet-histories/${id}`, { method: 'PUT', body: JSON.stringify(betHistory) });
};

export const getBetHistoryById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/bet-histories/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBetHistoryById = async (id: string) => {
  return fetcher(`/api/bet-histories/${id}`, { method: 'DELETE' });
};
