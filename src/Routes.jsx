import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading } from "./components";

const ProductSelectionLazy = lazy(() =>
  import("./pages/ProductSelection/ProductSelection")
);
const AboutLazy = lazy(() => import("./pages/About/About"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={ProductSelectionLazy} />
          <Route exact path="/about" component={AboutLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
