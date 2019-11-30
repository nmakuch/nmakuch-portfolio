// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Layout from "../components/Layout";

const homeStyles = css`
  section#banner-h1 {
    padding: 50px 25px;

    h1 {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      line-height: 48px;
    }
  }

  section#portfolio-grid {
    padding: 75px 0;

    h2 {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    .row {
      padding: 0 15px;
    }

    .col-6 {
      padding: 0 2px;
      text-align: center;
    }

    .box {
      background-color: #ffcccc;
      padding: 75px;
    }

    img {
      width: 100%;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 50px;
    }
  }
`;

export default () => {
  return (
    <Layout contentClass={homeStyles}>
      <main>
        {/* Banner h1 section start */}
        <section id="banner-h1">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="block">
                  <h1>
                    Hi, I'm Nick Makuch! I'm an interaction designer based out
                    of Ottawa, Ontario. I make websites, graphics and videos.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner h1 section end */}

        {/* Portfolio grid start */}
        <section id="portfolio-grid">
          <div className="container">
            <div className="row">
              <div className="col-6 portfolio-item">
                <div className="box">
                  <h2>Rosie's Maid Service</h2>
                  <p>Web-Design / Front-end development</p>
                  <img src="img/rosies-ms.png" />
                </div>
              </div>
              <div className="col-6 portfolio-item">
                <div className="box">
                  <h2>Rosie's Maid Service</h2>
                  <p>Web-Design / Front-end development</p>
                  <img src="img/rosies-ms.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio grid end */}
      </main>
    </Layout>
  );
};
