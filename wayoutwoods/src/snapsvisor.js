import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row,
  Col,
  Container,
} from "reactstrap";
import kraftskiva from "./img/kraftskiva.jpg";
import "./App.css";

const items = [
  {
    id: 1,
    caption: "Helan går",
    melody: "MELODI: HELAN GÅR",
    songlyrics: `Helan går, sjung hopp falleri faderallan-la
Helan går, sjung hopp faderallan-lej
Och den som inte helan tar
han heller inte halvan får
Helan gåååååååår
sjung hopp faderallan lej.
        `,
  },
  {
    id: 2,
    caption: "Kräfta prydd med dill",
    melody: "MELODI: BLINKA LILLA STJÄRNA/TWINKLE TWINKLE LITTLE STAR",
    songlyrics: `Kräfta, kräfta prydd med dill,
och en immig sup därtill.
Bröd och smör och ost och sill,
och så några supar till.
Kräfta, kräfta prydd med dill,
nu har vi fått allt vi vill.`,
  },
  {
    id: 3,
    caption: "Kräftor Kräver Små Nubbar",
    melody: "MELODI: RÄVEN RASKAR ÖVER ISEN",
    songlyrics: `Kräftor kräver ju små nubbar
Kräftor kräver ju små nubbar
En liten snaps, till varje klo,
det är för strupen en lisa.

Så här gör kräftvännen när det står,
kräftor på bordet och när han får,
en liten snaps, till varje klo.
Nu är det slut på vår visa.`,
  },
  {
    id: 4,
    caption: "Humlorna",
    melody: "MELODI: KARL-ALFRED-BOY",
    songlyrics: `Vi äro små humlor vi, bzz, bzz.
Vi äro små humlor vi, bzz, bzz.
Vi äro små humlor som tar oss en geting.

Vi äro små humlor vi, bzz, bzz.`,
  },
  {
    id: 5,
    caption: "Tänk Om Jag Hade Lilla Nubben",
    melody: "MELODI: HEJ TOMTEGUBBAR",
    songlyrics: `Tänk om jag hade lilla nubben på ett snöre i halsen.
Tänk om jag hade lilla nubben på ett snöre i halsen.
Jag skulle dra den upp och ner,
så att den kändes som många fler.
Tänk om jag hade lilla nubben på ett snöre i halsen.`,
  },
  {
    id: 6,
    caption: "Dom Nubbarna",
    melody: "MELODI: SMÅ GRODORNA",
    songlyrics: `Dom nubbarna, dom nubbarna 
är lustiga att ta
dom nubbarna, dom nubbarna
dom vill vi gärna ha.
Ej röra, ej röra, nej skala kräftan först
och sedan, och sedan, vi släcka ska vår törst.`,
  },
  {
    id: 7,
    caption: "Kräftor är så goda",
    melody: "MELODI: PERSONLIGA PERSSON",
    songlyrics: `Kräftor är så goda, jag kan äta dem hela dagen
    Men om det många kräftor blir - ja, då får jag ont i magen
    Fyra kräftor det är ingenting för mig 
    Flera kräftor ja då blir det ett tjohej
    
    Springa till toaletten
    Nubben in i käften`,
  }
];

function Snapsvisor(props) {
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
        className="custom-tag align-items-center align-text-center justify-content-center"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <h3 className="song-caption">{item.caption}</h3>
        <p className="song-melody">{item.melody}</p>
        <pre className="song-lyrics">{item.songlyrics}</pre>
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

      <Carousel
        interval={null}
        dark="true"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
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

export default Snapsvisor;
