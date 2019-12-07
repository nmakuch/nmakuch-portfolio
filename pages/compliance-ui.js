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
          description="This is a tool that was developed internally at the Canadian Digital Service (CDS) to automate security compliance checks on development projects. I designed and developped the front-end interface using ReactJS and EmotionJS. The tool runs scans on each repo push and flags any checks/scans that failed."
          linkURL="https://security-goals-demo.cdssandbox.xyz/web-report/"
          linkText="View live demo"
          image="img/security-goals.png"
        />
      </main>
    </Layout>
  );
};
