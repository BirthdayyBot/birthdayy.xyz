/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/VNknfPRHg4",
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
    ];
  },
};

module.exports = nextConfig;
