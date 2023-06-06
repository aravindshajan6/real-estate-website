import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Values.css';
import data from '../../utils/accordion';
// import { forwardRef } from 'react';

const Values = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        {/* left side */}
        <div className='v-left'>
          <div className='image-container'>
            <img src='./value.png' alt='' />
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart v-right'>
          <span className='orangeText'>Our value</span>
          <span className='primaryText'>Value we give to you</span>
          <span className='secondaryText'>
            we are always ready to help by providing you the best services.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordionButton flexCenter'>
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName('expanded')
                            : setClassName('collapsed')
                        }
                      </AccordionItemState>

                      <div className='flexCenter icon'>{item.icon}</div>
                      <span className='primaryText'>{item.heading}</span>
                      <div className='flexCenter icon'>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className='secondaryText'>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
