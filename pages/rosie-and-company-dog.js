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
          description="This is a website I designed for a Toronto dog walking business. The site was built using Hugo, a static site generating framework developped by Google. Rosieandcompany.ca is a static 3 page website that uses Formspree to handle contact form submissions."
          linkURL="https://rosieandcompany.ca"
          linkText="View site"
          image="img/rosie-and-company.png"
        />
      </main>
    </Layout>
  );
};
