import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { STORY } from '../data/General';
import Image from 'react-bootstrap/Image';
import { useIsVisible } from 'react-is-visible'

const Story = () => {
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)

  const [story, setStory] = useState('');
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if(!expand && STORY.length > 2) {
      let cutStory = STORY.slice(0,2);
      setStory(cutStory.map(s => (<>
        <div className='mt-50'>
          <Image className='intext-image' src={s.image} />
        </div>
        <p className="subhead mt-20" style={{maxWidth: '80%'}}>{s.text}</p>
        </>)))
    } else {
      setStory(STORY.map(s => (<>
        <div className='mt-50'>
          <Image className='intext-image' src={s.image} />
        </div>
        <p className="subhead mt-20" style={{maxWidth: '80%'}}>{s.text}</p>
        </>)))
    }
  },[expand])

  const toggleExpand = () => {
    let e = expand;
    setExpand(!e);
  }

  return (

        <div ref={nodeRef} className='pd-20 mt-50 hero-2 hero'>
          {story}
          {!expand && <Button onClick={toggleExpand}>KEEP READING</Button>}
          {isVisible && expand && <Button className='stick-bottom' variant='outline-secondary' onClick={toggleExpand}>X</Button> }
        </div>

  );
}

export default Story;