// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const ctbStyles = css``;

export default () => {
  return (
    <Layout contentClass={ctbStyles}>
      <main>
        <PortfolioHeader
          title="Claim Tax Benefits"
          subTitle="IX Design / Front-End Development"
          description="This pugJS application is being designed in partnership with the CRA to help Canadians in vulnerable financial situations file their taxes. The application is currently in it's alpha phase and is being tested with real users. I was responsible for designing site-wide interactions, and then implementing them into code and testing them with real users."
          linkURL="https://claim-tax-benefits.azurewebsites.net/start"
          linkText="View online service"
          image="img/claim-tax-benefits.png"
        />
      </main>
    </Layout>
  );
};
