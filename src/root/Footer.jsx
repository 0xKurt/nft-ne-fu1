import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SocialMedia from '../components/SocialMedia';
import { FOOTER, LOGO, WEBSITE_NAME } from '../data/General';


const Footer = () => {
  
  return (
    <div className='pd-20 footer hero' style={{minHeight: '100px'}} id='footer'>
      <Row className='mt-50' style={{width: '80vw'}}>
      <Col style={{textAlign: 'left'}}>
      <img src={LOGO} alt={WEBSITE_NAME} className="header-logo-image" />
      </Col>
      <Col style={{textAlign: 'right'}}>
      <SocialMedia size='28px'/>
      </Col>
    </Row>
    <Row className='mt-30' style={{width: '80vw'}}>
      <Col style={{textAlign: 'left'}}>
      <div className='bold'>
        <h5>{FOOTER.copyright}</h5>
      </div>
      </Col>
      <Col style={{textAlign: 'right'}}>
      {FOOTER.links.map(link => (
        <a href={link.to} className='bold' style={{textDecoration:'none !important', color: 'inherit'}} target='_blank'>{link.name} &nbsp; &nbsp;</a>
      ))}
      </Col>
    </Row>
    </div>
  );
}

export default Footer;