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

  @media only screen and (max-width: 991px) {
    section#portfolio-grid {
      .container {
        max-width: 1200px !important;
        padding: 0 25px !important;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    section#portfolio-grid {
      .col-sm-12,
      .col-md-6 {
        padding-right: 25px !important;
        padding-left: 25px !important;
      }
      .container {
        max-width: 600px !important;
      }
    }
  }

  @media only screen and (max-width: 515px) {
    section#portfolio-grid {
      .container {
        max-width: 550px !important;
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
                itemTitle="Claim tax benefits"
                itemSubTitle="IX Design / Front-End Development"
                itemLink="/claim-tax-benefits"
                itemImage="img/claim-tax-benefits.png"
                dropOpacity="0.6"
              />
              <PortfolioItem
                itemTitle="Compliance UI"
                itemSubTitle="IX Design / Front-End Development"
                itemLink="/compliance-ui"
                itemImage="img/security-goals.png"
                dropOpacity="0.6"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="Rosie & Co. Dog Walking"
                itemSubTitle="Web Design / Front-End Development"
                itemLink="/rosie-and-company-dog"
                itemImage="img/rosie-and-company.png"
                dropOpacity="0.2"
              />
              <PortfolioItem
                itemTitle="Rosie & Co. Maid Service"
                itemSubTitle="Web Design / Front-End Development"
                itemLink="/rosie-and-company-maid"
                itemImage="img/rosies-ms.png"
                dropOpacity="0.6"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="IRCC Rescheduler"
                itemSubTitle="IX Design / Front-End Dev"
                itemLink="/ircc-rescheduler"
                itemImage="img/ircc-rescheduler.png"
                dropOpacity="0.2"
              />
              <PortfolioItem
                itemTitle="Roberto and Rob"
                itemSubTitle="Character Modelling / 3D Animation"
                itemLink="/roberto-and-rob"
                itemImage="img/roberto-and-rob.png"
                dropOpacity="0.6"
              />
            </div>

            <div className="row">
              <PortfolioItem
                itemTitle="A Year of Sport"
                itemSubTitle="PA / Video Editing"
                itemLink="/year-of-sport"
                itemImage="img/leading-sport-nation.png"
                dropOpacity="0.6"
              />
              <PortfolioItem
                itemTitle="Manion's Mud"
                itemSubTitle="Branding / Logo Design"
                itemLink="/manions-mud"
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
