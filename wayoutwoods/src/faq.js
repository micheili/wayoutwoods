import React, {useState} from 'react';
  import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    NavItem,
    NavLink
  } from 'reactstrap';

export default function Faq(){

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
          <AccordionHeader targetId="1">When should I come?</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>Check your invite.</strong>
            <br></br>
            Friday will be more of a sit down dinner/crayfish party and is more limited with food and seating.
            <br></br>
            It will start at 18.00 so if you know that you need to be shown where to sleep or set up, please arrive early enough for that.
            <br></br>
            <br></br>
            More people are invited for Saturday and everyone's welcome to hang out or arrive from 12.00, grills will be lit 16.30 and music will start 18.30
            <NavItem>
            <NavLink href="/schedule/"><h4 style={{textDecoration: 'underline'}}>See Schedule</h4></NavLink>
          </NavItem>

            <br></br>     
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">What should I bring?</AccordionHeader>
          <AccordionBody accordionId="2">
            <u><strong>Food & Drink</strong></u>
            <br></br>
            Food and drink <b>will be provided</b> for the kräftskiva on <u>Friday</u>. (Beer, bubbles, snaps - bring more for after dinner if you want)
            <br></br>
            On Saturday and Sunday we will provide a light breakfast (like stuff for sandwiches etc.) and hot dogs (korv me brö) for lunch.
            <br></br>
            <b>Bring:</b>
            <li>Food for grilling</li>
            <li>Alcohol and drinks for Saturday</li>
            <li>Specific food items that you might want or need for children or allergies</li>
            <br></br>
            There will be kitchens available in the Airbnbs and party location for storing and prepping food and drink.
            <br></br>
            Keep in mind that the closest smallish grocery store is 12 min away and for bigger stores you'd have to go to Ljungby or Halmstad 20-30 min away.
            <br></br>
            <br></br>
            <u><strong>Essentials</strong></u>
            <li>Towels</li>
            <li>Sheets</li>
            <li>Party clothing</li>
            <li>Casual & outdoorsy & warm clothing</li>
            <br></br>
            <br></br>
            <u><strong>Good to have</strong></u>
            <li>Bug / mosquito spray</li>
            <li>Swimwear</li>
            <li>Wellies & rain gear</li>
            <li>Sportswear (stuff for football or tennis if you want)</li>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Where will I sleep?</AccordionHeader>
          <AccordionBody accordionId="3">
            When you arrive, park by Vrågården (big yellow school building opposite to the church) and "check in" at the reception. 
            <br></br>
            Please wait for our help to sort your lodging, we will show you what house and room you'll stay in or where to pitch your tent.
            <br></br>
            <br></br>
            For <b>camper vans</b>, there is a sign for 'Ställplats' right there on the parking lot of Vrågården, electricity and toilets available.
            <br></br>
            <br></br>
            <strong>Towels and sheets won't be provided in Airbnbs, bring your own!</strong>
            
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">I want to perform, how does that work?</AccordionHeader>
          <AccordionBody accordionId="4">
            On Friday's kräftskiva during and after eating we will have an open mic where you can perform a song.
            <br></br>
            Let us know and we'll put you on the list.
            <br></br>
            <br></br>
            On Saturday we have a set lineup.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}