import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { VscLocation } from 'react-icons/vsc';

import { AiFillHeart } from 'react-icons/ai';

import moment from 'moment';

const Modal = ({ showModal, setShowModal, item }) => {
  const renderData = () => {
    console.log(item);
    return (
      <div className="modal-content">
        <h3 className="modal-title"> {item.alt_description}</h3>
        {/* <h4 className="modal-subtitle"> {item.description}</h4> */}

        <p className="link">
          {moment(item.created_at).utc().format('YYYY-MM-DD')}
        </p>

        <p className="link">
          <a href={item.links.html} target="_blank">
            {' '}
            Visit original photo{' '}
          </a>
        </p>

        <div className="likes">
          <AiFillHeart fill={'#be0000'} />
          <span style={{ fontSize: '20px' }}>{item.likes}</span>
        </div>
        <div className="author-container">
          <div>
            {' '}
            By: {item.user.name}
            <br />
            <span className="location">
              <VscLocation />
              {item.user.location}{' '}
            </span>
          </div>

          <div className="socials">
            <a
              href={`https://www.instagram.com/${item.user.instagram_username}`}
              target="_blank"
            >
              {' '}
              <BsInstagram />
            </a>

            <a
              href={`https://www.twitter.com/${item.user.twitter_username}`}
              target="_blank"
            >
              {' '}
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${showModal ? 'modal-overlay show-modal' : ''} `}>
      <div className="modal-container">
        <h3 className=""> {renderData()}</h3>
        <button className="close-modal-btn">
          <FaTimes onClick={() => setShowModal(false)} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
