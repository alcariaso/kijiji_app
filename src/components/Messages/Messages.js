import react from 'react';
import '../Messages/Messages.scss';
import sentIcon from "../../assets/images/icons8-send-48.png"

export const Messages = ()  => {

    return (
        <main className='messages'>
            {/* space for header */}
            <div className='messageBox'>

                <div className='messageBox__main'>
                    <div className='message--sent'>
                        <p className='message__text'>Sample Text</p>
                        <p className='message__notif'>Read</p>
                    </div>

                    <div className='message--recieved'>
                        <p className='message__text'>Sample Text</p>
                        <p className='message__notif'>Read</p>

                    </div>

                    <div className='message--sent'>
                        <p className='message__text'>Sample Text</p>
                        <p className='message__notif'>Read</p>

                    </div>

                </div>

                <div className='messageBox__AddOn'>
                    <button className='button' type='submit'></button>
                </div>

                <div className='messageBox__textBox'>
                    <input className='input'></input>
                    <img className='img' src={sentIcon}></img>
                </div>

            </div>
            

        </main>
    )
}

export default Messages