// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

class BannerH1 extends React.Component {
  render() {
    return (
      <section
        css={css`
          padding: 75px 25px 75px 25px;

          h1 {
            font-size: 36px;
            font-weight: 700;
            text-align: center;
            line-height: 48px;
          }

          @media only screen and (max-width: 1200px) {
            h1 {
              font-size: 33px;
              text-align: center;
              line-height: 42px;
            }
          }

          @media only screen and (max-width: 991px) {
            .container {
              max-width: 900px;
            }
            h1 {
              font-size: 32px;
              text-align: center;
              line-height: 42px;
            }
          }

          @media only screen and (max-width: 767px) {
            padding: 50px 25px 50px 25px;
            h1 {
              font-size: 34px;
              text-align: center;
              line-height: 48px;
            }

            .disappear {
              display: none;
            }

            .container {
              max-width: 550px;
            }
          }

          @media only screen and (max-width: 515px) {
            h1 {
              font-size: 32px;
              line-height: 46px;
            }
          }

          @media only screen and (max-width: 450px) {
            h1 {
              font-size: 30px;
              line-height: 40px;
            }
          }

          @media only screen and (max-width: 400px) {
            h1 {
              font-size: 28px;
              line-height: 34px;
            }
          }

          @media only screen and (max-width: 350px) {
            padding: 25px 15px 25px 15px;
            h1 {
              font-size: 24px;
              line-height: 30px;
            }
          }
        `}
        id="banner-h1"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="block">
                <h1>
                  Hi, I'm Nick Makuch! I'm an interaction designer based out of
                  Ottawa, Ontario.
                  <span className="disappear">
                    {" "}
                    I make websites, graphics and videos.
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BannerH1;
