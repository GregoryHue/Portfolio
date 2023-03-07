/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  ignoredRouteFiles: ["**/.*"],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  serverBuildPath: ".netlify/functions-internal/server.js",
  appDirectory: "front",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};
