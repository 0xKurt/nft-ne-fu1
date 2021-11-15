import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Mint from '../components/Mint';
import { CLICKMINT, WELCOME } from '../data/General';
import Image from 'react-bootstrap/Image';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

const WelcomeHero = () => {

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Mint />;
    } else {
      // Render a countdown
      return <div>
        <Row style={{ width: '100vw', justifyContent: 'center' }}>
          <h3>Launch Countdown</h3>
        </Row>
        <Row style={{ width: '100vw', justifyContent: 'center' }}>
          <div>
            <div className='pd-10'>
              <div className='small-card pd-15' style={{ width: '90px' }}>
                <h5>{zeroPad(days)}</h5>
                <span style={{ fontSize: '14px' }}>Days</span>
              </div>
            </div>
            <div className='pd-10'>
              <div className='small-card pd-15' style={{ width: '90px' }}>
                <h5>{zeroPad(hours)}</h5>
                <span style={{ fontSize: '14px' }}>Hours</span>
              </div>
            </div>
          </div>
          <div>
            <div className='pd-10'>
              <div className='small-card pd-15' style={{ width: '90px' }}>
                <h5>{zeroPad(minutes)}</h5>
                <span style={{ fontSize: '14px' }}>Minutes</span>
              </div>
            </div>
            <div className='pd-10'>
              <div className='small-card pd-15' style={{ width: '90px' }}>
                <h5>{zeroPad(seconds)}</h5>
                <span style={{ fontSize: '14px' }}>Seconds</span>
              </div>
            </div>
          </div>
        </Row>

      </div>;
    }
  };

  return (
    <div className='hero hero-1' id='welcome'>
      <div className='content-wrapper mt-20'>
        <Row style={{ justifyContent: 'center' }}>
          <Row style={{ width: '100%', justifyContent: 'center' }}>
            {/* <Image src={CLICKMINT} className='intext-image' /> */}
          </Row>
          <Row className='mt-50' style={{ width: '100%', justifyContent: 'center' }}>
            <Countdown date={1636959600 * 1000} renderer={renderer} zeroPadTime='2' /> 
            {/* 1636930800 */}
          </Row>
        </Row>
      </div>
      <div className='background-image1'></div>
    </div>
  );
}

export default WelcomeHero;