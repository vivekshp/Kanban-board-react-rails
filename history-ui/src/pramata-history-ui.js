import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import HistoryPage from "./HistoryPage";
import { BrowserRouter } from "react-router-dom";


function domElementGetter() {
  return document.getElementById("pramata-history-ui");
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => (
    <BrowserRouter>
      <HistoryPage />
    </BrowserRouter>
  ),
  errorBoundary(err, info, props) {
      return <div style={{ color: "red" }}>Something went wrong in History UI</div>;
  },
  domElementGetter
});

export const { bootstrap, mount, unmount } = lifecycles;
