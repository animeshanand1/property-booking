import React from "react";

function AdminHome() {
  return (
    <>
      <div class="admin-dashbord">
        <div class="container">
          <div class="sidebar-and-logo">
            <div class="sidebar-and-logo-child" />
            <div class="line">
              <button class="simux3d-1-parent">
                <img
                  class="simux3d-1-icon"
                  alt=""
                  src="./public/simux3d-1@2x.png"
                />

                <img
                  class="purpale-1-icon"
                  alt=""
                  src="./public/purpale-1@2x.png"
                />
              </button>
            </div>
            <div class="sun">
              <div class="mon-sat">
                <div class="blog-post">
                  <div class="traffic-source">
                    <div class="menu">Menu</div>
                  </div>
                  <div class="weekly">
                    <div class="weekly-child" />
                    <img
                      class="radix-iconsdashboard"
                      loading="eager"
                      alt=""
                      src="./public/radixiconsdashboard.svg"
                    />

                    <b class="dashboard">Dashboard</b>
                  </div>
                  <div class="visitors">
                    <div class="mobile-device">
                      <div class="p-c">
                        <div class="others">
                          <img
                            class="uilcalender-icon"
                            loading="eager"
                            alt=""
                            src="./public/uilcalender.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="calendar">Calendar</div>
      </div>
      <div class="others1">
        <img
          class="bxchat-icon"
          loading="eager"
          alt=""
          src="./public/bxchat.svg"
        />
      </div>
    </>
  );
}

export default AdminHome;
