import React from 'react'
import './verifyOtp.css'
function Otp() {
    return (
        <>
            <div class="password-02">
                <h1 class="verification">Verification</h1>
                <div class="enter-your-4">
                    Enter your 4 digits code that you received on your email.
                </div>
                <section class="main-frame">
                    <div class="frames-container">
                        <div class="button-instances">
                            <div class="div">2</div>
                        </div>
                        <div class="button-instances1">
                            <div class="div1">2</div>
                        </div>
                        <div class="button-instances2">
                            <div class="div2">2</div>
                        </div>
                        <div class="button-instances3">
                            <div class="div3">2</div>
                        </div>
                    </div>
                    <div class="message-text">00:30</div>
                    <button class="button">
                        <button class="send-mail">Continue</button>
                    </button>
                </section>
                <div class="if-you-didnt-container" id="ifYouDidnt">
                    <span>If you didn’t receive a code!</span>
                    <button class="resend"> Resend</button>
                </div>
            </div>

        </>
    )
}

export default Otp