// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import Link from "next/link";

const footerStyles = css`
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
    padding: 0px 20px;
  }

  footer .footer-manu ul li a {
    display: inline-block;
    color: #494949;
  }

  footer .footer-manu ul li a:hover {
    color: #007bff;
  }

  p {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 50px;
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
                      <Link href="/" as="/">
                        <a>Twitter</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" as="/services">
                        <a>LinkedIn</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" as="/faq">
                        <a>Github</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" as="/contact">
                        <a>Email</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <p>Copyright &copy;, Nick Makuch 2019</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
