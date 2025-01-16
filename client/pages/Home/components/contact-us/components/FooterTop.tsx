import React, { FunctionComponent } from "react";
import { ContactInfo } from "client/utils/contact-info";
const FooterTop: FunctionComponent = () => {
  const contactInfo = ContactInfo.map(({ icon, id, contactType, moreInfo }) => {
    return (
      <div className="info-type" key={id} id={`${id}`}>
        <i className={`fas fa-${icon}`}></i>
        <div className="info">
          <h4>
            {contactType.charAt(0).toUpperCase() + contactType.substring(1)} me
          </h4>
          <span>{moreInfo}</span>
        </div>
      </div>
    );
  });
  return <div className="footer-top">{contactInfo}</div>;
};

export default FooterTop;
