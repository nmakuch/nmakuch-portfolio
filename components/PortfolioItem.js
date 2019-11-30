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
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 3px;
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
          }

          p {
            font-size: 14px;
            font-weight: 400;
            margin-bottom: 50px;
          }
        `}
        className="col-6 portfolio-item"
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
