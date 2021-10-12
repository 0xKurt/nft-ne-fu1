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
    if (!expand && STORY.content.length > 2) {
      let cutStory = STORY.content.slice(0, 2);
      setStory(cutStory.map(s => (<>
        <div className='mt-100'>
          <Image className='intext-image' src={s.image} />
        </div>
        <p className="subhead mt-20" style={{ maxWidth: '60%', minWidth: '300px' }}>{s.text}</p>
      </>)))
    } else {
      setStory(STORY.content.map(s => (<>
        <div className='mt-100'>
          <Image className='intext-image' src={s.image} />
        </div>
        <p className="subhead mt-20" style={{ maxWidth: '60%', minWidth: '300px' }}>{s.text}</p>
      </>)))
    }
    console.log('story')
  }, [expand])

  const toggleExpand = () => {
    let e = expand;
    setExpand(!e);
  }

  return (

    <div ref={nodeRef} className='pd-60 hero-2 hero' id='story'>
      <h2 className='mt-30'>{STORY.heading}</h2>
        {story}
        {!expand && <Button className='mt-50' onClick={toggleExpand}>KEEP READING</Button>}
        {isVisible && expand && <Button className='stick-bottom' variant='danger' onClick={toggleExpand}>X</Button>}
    </div>

  );
}

export default Story;