import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { AuthProvider } from "components/AuthProvider";

const GlobalStyle = createGlobalStyle`
  :root {
  font-size: 16px;
  font-family: "Roboto", sans-serif;

  /* custom properties/variables */
  --primary: #ff6b00;
  --grey1: #e0e0e0;
  --grey2: #d3d3d3;
  --white: #f2f2f2;
}

html {
  background: #5e5e5e;
}

body {
  margin: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;

Sentry.init({
  dsn:
    "https://c42cfe6866e043649cfe755e80c3a7be@o440950.ingest.sentry.io/5410656",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
