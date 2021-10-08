import React from 'react';
import { Button } from 'react-bootstrap';
import { VIEWITEMS } from '../data/General';

const ViewOnMarket = () => {
  return (
    <div className='pd-20 hero-3 hero'>
      <div className='content-wrapper'>
        <div className='card pd-20'>
          <div>
            <h3>{VIEWITEMS.heading}</h3>
          </div>
          <div className='mt-30' style={{opacity: '0.7'}}>
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