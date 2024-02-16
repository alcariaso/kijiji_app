import react from 'react';
import '../Messages/Messages.scss';
import sendIcon from '../../assets/images/icons8-send-48.png';
import ikea from '../../assets/images/$ikea.jpg'
import PageLayout from '../PageLayout/PageLayout';

export const Messages = ()  => {

    return (  
        <PageLayout>
        <main className='messages'>
            <div className='sellerInfo'>
                <img className='sellerInfo__item' src={ikea}></img>
                <div className='sellerInfo__description'>
                    <p className='text'>Ikea NotStanding Stand Chairs</p>
                    <p className='text--price'>$40.00</p>
                </div>
                

            </div>
            
            <form className='messageBox'>

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

                </div>

                <div className='messageBox__AddOn'>
                    <button className='button' type='submit'>Delivery </button>
                </div>

                <div className='messageBox__textBox'>
                    <input className='input' placeholder='Type a message...'></input>
                    <button className='buttonOnlick' onClick=""><img className='img' src={sendIcon}></img></button>
                    
                </div>

            </form>
            

        </main>
        </PageLayout> 
    )
}

export default Messages