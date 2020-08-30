import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";

Sentry.init({
  dsn:
    "https://c42cfe6866e043649cfe755e80c3a7be@o440950.ingest.sentry.io/5410656",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
