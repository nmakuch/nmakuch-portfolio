// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/Layout";
import BannerH1 from "../components/BannerH1";

const homeStyles = css`
  section#portfolio-grid {
    padding: 75px 0;

    .col-6 {
      padding-bottom: 6px;
    }
    .col-6:first-of-type {
      padding-right: 3px;
    }
    .col-6:last-of-type {
      padding-left: 3px;
    }
  }
`;

export default () => {
  return (
    <Layout contentClass={homeStyles}>
      <main>
        {/* Banner h1 section start */}
        <BannerH1 />
        {/* Banner h1 section end */}

        {/* Portfolio grid start */}
        <section id="portfolio-grid">
          <div className="container">
            <div className="row">
              <PortfolioItem
                itemTitle="Rosie's Maid Service"
                itemSubTitle="Web-Design / Front-End Development"
                itemLink="#"
                itemImage="img/rosies-ms.png"
              />
              <PortfolioItem
                itemTitle="Rosie and Company"
                itemSubTitle="Web-Design / Front-End Development"
                itemLink="#"
                itemImage="img/rosie-and-company.png"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="Rosie's Maid Service"
                itemSubTitle="Web-Design / Front-End Development"
                itemLink="#"
                itemImage="img/rosies-ms.png"
              />
              <PortfolioItem
                itemTitle="Rosie and Company"
                itemSubTitle="Web-Design / Front-End Development"
                itemLink="#"
                itemImage="img/rosie-and-company.png"
              />
            </div>
          </div>
        </section>
        {/* Portfolio grid end */}
      </main>
    </Layout>
  );
};
