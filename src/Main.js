import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import UserList from "./User";
import UserPage from "./UserPage";
import PageNotFound from "./PageNotFound";

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
        <Redirect exact from="/" to="/users" /> 
          <Route exact path="/users" component={UserList} />
          <Route exact path="/user/:id" component={UserPage} />
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Main;
