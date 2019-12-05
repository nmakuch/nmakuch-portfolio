// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const manionStyles = css``;

export default () => {
  return (
    <Layout contentClass={manionStyles}>
      <main>
        <PortfolioHeader
          title="Manion's Mud Logo"
          subTitle="Branding / Logo Design"
          description="A logo I designed for a local Ottawa drywalling business. The logo has been used in business cards, T-shirts and truck magnets."
          linkURL="https://vancouver.rescheduler-dev.cds-snc.ca"
          linkText="View logo"
          image="img/manions-mud.png"
        />
      </main>
    </Layout>
  );
};
