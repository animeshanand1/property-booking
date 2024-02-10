import React from 'react'
import './resetPassword.css'
function ResetPassword() {
  return (
   <>
   <div class="password-01">
      <h1 class="logo">
        <span>LO</span>
        <span class="go">GO</span>
      </h1>
      <h1 class="forgot-password">Forgot password</h1>
      <div class="enter-your-email">
        Enter your email for the verification proccess,we will send 4 digits
        code to your email.
      </div>
      <section class="complexframe">
        <div class="contact-person-parent">
          <div class="contact-person">E mail</div>
          <div class="arlene-mc-coytext">
            <input
              class="arlene-mccoy"
              placeholder="hannah.green@test.com"
              type="text"
            />
            <img class="a-down-icon" alt="" src=""/>
          </div>
        </div>
        <button class="button">
          <div class="send-mail">Continue</div>
        </button>
      </section>
    </div>

   </>
  )
}

export default ResetPassword