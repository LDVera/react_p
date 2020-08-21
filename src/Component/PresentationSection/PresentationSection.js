import React from 'react'
import { Button } from '../Button/Button'
import './PresentationSection.css'

function PresentationSection() {
    return (
        
        <div className="PresentationSection-Container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />    
            <div className="PSC-subContainer col-12 text-center ">
                <h1>Welcome to my little internet space</h1>
                <p>Let´s know some of me </p>
                <div className="PresentationSection-btns">
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        About me
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PresentationSection
