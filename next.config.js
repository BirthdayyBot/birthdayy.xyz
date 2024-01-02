/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bulma.io"],
  },
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/Bs9bSVe2Hf",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "https://docs.birthdayy.xyz/",
        permanent: true,
      },
      {
        source: "/status",
        destination: "https://status.birthdayy.xyz/",
        permanent: true,
      },
      {
        source: "/invite",
        destination:
          "https://discord.com/oauth2/authorize?client_id=916434908728164372&permissions=525529836753&scope=applications.commands%20bot",
        permanent: true,
      },
      {
        source: "/patreon",
        destination: "https://www.patreon.com/birthdayy",
        permanent: true,
      },
      {
        source: "/premium",
        destination: "https://www.patreon.com/birthdayy",
        permanent: true,
      },
      {
        source: "/topgg",
        destination: "https://top.gg/bot/916434908728164372",
        permanent: true,
      },
      {
        source: "/topgg/vote",
        destination: "https://top.gg/bot/916434908728164372/vote",
        permanent: true,
      },
      {
        source: "/botgg",
        destination: "https://bot.gg/birthdayy",
        permanent: true,
      },
      {
        source: "/discord-botlist",
        destination: "https://discord-botlist.eu/bots/916434908728164372",
        permanent: true,
      },
      {
        source: "/discord-botlist/vote",
        destination: "https://discord-botlist.eu/vote/916434908728164372",
        permanent: true,
      },
      {
        source: "/discordlist",
        destination: "https://discordlist.gg/bot/916434908728164372",
        permanent: true,
      },
      {
        source: "/discordlist/vote",
        destination: "https://discordlist.gg/bot/916434908728164372/vote",
        permanent: true,
      },
      {
        source: "/tos",
        destination: "https://www.websitepolicies.com/policies/view/kb0ati9q",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "https://www.websitepolicies.com/policies/view/g9a126jo",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
