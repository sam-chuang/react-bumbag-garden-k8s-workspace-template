//TODO: export build-date to env
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" }
  },
  env: {},
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
