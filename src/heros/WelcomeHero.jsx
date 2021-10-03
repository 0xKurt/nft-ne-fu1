import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Mint from '../components/Mint';
import { CLICKMINT } from '../data/General';
import Image from 'react-bootstrap/Image';

const WelcomeHero = () => {
  return (
    <div className='hero hero-1' >
      <div className='content-wrapper mt-50'>
        <Row>
          <Row style={{width: '100%', justifyContent: 'center'}}>
              <Image src={CLICKMINT} className='intext-image' />
          </Row>
          <Row className='mt-50' style={{width: '100%', justifyContent: 'center'}}>
              <Mint />
          </Row>
        </Row>
      </div>
    </div>
  );
}

export default WelcomeHero;