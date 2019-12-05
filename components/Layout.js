// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { css, jsx, Global } from "@emotion/core";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Global
          styles={css`
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            span,
            body {
              font-family: "Poppins", sans-serif;
            }
          `}
        />
        <Head>
          <title>Nick Makuch - Interaction Designer</title>
        </Head>
        <NavBar />
        <div>
          <div css={this.props.contentClass}>{this.props.children}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
