import queryString from 'query-string';
import { MatchResultInterface, MatchResultGetQueryInterface } from 'interfaces/match-result';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMatchResults = async (
  query?: MatchResultGetQueryInterface,
): Promise<PaginatedInterface<MatchResultInterface>> => {
  return fetcher('/api/match-results', {}, query);
};

export const createMatchResult = async (matchResult: MatchResultInterface) => {
  return fetcher('/api/match-results', { method: 'POST', body: JSON.stringify(matchResult) });
};

export const updateMatchResultById = async (id: string, matchResult: MatchResultInterface) => {
  return fetcher(`/api/match-results/${id}`, { method: 'PUT', body: JSON.stringify(matchResult) });
};

export const getMatchResultById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/match-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteMatchResultById = async (id: string) => {
  return fetcher(`/api/match-results/${id}`, { method: 'DELETE' });
};
