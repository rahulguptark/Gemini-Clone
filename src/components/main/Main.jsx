import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img className='img' src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">

            {!showResult ? 
            <>
            <div className="greet">
                <p><span>Hello, Rahul.</span></p>
                <p>How can I help you?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to visit on an upcoming weekend</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Summarise this concept in an easy and undestandable manner</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Review my code and give me suggesions for improvement </p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>explain me this concept in easy language</p>
                    <img src={assets.message_icon} alt="" />
                </div>
            </div>

            </> 
            : 
            <div className='result'>
                <div className="result-title">
                    <img className='image' src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img className='image' src={assets.gemini_icon} alt="" />
                    {loading 
                    ?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p> }
                    
                </div>
            </div>
             }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double check its responses. Your privacy and Gemini Apps
                </p>
                
            </div>

        </div>
    </div>
  )
}

export default Main