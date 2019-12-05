// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const dogStyles = css``;

export default () => {
  return (
    <Layout contentClass={dogStyles}>
      <main>
        <PortfolioHeader
          title="Rosie and Company"
          subTitle="Web Design / Front-End Development"
          description="A static Hugo website I designed for a Toronto dog walking business. Features 3 pages, one of which is a contact form."
          linkURL="https://rosieandcompany.ca"
          linkText="View live website"
          image="img/rosie-and-company.png"
        />
      </main>
    </Layout>
  );
};
