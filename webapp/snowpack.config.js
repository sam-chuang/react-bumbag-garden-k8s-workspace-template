let isDev = process.env.NODE_ENV === "development" //node.js dev env
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  env: {
    VERSION: process.env.npm_package_version,
    BUILD_DATE: new Date().toISOString(),
    /* Caddy server template, refer to
        https://caddyserver.com/docs/caddyfile/directives/templates
        https://caddyserver.com/docs/modules/http.handlers.templates 
    */
    SERVER_ENV: isDev ? "" : '{{include "caddyserver_env.html"}}'
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv"
  ],
  routes: [],
  optimize: {},
  packageOptions: {},
  devOptions: {
    port: 3000
  },
  buildOptions: {
    metaUrlPath: "snowpack"
  }
}
