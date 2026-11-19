import React, { useState } from "react";

function Contact() {
  const [copiedLabel, setCopiedLabel] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); 

  const handleCopy = (e, label, textToCopy) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "63181fdb-0540-472f-a38b-3bfed71184ea",
          subject: `Portfolio Inquiry from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contacts = [
    {
      label: "EMAIL",
      value: "katheasanandres@gmail.com",
      href: "mailto:katheasanandres@gmail.com",
      copyText: "katheasanandres@gmail.com",
      isExternal: false,
    },
    {
      label: "GITHUB",
      value: "github.com/katheasanandres",
      href: "https://github.com/katheasanandres",
      copyText: null,
      isExternal: true,
    },
    {
      label: "DISCORD",
      value: "kikatrize",
      href: null,
      copyText: "773059930450034699",
      isExternal: false,
    },
  ];

  return (
    <div className="contact-section">
      <p className="section-intro">
        Have a question or just want to say hello? Feel free to reach out to me!
      </p>

      {/* Interactive Message Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <div className="contact-form__group">
            <label htmlFor="contact-name">YOUR NAME</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Meow Meow"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="contact-email">YOUR EMAIL</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="meow@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-form__group">
          <label htmlFor="contact-message">MESSAGE</label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="contact-form__submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message →"}
        </button>

        {status === "success" && (
          <p className="contact-form__feedback contact-form__feedback--success">
            Message sent! Thank you for reaching out — I&apos;ll get back to you
            soon.
          </p>
        )}

        {status === "error" && (
          <p className="contact-form__feedback contact-form__feedback--error">
            Something went wrong. Please try again or copy my email below.
          </p>
        )}
      </form>

      <div className="contact-divider">OR CONNECT DIRECTLY</div>

      <div className="contact-list">
        {contacts.map((contact) => {
          const isCopied = copiedLabel === contact.label;

          if (contact.href) {
            return (
              <a
                className="contact-item"
                href={contact.href}
                key={contact.label}
                target={contact.isExternal ? "_blank" : undefined}
                rel={contact.isExternal ? "noopener noreferrer" : undefined}
              >
                <span className="contact-item__label">{contact.label}</span>
                <span className="contact-item__value">{contact.value}</span>

                {contact.copyText && (
                  <button
                    type="button"
                    onClick={(e) =>
                      handleCopy(e, contact.label, contact.copyText)
                    }
                    style={{
                      background: "#f6e8d8",
                      border: "1px solid #d8bba7",
                      borderRadius: "3px",
                      padding: "3px 8px",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      color: "#a85e65",
                      cursor: "pointer",
                    }}
                  >
                    {isCopied ? "COPIED!" : "COPY"}
                  </button>
                )}
              </a>
            );
          }

          return (
            <div
              className="contact-item"
              key={contact.label}
              onClick={(e) => handleCopy(e, contact.label, contact.copyText)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCopy(e, contact.label, contact.copyText);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="contact-item__label">{contact.label}</span>
              <span className="contact-item__value">{contact.value}</span>
              <span
                style={{
                  background: "#f6e8d8",
                  border: "1px solid #d8bba7",
                  borderRadius: "3px",
                  padding: "3px 8px",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  color: "#a85e65",
                }}
              >
                {isCopied ? "COPIED!" : "COPY ID"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;