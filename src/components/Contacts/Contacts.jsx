import React from 'react';
import './Contacts.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contacts = () => {
  return (
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        {/* left side */}
        <div className='flexColStart c-left '>
          <span className='orangeText'>Our Contacts</span>
          <span className='primaryText'>Easy to contact us</span>
          <span className='secondaryText'>
            We are always ready to help poeple in search for their dream homes .
          </span>
          <div className='flexColStart contactModes'>
            {/* {first row} */}
            {/* first mode */}
            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <MdCall size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>021 123 145 35</span>
                  </div>
                </div>
                <div className='flexCenter button'>Call Now</div>
              </div>

              {/* second mode */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>021 123 145 35</span>
                  </div>
                </div>
                <div className='flexCenter button'>Chat Now</div>
              </div>
            </div>

            {/* second row */}
            {/* first mode */}

            <div className='flexStart row'>
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>021 123 145 35</span>
                  </div>
                </div>
                <div className='flexCenter button'>Video Call Now</div>
              </div>

              {/* second mode */}
              <div className='flexColCenter mode'>
                <div className='flexStart'>
                  <div className='flexCenter icon'>
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Message</span>
                    <span className='secondaryText'>021 123 145 35</span>
                  </div>
                </div>
                <div className='flexCenter button'>Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='flexColStart c-right'>
          <div className='image-container'>
            <img src='./contact.jpg' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
