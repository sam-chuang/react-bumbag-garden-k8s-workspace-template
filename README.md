# react-bumbag-template

React, Bumbag, Emotion, React Hook Form, Playwright, Mocha, Chai, Snowpack etc...

## Project

- Use [garden](https://garden.io/) to run and deploy Kubernetes applications

### Workspaces

- Use [husky](https://github.com/typicode/husky) to run workspaces tests via git hook

#### Webappp

- Use [Snowpack](https://www.snowpack.dev/) for frontend build tool
- Use [Babel](https://babeljs.io/) JavaScript compiler with build tool
- Use Multi Stages Dockerfile to build docker image

##### Front-End Tech Stack

- React
- [Bumbag](https://bumbag.style/)
- [Emotion](https://emotion.sh/)
- [SWR](https://swr.vercel.app/) React Hooks for Data Fetching
- [React Hook Form](https://react-hook-form.com/)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)
- [date-fns](https://date-fns.org/)
- [Lodash](https://lodash.com/)
- [Ramda](https://ramdajs.com/)
- [react-dropzone](https://react-dropzone.js.org/)
- [clipboard-copy](https://github.com/feross/clipboard-copy)
- [big.js](https://github.com/MikeMcl/big.js/)
- [@monaco-editor/react](https://github.com/suren-atoyan/monaco-react) & [Monaco Editor](https://microsoft.github.io/monaco-editor/)

##### Server

- Use [Caddy](https://caddyserver.com/) for web server
- Use [Caddy templates](https://caddyserver.com/docs/caddyfile/directives/templates) for environment variable server rendering

#### End to End Testing

- Use [Playwright](https://playwright.dev/) for end to end test local kubernete web app
- Use [Mocha](https://mochajs.org/) test runner
- Use [esm](https://github.com/standard-things/esm) with test runner for ESM syntax
- Use [Chai](https://www.chaijs.com/) for assertion
