module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" }
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
