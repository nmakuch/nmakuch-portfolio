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
          description="A simple, accessible, server-rendered ReactJS application that allows immigrants to reschedule citizenship appointments online. Works with no JS."
          linkURL="https://vancouver.rescheduler-dev.cds-snc.ca"
          linkText="View online service"
          image="img/ircc-rescheduler.png"
        />
      </main>
    </Layout>
  );
};
