interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Customer'],
  tenantName: 'Client',
  applicationName: 'Waow.GG v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage user balance', 'Manage match results', 'Manage user profiles', 'Manage bet history'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c4b2149b-13cb-407e-b0ac-37383deac3f1',
};
