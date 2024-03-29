import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="mainModal--container">
      {showModal ? (
        <section>
          <div className="modal-wrapper" onClick={() => setShowModal(true)}></div>
          <div className="modal-container">
          <div className="cross-btn">
            <FaCircleXmark className="close_icon" onClick={() => setShowModal(false)}/>
            </div>
            <h2 className="tag_line">Join the Waiting List!</h2>
            <p className="tag_line">
              Join our mailing list to get notified whenever our newest products launch.
            </p>
            <form>
              <div className="form-label">
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                />
             
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                />
              </div>
              <div className="submit-btn">
              <button type="submit" className="modal-btn subs_btn" onClick={() => setShowModal(false)}>
                Subscribe
              </button>
              </div>
            </form>
          </div>
        </section>
      ) : (
        <button className="modal-btn" onClick={() => setShowModal(true)}>
          Subscribe
        </button>
      )}
    </div>
  );
}
