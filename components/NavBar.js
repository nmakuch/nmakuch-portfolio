// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Component } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const navbarStyles = css`
margin: 40px 0;
padding: 0 !important;

a {
    padding: 0;
    font-size: 18px;
}
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav css={navbarStyles} className="navbar navbar-expand-lg navbar-light transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Logo />
          </a>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <div
              css={css`
                a {
                  margin-left: 50px;
                  color: #333;
                  font-size: 16px;
                  font-weight: 500;
                  transition: color 0.7s ease;
                }

                a:hover {
                    text-decoration: none;
                    color: #d64343;
                    transition: color 0.7s ease;
                }

                @media only screen and (max-width: 992px) {
                  a {
                    margin-left: 0;
                    margin-bottom: 20px;
                  }
                }
              `}
              className="navbar-nav ml-auto"
            >
              <Link href="/" as="/">
                <a>Portfolio</a>
              </Link>

              <Link href="/about" as="/about">
                <a>About</a>
              </Link>

              <Link href="/contact" as="/contact">
                <a>Contact Me</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
