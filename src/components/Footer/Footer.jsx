import React from 'react';

import { FooterContainer, LogoTitle, Conditions, Link } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoTitle>
        <h4>trends.com</h4>
        <div>
          <Link>Contact</Link>
          <Link>About</Link>
          <Link>Help</Link>
        </div>
      </LogoTitle>
      <Conditions>
        Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 2020, Trends.com, Inc. or its affiliates
      </Conditions>
    </FooterContainer>
  );
};

export default Footer;