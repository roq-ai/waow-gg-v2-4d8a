const mapping: Record<string, string> = {
  'bet-histories': 'bet_history',
  clients: 'client',
  'game-matches': 'game_match',
  'match-results': 'match_result',
  users: 'user',
  'user-balances': 'user_balance',
  'user-profiles': 'user_profile',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
