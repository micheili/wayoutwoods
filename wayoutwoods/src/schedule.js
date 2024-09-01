import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
  import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';

export default function Schedule() {

  // for each item, run a function to check each item timestamp
// function -- if timestamp is equal or later than NOW - set style

    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  
    return (
      <div>
        <Accordion flush open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId="1">Friday</AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>Those of you coming for the whole weekend - Welcome to the woods!</strong>
              <br></br> 
                <strong>- Please arrive preferably by 15.00 -</strong>
              <br></br>
              <br></br>
              <strong>12.00-17.00 "Check in" - Reception Vrå Bygdegård</strong>
              <br></br>
              We will show you where you will stay, park or pitch your tent
              <br></br>
              Make sure to bring your own sheets and towels!
              <br></br>
              <br></br>
              <strong>18.00 Kräftskiva - Vrågården</strong>
              <br></br>
              Food and drinks provided - also some options for the dairy and gluten intolerant
              <br></br>
              <br></br>
              <strong>20.00-22:00 Open mic</strong> 
              <br></br>
              We'll keep a list so let us know if you want to perform
              <br></br>
              <br></br>
              <strong>22.00-Late: Party & karaoke</strong> 
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">Saturday</AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>8.00-10.00 Light breakfast served in Vrågården</strong>
              <br></br>
              <br></br>
              <strong>12.00-15.00 Activities</strong> 
              <br></br>
              <i>More details to come</i>
              <br></br>
              <li>Play football or tennis</li>
              <li>Sunbathe by a lake</li>
              <li>Walk or pick mushrooms in the woods</li>
              <li>Visit the market in Simlångsdalen (15 min away)</li>
              <li>Visit the thrift and knife shop</li>
              <li>Kid's music and play</li>
              <li>Hang out</li>
              <li>Rest</li>
              <br></br>
              <strong>16.00 Soundcheck for musicians</strong>
              <br></br>
              <br></br>
              <strong>16.30 Grills will be lit - Vrågården</strong>
              <br></br>
              <br></br>
              <strong>17.00-18.00 Grill and eat outside</strong>
              <br></br>
              <br></br>
              <strong>18.15 Opening words, inside Vrågården</strong>
              <br></br>
              <br></br>
              <strong>18.30 Music with breaks</strong>
              <br></br>
              <br></br>
              <strong>23.00 (Or when last artist is done) Finishing words</strong>
              <br></br>
              <br></br>
              <strong>23.15 -> Late: Party, dance or go to bed</strong>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">Sunday</AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>08.00-10.00 Light breakfast at Vrågården</strong>
              <br></br>
              <br></br>
              <strong>10.00-12.00 Cleaning and checking out</strong>
              <br></br>
              <br></br>
              Stay and hang as long as you want 
              <br></br> 
              Then we'll bid farewell with tears in our eyes 💔
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">Line up</AccordionHeader>
            <AccordionBody accordionId="4">
              <strong>~ Simon M. Harris ~</strong>
              <br></br>
              <strong>~ Ari Ahokas ~ </strong>
              <br></br>
              - Short Break -
              <br></br>
              <strong>~ Bra Ensam ~</strong>  
              <br></br> 
              - Long Break -   
              <br></br>
              <strong>~ Bara ~ </strong>
              <br></br>
              <strong>~ Soundabouts~ </strong>              
              <br></br> 
              - Short break -
              <br></br>
              <strong>~ Last Minute! ~ </strong>
            </AccordionBody>
          </AccordionItem>


        </Accordion>
        
      </div>
    );
  }
  
  
