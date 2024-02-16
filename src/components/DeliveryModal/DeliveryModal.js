import React from "react";
import "./DeliveryModal.scss"; // Import CSS file for styling

const DeliveryModal = ({
  isOpen,
  onClose,
  onButtonClick,
  buttonTexts,
  buttonLinks,
  cancelText,
  children,
}) => {
  console.log("isOpen:", isOpen); // Add console log to check isOpen state
  console.log("buttonTexts:", buttonTexts); // Add console log to check buttonTexts array

  const handleButtonClick = (index) => {
    console.log("Button " + (index + 1) + " clicked");
    onButtonClick(index); // Trigger onButtonClick event handler
  };

  return (
    isOpen && (
      <div className="popup-overlay">
        <div className="popup-content">
          <span className="close-icon" onClick={onClose}>
            &times;
          </span>
          <div className="popup-buttons">
            <div className="popup-title">
              {" "}
              <h2>Please select your preferred Delivery Options</h2>
            </div>
            {buttonTexts.map((text, index) => (
              <a
                key={index}
                href={buttonLinks[index]}
                target="_blank"
                className="popup-btn"
                onClick={() => handleButtonClick(index)}
              >
                {text}
              </a>
            ))}
            <button className="popup-cancel-btn" onClick={onClose}>
              {cancelText}
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default DeliveryModal;
