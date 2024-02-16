import React, { useState } from "react";
import "../Messages/Messages.scss";
import sendIcon from "../../assets/images/icons8-send-48.png";
import ikea from "../../assets/images/$ikea.jpg";
import PageLayout from "../PageLayout/PageLayout";
import DeliveryModal from "../DeliveryModal/DeliveryModal";

export const Messages = ()  => {

    const [message, setMessage] = useState ([]);
    const [inputRes, setInputRes] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    

    function WriteMessage(e) {
        setInputRes(e.target.value)
        console.log(inputRes)
    }

    function addMessage() {
        if (inputRes.trim() !== "") { 
            setMessage((oldMes) => [...oldMes, inputRes]);
            setInputRes(""); 
        }
    }

    function showDeliveryOptions() {
        setShowOptions(true);
    }

    function showDeliveryPickUp() {
        setShowOptions(true);
    }

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (event) => {
      event.preventDefault();
      setIsOpen((prevState) => !prevState); 
    };
  
    const handleButtonClick = (index) => {
      console.log("Button " + (index + 1) + " clicked");
  
    };





    return (  
        <PageLayout>
        <main className='messages'>
            <div className='sellerInfo'>
                <img className='sellerInfo__item' src={ikea}></img>
                <div className='sellerInfo__description'>
                    <p className='text'>Ikea NotStanding Stand Chairs</p>
                    <p className='text--price'>$40.00</p>
                    <div className='deliveryOption'>
                        <p className='options'>Pick-Up</p>
                        <p className='options'>Meet-Up</p>
                        <p className='options'>Delivery</p>
                    </div>
                </div>             

            </div>
            
            <div className='messageBox'>

                <div className='messageBox__main'>
                    <div className='message--sent'>
                        <p className='message__text--sent'>Hi its available</p>
                        <p className='message__notif'>Read</p>
                    </div>

                    <div className='message--recieved'>
                        <p className='message__text'>great! can I lower?</p>
                        <p className='message__notif'>Read</p>

                    </div>

                    <div className='message--sent'>
                        <p className='message__text--sent'>no</p>
                        <p className='message__notif'>Read</p>

                    </div>

                    <div className='message--delivery'>
                    {showOptions && (
                    
                        <div className='textContainer'>
                                <p className='deliveryText'>Customer Selcted Meet-up</p>
                                <input className='locationButton' placeholder='Enter Meet-Up Address'></input>
                                <button className='locationButton'>send</button>  
                        </div>
                        
                    
                    )}


                    </div>
                    

                    <div className='response'>
                    {
                        message.map((indMessage, index) => (
                                <div className="singleMessage" key={indMessage.index}>
                                    <p className="singleMessage__text">{indMessage}</p>
                                    <p className='notif'>Read</p>
                                </div>
                    
                            )
                        )
                    }
                

                    </div> 

                </div>

                <div className='messageBox__AddOn'>
                <button className="button" onClick={togglePopup}>
              Delivery
            </button>
            <DeliveryModal
              isOpen={isOpen}
              onClose={togglePopup}
              onButtonClick={handleButtonClick}
              buttonTexts={["Uber", "U - Haul", "Go Share"]}
              buttonLinks={[
                "https://www.uber.com/ca/en/",
                "https://www.uhaul.com/",
                "https://goshare.co/",
              ]}
              cancelText="Cancel"
            ></DeliveryModal>
                    <button onClick={showDeliveryPickUp}  className='button' type='submit'>Pick - Up </button>
                    <button onClick={showDeliveryOptions}  className='button' type='submit'>Meet - Up </button>
                    
                </div>

                <div className='messageBox__textBox'>
                    <input onChange={WriteMessage} type='text' className='input' placeholder='Type a message...'></input>
                    <button onClick={addMessage} className='buttonOnlick'><img className='img' src={sendIcon}></img></button>
                    
                </div>

          

            </div>
            
        </main>
        </PageLayout> 
    )
}

export default Messages
