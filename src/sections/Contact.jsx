
import React from "react";

function Contact() {
  const contacts = [
    {
      label: "EMAIL",
      value: "katheasanandres@gmail.com",
      href: "mailto:katheasanandres@gmail.com",
    },
    {
      label: "GITHUB",
      value: "github.com/katheasanandres",
      href: "https://github.com/katheasanandres",
    },
    {
      label: "DISCORD",
      value: "kikatrize",
      href: "https://discordapp.com/users/kikatrize",
    },
  ];

  return (
    <div className="contact-section">
      <p className="section-intro">
        Have a question or just want to say hello?
        Feel free to reach out to me!
      </p>

      <div className="contact-list">
        {contacts.map((contact) => (
          <a
            className="contact-item"
            href={contact.href}
            key={contact.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-item__label">
              {contact.label}
            </span>

            <span className="contact-item__value">
              {contact.value}
            </span>

            <span className="contact-item__arrow">↗</span>
          </a>
        ))}
      </div>

      <p className="contact-note">
        I'd love to hear from you!
      </p>
    </div>
  );
}

export default Contact;
