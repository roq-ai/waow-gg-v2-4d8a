import queryString from 'query-string';
import { GameMatchInterface, GameMatchGetQueryInterface } from 'interfaces/game-match';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getGameMatches = async (
  query?: GameMatchGetQueryInterface,
): Promise<PaginatedInterface<GameMatchInterface>> => {
  return fetcher('/api/game-matches', {}, query);
};

export const createGameMatch = async (gameMatch: GameMatchInterface) => {
  return fetcher('/api/game-matches', { method: 'POST', body: JSON.stringify(gameMatch) });
};

export const updateGameMatchById = async (id: string, gameMatch: GameMatchInterface) => {
  return fetcher(`/api/game-matches/${id}`, { method: 'PUT', body: JSON.stringify(gameMatch) });
};

export const getGameMatchById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/game-matches/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteGameMatchById = async (id: string) => {
  return fetcher(`/api/game-matches/${id}`, { method: 'DELETE' });
};
