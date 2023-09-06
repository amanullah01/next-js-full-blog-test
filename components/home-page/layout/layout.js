import { Fragment } from "react";
import MainNavigation from "./main-navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <mian>{props.children}</mian>
    </Fragment>
  );
};

export default Layout;
