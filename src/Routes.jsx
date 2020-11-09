import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Loading } from "./components";

const ProductSelectionLazy = lazy(() =>
  import("./pages/ProductSelection/ProductSelection")
);
const AboutLazy = lazy(() => import("./pages/About/About"));
const HomeLazy = lazy(() => import("./pages/Home/Home"));
const ConfirmLazy = lazy(() => import("./pages/Confirmation/Confirmation"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/order" component={ProductSelectionLazy} />
          <Route exact path="/about" component={AboutLazy} />
          <Route exact path="/confirm" component={ConfirmLazy} />
          <Route exact path="/" component={HomeLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
