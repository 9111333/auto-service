import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import './TypeWriter.css'


export default function TypeWriter() {

    const [text, setText] = useState('')



    return (
        <>

            <div className="App">
                <Typewriter

                    onInit={(typewriter) => {

                        typewriter

                            .typeString(" ارائه خدمات  ")
                            .typeString("متفاوت")
                            .pauseFor(1000)
                            .deleteChars(6)
                            .typeString("متمایز")
                            .pauseFor(1000)
                            .deleteChars(6)
                            .typeString("ممتاز")
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                    options={{ loop: true }}
                />
            </div>


        </>
    )
}
