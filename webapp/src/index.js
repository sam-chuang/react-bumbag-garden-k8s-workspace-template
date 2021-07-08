import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider as ThemeProvider, ToastManager } from "bumbag"
import { BrowserRouter as Router } from "react-router-dom"

const theme = {}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
        <ToastManager />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
