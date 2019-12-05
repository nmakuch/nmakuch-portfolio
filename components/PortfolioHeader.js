// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const portfolioHeaderStyles = css`
  section {
    padding: 100px 0;
  }

  section#portfolio-header {
    background-color: #fcd6d6;
    .row {
      padding: 0 100px;

      h1 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      h2 {
        font-size: 14px;
        margin-bottom: 20px;
        letter-spacing: 2px;
        padding-left: 3px;
      }

      img {
        width: 100%;
      }

      p {
        margin-bottom: 43px;
        font-size: 16px;
        font-weight: 500;
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
        padding: 0 0;
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
          margin-bottom: 10px;
          font-size: 36px;
          padding-left: 0;
        }

        h2 {
          margin-bottom: 75px;
          font-size: 16px;
        }

        p {
          padding-left: 0;
          font-size: 16px;
        }

        img {
          margin-bottom: 75px;
        }

        a {
          padding: 20px 40px;
          margin-left: 0;
          font-size: 16px;
          font-weight: 600;
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
`;

class PortfolioHeader extends React.Component {
  render() {
    return (
      <div css={portfolioHeaderStyles}>
        <section id="portfolio-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <h1 className="mobile-invisible">{this.props.title}</h1>
                <h2 className="mobile-invisible">{this.props.subTitle}</h2>
                <p className="mobile-invisible">{this.props.description}</p>
                <div className="link-container">
                  <a href={this.props.linkURL}>{this.props.linkText}</a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <h1 className="mobile-visible">{this.props.title}</h1>
                <h2 className="mobile-visible">
                {this.props.subTitle}
                </h2>
                <img src={this.props.image} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PortfolioHeader;
