// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const complianceStyles = css``;

export default () => {
  return (
    <Layout contentClass={complianceStyles}>
      <main>
        <PortfolioHeader
          title="Compliance UI"
          subTitle="IX Design / Front-End Development"
          description="This is an automated tool to check security standards on Github repos. I designed and developped the front-end interface."
          linkURL="#"
          linkText="View online service"
          image="img/security-goals.png"
        />
      </main>
    </Layout>
  );
};
