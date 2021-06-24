import React from "react";
import Navbar from "./Navbar";
import Footer from "../layout/Footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
