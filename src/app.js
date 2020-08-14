import * as React from "react";
import { Header } from "./components/header/header";
export const App = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        props.children));
};
//# sourceMappingURL=app.js.map