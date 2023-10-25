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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Tickets Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View events', 'Purchase tickets', 'Write reviews', 'View offers'],
  ownerAbilities: [
    'Manage company information',
    'Manage events',
    'View tickets and reviews',
    'Create and manage offers',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/4ba9f1b2-0b80-4b7a-93d6-1a697c0c10d7',
};
