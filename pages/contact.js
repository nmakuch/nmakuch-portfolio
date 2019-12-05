// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Layout from "../components/Layout";

const contactStyles = css`
  p {
    margin-bottom: 50px;
  }

  button {
    background: black;
    color: white;
    border: none;
    padding: 10px 50px;
    font-size: 18px;
    margin-top: 25px;
  }

  .form-group {
    margin-bottom: 25px;
  }

  section#banner-h1 {
    padding: 50px 25px;

    h1 {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      line-height: 48px;
    }
  }

  section#contact-form {
    padding: 75px 0;
  }
`;

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      setInputs({
        email: "",
        message: ""
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    });
  };

  const handleOnSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputs)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <Layout contentClass={contactStyles}>
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
        <section id="contact-form">
          <div className="container">
            {/* Contact form start */}
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                      <h5>
                        <label htmlFor="email">Email</label>
                      </h5>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                      />
                    </div>
                    <div className="form-group-2">
                      <h5>
                        <label htmlFor="message">Message</label>
                      </h5>
                      <textarea
                        id="message"
                        className="form-control"
                        rows="4"
                        onChange={handleOnChange}
                        required
                        value={inputs.message}
                      />
                    </div>
                    <button type="submit" disabled={status.submitting}>
                      {!status.submitting
                        ? !status.submitted
                          ? "Submit"
                          : "Submitted"
                        : "Submitting..."}
                    </button>
                    {status.info.error && (
                      <div className="error">Error: {status.info.msg}</div>
                    )}
                    {!status.info.error && status.info.msg && (
                      <div className="success">{status.info.msg}</div>
                    )}
                  </form>
                </div>
              </div>
            </div>
            {/* Contact form end */}
          </div>
        </section>
        {/* Portfolio grid end */}
      </main>
    </Layout>
  );
};
