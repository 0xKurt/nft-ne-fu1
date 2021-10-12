import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Marquee from "react-easy-marquee";
import { VIEWITEMS } from '../data/General';

const ViewOnMarket = () => {
  return (
    <div className='hero-3 hero' id='market'>
      <Row className='' xs={4} style={{ minHeight: 'calc(100vh + 7px)', backgroundColor: 'purple' }}>
        <div style={{ width: '25vw' }} className='pd-0'>
          <Marquee duration={100000} axis='Y' height='110vh' align='center' reverse={true}>

            {VIEWITEMS.imgs.map((image) => (
              <div className='reverse'><img src={image} alt="" style={{ width: '25vw', height: '25vw' }} /></div>
            ))}
          </Marquee>
        </div>
        <div style={{ width: '25vw' }} className='pd-0'>
          <Marquee duration={100000} axis='Y' height='110vh' align='center' reverse={false}>

            {VIEWITEMS.imgs.map((image) => (
              <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
            ))}
          </Marquee>
        </div>
        <div style={{ width: '25vw' }} className='pd-0'>
          <Marquee duration={100000} axis='Y' height='110vh' align='center' reverse={true}>

            {VIEWITEMS.imgs.map((image) => (
              <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
            ))}
          </Marquee>
        </div>
        <div style={{ width: '25vw' }} className='pd-0'>
          <Marquee duration={100000} axis='Y' height='110vh' align='center' reverse={false}>

            {VIEWITEMS.imgs.map((image) => (
              <img src={image} alt="" style={{ width: '25vw', height: '25vw' }} />
            ))}
          </Marquee>
        </div>
      </Row>
      <div className='content-wrapper'>
        <div className='card pd-20'>
          <div>
            <h3>{VIEWITEMS.heading}</h3>
          </div>
          <div className='mt-30' style={{ opacity: '0.7' }}>
            <h6>{VIEWITEMS.text}</h6>
          </div>
          <div className='mt-40'>
            <Button>{VIEWITEMS.buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewOnMarket;