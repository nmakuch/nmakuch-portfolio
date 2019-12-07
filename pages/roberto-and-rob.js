// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import Layout from "../components/Layout";
import PortfolioHeader from "../components/PortfolioHeader";

const robertoStyles = css``;

export default () => {
  return (
    <Layout contentClass={robertoStyles}>
      <main>
        <PortfolioHeader
          title="Roberto and Rob"
          subTitle="Character Modelling / 3D Animation"
          description="A 60 second short film I produced while in university. We had 4 months to complete this project and all work was done individually. I created all 3D models and environments seen in the short. I then rigged these characters and recorded motion capture profiles for them in a studio."
          linkURL="https://www.youtube.com/watch?v=b0Bv7KuAJZA"
          linkText="View 3D animation"
          image="img/roberto-and-rob.png"
        />
      </main>
    </Layout>
  );
};
