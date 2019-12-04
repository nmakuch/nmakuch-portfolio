// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/Layout";
import BannerH1 from "../components/BannerH1";

const ctbStyles = css`
  section#portfolio-grid {
    padding: 50px 0;

    .col-md-6 {
      padding-bottom: 6px;
    }
    .col-md-6:first-of-type {
      padding-right: 3px;
    }
    .col-md-6:last-of-type {
      padding-left: 3px;
    }
  }

  @media only screen and (max-width: 991px) {
    section#portfolio-grid {
      .container {
        max-width: 1200px !important;
        padding: 0 25px !important;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    section#portfolio-grid {
      .col-sm-12,
      .col-md-6 {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
      .container {
        max-width: 500px !important;
      }
    }
  }

  @media only screen and (max-width: 515px) {
    section#portfolio-grid {
      .col-sm-12,
      .col-md-6 {
        padding-right: 15px !important;
        padding-left: 15px !important;
      }
      .container {
        max-width: 550px !important;
      }
    }
  }
`;

export default () => {
  return (
    <Layout contentClass={ctbStyles}>
      <main>
        <h1>CTB</h1>
      </main>
    </Layout>
  );
};
