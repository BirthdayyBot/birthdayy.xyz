import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  redirects: {
    '/discord': 'https://discord.gg/Bs9bSVe2Hf',
    '/docs': 'https://docs.birthdayy.xyz/',
    '/status': 'https://status.birthdayy.xyz/',
    '/invite': 'https://discord.com/oauth2/authorize?client_id=916434908728164372&permissions=525529836753&scope=applications.commands%20bot',
    '/patreon': 'https://www.patreon.com/birthdayy',
    '/premium': 'https://www.patreon.com/birthdayy',
    '/topgg': 'https://top.gg/bot/916434908728164372',
    '/topgg/vote': 'https://top.gg/bot/916434908728164372/vote',
    '/botgg': 'https://bot.gg/birthdayy',
    '/discord-botlist': 'https://discord-botlist.eu/bots/916434908728164372',
    '/discord-botlist/vote': 'https://discord-botlist.eu/vote/916434908728164372',
    '/discordlist': 'https://discordlist.gg/bot/916434908728164372',
    '/discordlist/vote': 'https://discordlist.gg/bot/916434908728164372/vote',
    '/tos': 'https://www.websitepolicies.com/policies/view/kb0ati9q',
    '/privacy': 'https://www.websitepolicies.com/policies/view/g9a126jo',
  },
});
