import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div className="w-100 ">
        <h2 className="text-center">Связаться с нами</h2>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label className="w-100" >
              Don’t fill this out:{" "}
              <input className="w-100" name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label style={{fontWeight:'100'}} className="w-100">
              Your name:<br />
              <input className="w-100" type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label style={{fontWeight:'100'}} className="w-100">
              Your email:<br />
              <input className="w-100" type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label style={{fontWeight:'100'}} className="w-100">
              Message:<br />
              <textarea className="w-100" name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p className="text-center">
            <button className="w-50"  type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
