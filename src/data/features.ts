/**
 * Feature list data for the homepage
 * Each feature showcases a key capability of the Birthdayy bot
 */

export interface Feature {
  title: string;
  description: string;
  imageName: string;
  points: string[];
  imagePosition: 'left' | 'right';
}

export const features: Feature[] = [
  {
    title: 'Birthday Announcement',
    description: 'Send out a nice Birthday Announcement Message on someones Birthday and congratulate them.',
    imageName: 'announcement',
    points: ['Customizable Message', 'Ping a Role'],
    imagePosition: 'right',
  },
  {
    title: 'Register your Birthday',
    description: "Easily register your Birthday in the Server. With or without Year. You're in control!",
    imageName: 'birthday-register-year-optional',
    points: ['Optional Year addable', 'Register Birthday for others'],
    imagePosition: 'left',
  },
  {
    title: 'Birthday List',
    description: 'Get an Overview over all Birthdays in your Server. All sorted by their Month and Day.',
    imageName: 'birthday-list',
    points: ['Clean Overview', 'Sort by Month'],
    imagePosition: 'right',
  },
  {
    title: 'Server Configuration',
    description: "Customize the Bot's Settings to your Servers needs.",
    imageName: 'config-status',
    points: ['Maximum Configurability', 'Control over your Settings'],
    imagePosition: 'left',
  },
];
