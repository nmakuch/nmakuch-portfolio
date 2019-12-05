// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import Link from "next/link";

const footerStyles = css`
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);

  .social-icon {
    font-size: 40px;
  }

  footer a {
    color: #595959;
  }

  footer .footer-manu {
    padding-bottom: 15px;
  }

  footer .footer-manu ul {
    margin: 0px;
    padding: 0px;
    text-align: center;
  }

  footer .footer-manu ul li {
    display: inline-block;
    padding: 0 25px 15px 25px;
  }

  footer .footer-manu ul li a {
    display: inline-block;
    color: #333;
    transition: color 0.7s ease;
  }

  footer .footer-manu ul li a:hover {
    color: #c03a3a;
    transition: color 0.7s ease;
  }

  p {
    text-align: center;
    margin-bottom: 50px;
    font-weight: 600;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <div css={footerStyles}>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-manu">
                  <ul>
                    <li>
                      <Link href="#" as="#">
                        <a className="social-icon">
                          {" "}
                          <i className="fa fa-twitter-square"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" as="/faq">
                        <a className="social-icon">
                          {" "}
                          <i className="fa fa-github-square"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" as="/services">
                        <a className="social-icon">
                          {" "}
                          <i className="fa fa-linkedin-square"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" as="/contact">
                      <a className="social-icon">
                          {" "}
                          <i className="fa fa-envelope-square"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <p>Nick Makuch, copyright &copy; 2019</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
