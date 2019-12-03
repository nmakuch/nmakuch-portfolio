// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/Layout";
import BannerH1 from "../components/BannerH1";

const homeStyles = css`
  section#portfolio-grid {
    padding: 50px 0;

    .col-md-6 {
      padding-bottom: 6px;
    }
    .col-md-6:first-of-type {
      padding-right: 3px;
    }
    .col-md-6:last-of-type {
      padding-left: 3px;
    }
  }

  @media only screen and (max-width: 767px) {
    section#portfolio-grid {
      .col-sm-12, .col-md-6 {
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
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
                itemTitle="CRA Claim Tax Benefits"
                itemSubTitle="Interaction Design / Front-End Development"
                itemLink="#"
                itemImage="img/claim-tax-benefits.png"
                dropOpacity="0.6"
              />
              <PortfolioItem
                itemTitle="IRCC Rescheduler"
                itemSubTitle="Interaction Design / Front-End Development"
                itemLink="#"
                itemImage="img/ircc-rescheduler.png"
                dropOpacity="0.2"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="Security Goals UI"
                itemSubTitle="Interface Design / Front-End Development"
                itemLink="#"
                itemImage="img/security-goals.png"
                dropOpacity="0.6"
              />
              <PortfolioItem
                itemTitle="Rosie's Maid Service"
                itemSubTitle="Web Design / Front-End Development"
                itemLink="#"
                itemImage="img/rosies-ms.png"
                dropOpacity="0.6"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="Rosie and Company"
                itemSubTitle="Web Design / Front-End Development"
                itemLink="#"
                itemImage="img/rosie-and-company.png"
                dropOpacity="0.2"
              />
              <PortfolioItem
                itemTitle="Roberto and Rob"
                itemSubTitle="Character Modelling / 3D Animation"
                itemLink="#"
                itemImage="img/roberto-and-rob.png"
                dropOpacity="0.6"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="A Leading Sport Nation"
                itemSubTitle="Production Assistant / Video Editing"
                itemLink="#"
                itemImage="img/leading-sport-nation.png"
                dropOpacity="0.6"
              />
              <PortfolioItem
                itemTitle="Manion's Mud Logo"
                itemSubTitle="Company Branding / Logo Design"
                itemLink="#"
                itemImage="img/manions-mud.png"
                dropOpacity="0.6"
              />
            </div>
          </div>
        </section>
        {/* Portfolio grid end */}
      </main>
    </Layout>
  );
};
