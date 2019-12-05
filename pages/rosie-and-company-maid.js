// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const maidStyles = css``;

export default () => {
  return (
    <Layout contentClass={maidStyles}>
      <main>
        <PortfolioHeader
          title="Rosie and Company"
          subTitle="Web Design / Front-End Development"
          description="A nextJS application I designed for a Toronto maid cleaning service. The service helps the client and users calculate or book appointments by email."
          linkURL="https://rosiesmaidservice.ca"
          linkText="View live website"
          image="img/rosies-ms.png"
        />
      </main>
    </Layout>
  );
};
