// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

class PortfolioItem extends React.Component {
  render() {
    return (
      <div
        css={css`
          text-align: center;

          h2 {
            font-size: 17px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 22px;
            margin-bottom: 5px;
          }

          a {
            color: black;

            .box {
              background-color: #fcd6d6;
              padding: 75px;
              transition: background-color 0.7s ease;
            }
          }

          a:hover {
            text-decoration: none;
            color: black;

            .box {
              background-color: #ffbbbb;
              transition: background-color 0.7s ease;
            }
          }

          img {
            width: 100%;
            -webkit-filter: drop-shadow(5px 5px 5px #222);
            filter: drop-shadow(
              2px 4px 4px rgb(100, 100, 100, ${this.props.dropOpacity})
            );
          }

          p {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 50px;
          }

          @media only screen and (max-width: 1200px) {
            h2 {
              font-size: 16px;
            }
          }

          @media only screen and (max-width: 991px) {
            h2 {
              font-size: 14px;
            }

            p {
              font-size: 12px;
            }

            a {
              .box {
                padding: 50px;
              }
            }
          }

          @media only screen and (max-width: 767px) {
            h2 {
              font-size: 18px;
            }

            p {
              font-size: 16px;
            }
            a {
              .box {
                padding: 75px;
              }
            }
          }

          @media only screen and (max-width: 520px) {
            h2 {
              font-size: 16px;
            }

            p {
              font-size: 12px;
            }
            a {
              .box {
                padding: 50px 40px;
              }
            }
          }

          @media only screen and (max-width: 450px) {
            a {
              .box {
                padding: 50px 30px;
              }
            }

            h2 {
              font-size: 14px;
              margin-bottom: 5px;
            }

            p {
              font-size: 12px;
              margin-bottom: 50px;
            }
          }

          @media only screen and (max-width: 400px) {
            a {
              .box {
                padding: 35px 35px;
              }
            }

            h2 {
              font-size: 12px;
              margin-bottom: 5px;
            }

            p {
              font-size: 10px;
              margin-bottom: 50px;
            }
          }

          @media only screen and (max-width: 350px) {
            a {
              .box {
                padding: 25px 25px;
              }
            }

            h2 {
              font-size: 10px;
              margin-bottom: 2px;
              letter-spacing: 2px;
            }

            p {
              font-size: 8px;
              margin-bottom: 30px;
            }
          }
        `}
        className="col-md-6 portfolio-item"
      >
        <a href={this.props.itemLink}>
          <div className="box">
            <h2>{this.props.itemTitle}</h2>
            <p>{this.props.itemSubTitle}</p>
            <img src={this.props.itemImage} />
          </div>
        </a>
      </div>
    );
  }
}

export default PortfolioItem;
