// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { jsx, Global } from "@emotion/core";
import NavBar from "../components/NavBar";
import Head from "next/head";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />

        <Head>
          <title>Nick Makuch - Interaction Designer</title>
        </Head>

        <NavBar />

        <div>
          <div css={this.props.contentClass}>{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
