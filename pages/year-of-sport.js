// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const sportStyles = css``;

export default () => {
  return (
    <Layout contentClass={sportStyles}>
      <main>
        <PortfolioHeader
          title="A Year of Sport"
          subTitle="Production Assistant / Video Editing"
          description="This was a commercial produced by Heritage Canada during the 2016 World Juniors for mens hockey. This project was produced in partnership with Sports Canada and had a limited budget of around $50K. The short was filmed on a Red Dragon camera and edited in house."
          linkURL="https://www.youtube.com/watch?v=-_NM2_0oDDQ"
          linkText="View commercial"
          image="img/leading-sport-nation.png"
        />
      </main>
    </Layout>
  );
};
