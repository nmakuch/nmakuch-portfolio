// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";

const ctbStyles = css`
  section {
    padding: 100px 0;
  }

  section#portfolio-header {
    background-color: #fcd6d6;
    .row {
      padding: 0 100px;

      h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        padding-left: 25px;
      }

      img {
        width: 100%;
      }

      p {
        padding-left: 25px;
        margin-bottom: 43px;
        font-size: 14px;
        font-weight: 500;
      }

      a {
        margin-left: 25px;
        font-size: 14px;
        padding: 16px 50px;
        color: #fcd6d6;
        font-weight: 500;
        background-color: #333;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .mobile-visible {
        display: none;
      }

      .mobile-invisible {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    section#portfolio-header {
      .row {
        padding: 0 0;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    section#portfolio-header {
      .row {
        flex-direction: column-reverse;

        h1 {
          margin-bottom: 10px;
          font-size: 28px;
          padding-left: 0;
        }

        p {
            padding-left: 0;
            font-size: 16px;
        }

        img {
            margin-bottom: 50px;
        }

        a {
            padding: 20px 38%;
            margin-left: 0;
        }

        .mobile-visible {
          display: block;
          text-align: center;
        }

        .mobile-invisible {
          display: none;
        }

        .col-md-6 {
          max-width: 100%;
          padding: 0 10%;
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
      section#portfolio-header {
          .row {
              a {
                  padding: 20px 36%;
              }
          }
      }
  }

  @media only screen and (max-width: 520px) {
    section#portfolio-header {
        .row {
            a {
                padding: 20px 35%;
            }
        }
    }
}

@media only screen and (max-width: 450px) {
    section#portfolio-header {
        .row {
            a {
                padding: 20px 32%;
            }
        }
    }
}

@media only screen and (max-width: 400px) {
    section#portfolio-header {
        .row {
            a {
                padding: 20px 30%;
            }
        }
    }
}

@media only screen and (max-width: 350px) {
    section#portfolio-header {
        .row {
            a {
                padding: 20px 27%;
            }
        }
    }
}
`;

export default () => {
  return (
    <Layout contentClass={ctbStyles}>
      <main>
        <section id="portfolio-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h1 className="mobile-invisible">CRA Claim Tax Benefits</h1>
                <p className="mobile-invisible">
                  This is a service I am currently working on with the Canadian
                  Digital Service. The project is in it's alpha phase. This
                  application is being designed to help Canadians file their
                  taxes. The main target users for this product are Canadian
                  citizens whom are facing vulnerable financial situations.
                </p>
                <a>View service</a>
              </div>
              <div className="col-md-6 col-sm-6">
                <h1 className="mobile-visible">CRA Claim Tax Benefits</h1>
                <p className="mobile-visible">IX Design / Front-End Development</p>
                <img src="img/claim-tax-benefits.png" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
