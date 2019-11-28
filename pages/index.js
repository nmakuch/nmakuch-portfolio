import React, { useState } from "react";
import Layout from "../components/Layout";

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
    <Layout>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="block">
                  <form onSubmit={handleOnSubmit}>
                    <div>
                      <h5>
                        <label htmlFor="email">Email</label>
                      </h5>
                      <input
                        id="email"
                        type="email"
                        onChange={handleOnChange}
                        required
                        value={inputs.email}
                      />
                    </div>
                    <div>
                      <h5>
                        <label htmlFor="message">Message</label>
                      </h5>
                      <textarea
                        id="message"
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
                  </form>
                </div>
              </div>
            </div>
          </div>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
        </section>
      </main>
    </Layout>
  );
};
