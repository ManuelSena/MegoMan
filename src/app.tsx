import * as React from "react";
import { Header } from "./components/header/header";

export const App: React.StatelessComponent<{}> = (props) => {

    return (
      <React.Fragment>
            <Header />
            {props.children}
      </React.Fragment>
    );

}