import { useState } from 'react';
import Modal from './Modal';

const Image = (item) => {
  const [showModal, setShowModal] = useState();
  const url = item?.urls?.regular;

  return (
    <div>
      <img
        src={url}
        key={item.id}
        alt={item.alt_description}
        className="img"
        onClick={() => setShowModal(true)}
      />

      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} item={item} />
      ) : null}
    </div>
  );
};
export default Image;
