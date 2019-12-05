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
          description="A 60 second short film I produced while in university. Motion capture, 3D modelling/animation, and video editing were done by me."
          linkURL="https://vancouver.rescheduler-dev.cds-snc.ca"
          linkText="View animation"
          image="img/roberto-and-rob.png"
        />
      </main>
    </Layout>
  );
};
