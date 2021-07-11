import React from "react";
import { FaTimes } from "react-icons/fa";
function Modal({ toggle }) {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-dark sidebar-my-modal text-uppercase"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        show modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="sidebar-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <FaTimes />
              </button>
            </div>
            <div className="modal-body">Modal Content</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
