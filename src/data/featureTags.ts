/**
 * Feature tags displayed on the homepage
 * Organized by category for better maintainability
 */

export interface FeatureTag {
  label: string;
  category: 'birthday' | 'config';
}

export const featureTags: FeatureTag[] = [
  // Birthday Commands
  { label: 'Birthday Register', category: 'birthday' },
  { label: 'Birthday Update', category: 'birthday' },
  { label: 'Birthday Remove', category: 'birthday' },
  { label: 'Birthday List', category: 'birthday' },
  { label: 'Birthday Test', category: 'birthday' },

  // Configuration Commands
  { label: 'Config Announcement', category: 'config' },
  { label: 'Config Ping Role', category: 'config' },
  { label: 'Config Birthday Role', category: 'config' },
  { label: 'Config Overview', category: 'config' },
  { label: 'Config Status', category: 'config' },
];
