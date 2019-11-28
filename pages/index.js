// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Layout from "../components/Layout";

const homeStyles = css`
  h1 {
    margin-bottom: 15px;
  }

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

  section {
    padding: 75px 25px;
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
    <Layout contentClass={homeStyles}>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-sm-12">
                <div className="block">
                  <h1>Site is under construction</h1>
                  <p>
                    <strong>Note:</strong> If you'd like to get in touch, you
                    can fill out the form below and I'll get back to you.
                  </p>
                </div>
              </div>
            </div>
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
          </div>
        </section>
      </main>
    </Layout>
  );
};
