import withTM from "next-transpile-modules";

const withTranspileModules = withTM(["mui-tel-input"]);
const nextConfig = {
  experimental: {
    esmExternals: true,
  },
  async rewrites() {
    const languages = [
      "be",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "es",
      "fi",
      "fr",
      "hi",
      "hu",
      "it",
      "ja",
      "ko",
      "lt",
      "lv",
      "pl",
      "ro",
      "sk",
      "sv",
      "uk",
      "zh",
    ];

    return [
      ...languages.map((lang) => ({
        source: `/${lang}/:path*`,
        destination: `/:path*`,
      })),
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

export default withTranspileModules(nextConfig);
