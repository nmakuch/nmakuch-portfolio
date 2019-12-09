// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const ctbStyles = css`
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  section#project-background {
    padding: 100px 0;

    p:first-of-type {
      margin-bottom: 75px;
    }
  }

  section#tech {
    padding: 100px 0;
    margin-bottom: 50px;
    background-color: #fcd6d6;

    p:last-of-type {
      margin-bottom: 50px;
    }

    ul {
      padding-left: 20px;
      li {
        margin-bottom: 10px;
      }

      li:last-of-type {
        margin-bottom: 50px;
      }
    }

    a {
      font-size: 14px;
      padding: 16px 50px;
      color: white;
      font-weight: 500;
      background-color: #333;
      letter-spacing: 1px;
    }
  }

  @media only screen and (max-width: 991px) {
    section#project-background,
    section#tech {
      .offset-md-2 {
        margin-left: 5%;
      }
      .col-md-8 {
        flex: 0 0 90%;
        max-width: 90%;
      }
    }
  }
`;

export default () => {
  return (
    <Layout contentClass={ctbStyles}>
      <main>
        <PortfolioHeader
          title="Claim Tax Benefits"
          subTitle="IX Design / Front-End Development"
          description="This application is being designed in partnership with the Canada Revenue Agency (CRA), to help Canadians in vulnerable financial situations file their taxes."
          linkURL="https://claim-tax-benefits.azurewebsites.net/start"
          linkText="View site"
          image="img/claim-tax-benefits.png"
        />
        <section id="project-background">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2>Project Background</h2>
                <p>
                  This is a service I am helping design with the Canadian
                  Digital Service (CDS) in partnership with the Canada Revenue
                  Agency (CRA). CRA is trying to reach out to Canadians
                  experiencing vulnerable financial situations in order to help
                  them file their taxes and claim the benefits that are entitled
                  to them. A short Discovery phase showed us that there are a
                  lot of negative stigmas that our target users have towards
                  filing their taxes with an online service and that there is
                  extreme skepticism towards these applications due to online
                  scams. We took everything we learned in this time period and
                  applied it to an alpha prototype which is currently being
                  tested with real users. There are plans to roll out a private
                  Beta in the coming new year.
                </p>

                <h2>My role on this project</h2>
                <p>
                  As the interaction designer on the team, I am responsible for
                  designing site wide interactions and implementing them into
                  code. These interactions could include, page to page
                  navigation, form feedback states, or even the way information
                  on a page is laid out. I commonly help out with user research
                  and usability testing in order to have a basis for the design
                  decisions we make moving forward. These refinements can then
                  be mocked out and implemented into code. Their viability can
                  then be tested in future rounds of usability testing.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="tech">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <h2>Technology used in this project</h2>
                <p>
                  A number of free, open source libraries and frameworks were
                  used in this project. The tech stack chosen for this project
                  was highly influenced by the environment it is going to live
                  after project completion, CRA servers.
                </p>
                <p>
                  <strong>PugJS</strong>, a templating framework similar to
                  Jade, is being used to create page structure.{" "}
                  <strong>Express</strong>, is being used for server logic and
                  page routing. <strong>SASS</strong> and{" "}
                  <strong>Pure CSS</strong> are being used for styling.{" "}
                  <strong>Cypress</strong> is being used for automated end to
                  end testing. <strong>Jest</strong> is being used for automated
                  unit tests. <strong>AXEcore</strong> is being used to run
                  automated accessibility scans. <strong>ESLint</strong> is
                  being used to run automated linting
                </p>
                <a href="#">View Github Repo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
