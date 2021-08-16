/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "BakuPub",
  tagline: "Dinosaurs are cool",
  url: "https://mowenchan.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MowenChan", // Usually your GitHub org/user name.
  projectName: "bakupub", // Usually your repo name.
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
    localeConfigs: {
      zh: {
        label: "中文",
        direction: "ltr",
      },
    },
  },
  themeConfig: {
    navbar: {
      title: "BakuPub",

      logo: {
        alt: "My Site Logo",
        src: "img/Bakusmooth.svg",
      },
      items: [
        {
          label: "se",
          position: "left",
          to: "docs/se/index",
        },

        {
          label: "TreasureMap",
          position: "left",
          to: "docs/treasure_map/index",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "License",
          items: [
            {
              html: `<image src="/img/ccheart_black.svg" height="60" width="60"/>
              <image src="/img/by.svg" height="40" width="40"/>
              <image src="/img/nc.svg" height="40" width="40"/>
              <image src="/img/sa.svg" height="40" width="40"/>`,
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "mail",
              href: "mailto: trace.chen.job@outlook.com",
            },
          ],
        },
        {
          title: "Social",
          items: [
            // {
            //   label: "GitHub",
            //   href: "https://github.com/MowenChan",
            // }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/MowenChan",
            },
            {
              label: "Gitee",
              href: "https://gitee.com/lawmoe",
            },
          ],
        },
        {
          title: "Friend Links",
          items: [
            {
              label: "Carrgan Universe",
              href: "https://carrgan.github.io/",
            },
          ],
        },
      ],
      logo: {
        alt:
          "This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.",
        src: "img/cc-by-nc-sa.svg",
        href: "http://creativecommons.org/licenses/by-nc-sa/4.0/",
      },
      copyright: `<p>Copyright © 2021-${new Date().getFullYear()} BakuPub.<p>Built with <a href="https://docusaurus.io/">Docusaurus</a>.</p>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "./src/css/katex.min.css"
    },
  ],
};
