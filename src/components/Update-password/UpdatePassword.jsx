import React from 'react'
import './updatePassword.css'
function UpdatePassword() {
    return (
        <>
            <div class="password-06">
                <div class="logo">
                    <span>LO</span>
                    <span class="go">GO</span>
                </div>
                <div class="new-password">New Password</div>
                <div class="set-the-new">
                    Set the new password for your account so you can login and access all
                    featuress.
                </div>
                <div class="instance-parent">
                    <div class="contact-person-parent">
                        <div class="contact-person">Enter new password</div>
                        <div class="arlene-mccoy-parent">
                            <div class="arlene-mccoy">********</div>
                            <img class="eyeopen-icon" alt="" src="./public/eyeopen.svg" />
                        </div>
                    </div>
                    <div class="contact-person-parent">
                        <div class="contact-person">Confirm password</div>
                        <div class="arlene-mccoy-parent">
                            <div class="arlene-mccoy">47Password</div>
                            <img class="eyeopen-icon" alt="" src="./public/eyeclosed.svg" />
                        </div>
                    </div>
                    <div class="button">
                        <div class="send-mail">Update password</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UpdatePassword