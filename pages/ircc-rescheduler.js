// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const irccStyles = css``;

export default () => {
  return (
    <Layout contentClass={irccStyles}>
      <main>
        <PortfolioHeader
          title="IRCC Rescheduler"
          subTitle="IX Design / Front-End Development"
          description="This is a service that was designed in partnership with the Canada Revenue Agency (CRA). It's purpose is to help Canadians exposed to vulnerable financial situations. The service was built as a server-rendered ReactJS application and supports a no JS environment."
          linkURL="https://vancouver.rescheduler-dev.cds-snc.ca"
          linkText="View online service"
          image="img/ircc-rescheduler.png"
        />
      </main>
    </Layout>
  );
};
