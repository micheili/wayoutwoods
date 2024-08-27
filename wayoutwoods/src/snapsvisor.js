import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
  Container
} from 'reactstrap';
import kraftskiva from './img/kraftskiva.jpg'
import "./App.css";


const items = [
  {
    id: 1,
    caption: 'Helan går',
    melody: 'MELODI: HELAN GÅR',
    songlyrics: `
        Helan går,
sjung hopp falleri faderallan lej
Helan går,
sjung hopp faderallan lej 
Och den som inte helan tar
han inte heller halvan får
Helan gåååååååår
sjung hopp faderallan lej.
        `
  },
  {
    id: 2,
    caption: 'Slide 2',
    melody: 'Slide 2',
    songlyrics: 'sss'

  },
  {
    id: 3,
    caption: 'Slide 3',
    text: 'Slide 3',
    songlyrics: 'ssss'
  },
];

function Example(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag align-items-center align-text-center"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)
        }
      >
                <p className='song-lyrics'>{item.songlyrics}</p>

        <CarouselCaption
          className="text-danger"
          captionText={item.text}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
<Container fluid className="text-center">
          <Row>
            <Col>
              <img className="logo" roundedCircle fluid src={kraftskiva} />
            </Col>
          </Row>
        </Container>      
        <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: white;
            }`}
      </style>
      <Carousel autoplay="false" dark="true" activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Example;