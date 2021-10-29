import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import UserList from "./User";
import UserPage from "./UserPage";
import PageNotFound from "./PageNotFound";

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/users" component={UserList} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route path="" component={PageNotFound} />
          <Redirect from="/" to="/users" />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Main;
