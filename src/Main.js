import { BrowserRouter, Route, Switch } from "react-router-dom";

import User from "./User";
import FullUserInfo from "./FullUserInfo";

const Main = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/user" component={User} />
          <Route path="/user/:id" component={FullUserInfo} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default Main;
