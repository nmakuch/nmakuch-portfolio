// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const portfolioHeaderStyles = css`
  section {
    padding: 100px 0;
    margin-bottom: 50px;
  }

  section#portfolio-header {
    background-color: #fcd6d6;
    .row {
      h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      h2 {
        font-size: 14px;
        margin-bottom: 15px;
        font-weight: 500;
        padding-left: 3px;
      }

      img {
        width: 100%;
      }

      p {
        margin-bottom: 43px;
        font-size: 16px;
        font-weight: 400;
        padding-right: 25px;
      }

      a {
        font-size: 14px;
        padding: 16px 50px;
        color: white;
        font-weight: 500;
        background-color: #333;
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
        h1 {
          font-size: 28px;
          margin-bottom: 15px;
        }

        h2 {
          font-size: 12px;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          margin-bottom: 35px;
          padding-right: 0;
        }

        a {
          font-size: 12px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    section#portfolio-header {
      .link-container {
        display: flex;
        justify-content: center;
      }
      .row {
        flex-direction: column-reverse;

        h1 {
          margin-bottom: 75px;
          font-size: 36px;
          padding-left: 0;
          text-align: center;
        }

        h2 {
          margin-bottom: 10px;
          font-size: 16px;
          text-align: center;
        }

        p {
          padding-left: 0;
          font-size: 16px;
          margin-bottom: 50px;
          text-align: left;
        }

        img {
          margin-bottom: 75px;
        }

        a {
          padding: 20px 41%;
          margin-left: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .mobile-visible {
          display: block;
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
          padding: 20px 38%;
        }
      }
    }
  }

  @media only screen and (max-width: 520px) {
    section#portfolio-header {
      .row {
        a {
          font-size: 14px;
        }

        h1 {
          font-size: 28px;
        }

        h2 {
          font-size: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    section#portfolio-header {
      .row {
        a {
          padding: 20px 36.5%;
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    section#portfolio-header {
      .row {
        a {
          padding: 20px 35%;
        }
      }
    }
  }

  @media only screen and (max-width: 350px) {
    section#portfolio-header {
      .row {
        a {
          padding: 20px 32.5%;
        }
      }
    }
  }
`;

class PortfolioHeader extends React.Component {
  render() {
    return (
      <div css={portfolioHeaderStyles}>
        <section id="portfolio-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h2 className="mobile-invisible">{this.props.subTitle}</h2>
                <h1 className="mobile-invisible">{this.props.title}</h1>
                <p className="mobile-invisible">{this.props.description}</p>
                <div className="link-container">
                  <a target="_blank" href={this.props.linkURL}>
                    {this.props.linkText}
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <h2 className="mobile-visible">{this.props.subTitle}</h2>
                <h1 className="mobile-visible">{this.props.title}</h1>
                <img src={this.props.image} />
                <p className="mobile-visible">{this.props.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PortfolioHeader;
