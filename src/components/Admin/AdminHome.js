import React from "react";
import './admin.css'
function AdminHome() {
  return (
    <>
    <div className="hr-panel">
      <div className="search-frame">
        <div className="search-frame-child"></div>
        <div className="bell-frame">
          <img
            className="presenton-late-frame"
            loading="eager"
            alt=""
            src="./public/frame.svg"
          />

          <div className="absent-leave-frame">
            <div className="c-u-l-frame">
              <input className="dashboard" type="checkbox" />

              <input className="dashboard1" placeholder="Dashboard" type="text" />
            </div>
            <div className="c-u-l-frame1">
              <img
                className="usercirclegear-icon"
                loading="eager"
                alt=""
                src="./public/usercirclegear.svg"
              />

              <div className="employe-management">Employe Management</div>
            </div>
            <div className="c-u-l-frame2">
              <img
                className="alarm-icon"
                loading="eager"
                alt=""
                src="./public/alarm.svg"
              />

              <div className="attendance">Attendance</div>
            </div>
            <div className="c-u-l-frame3">
              <img
                className="leaf-icon"
                loading="eager"
                alt=""
                src="./public/leaf.svg"
              />

              <div className="leave">Leave</div>
            </div>
            <div className="c-u-l-frame4">
              <input className="wallet" type="checkbox" />

              <div className="payroll">Payroll</div>
            </div>
            <div className="c-u-l-frame5">
              <img
                className="gear-icon"
                loading="eager"
                alt=""
                src="./public/gear.svg"
              />

              <div className="settings">Settings</div>
            </div>
            <div className="c-u-l-frame6">
              <img
                className="receipt-icon"
                loading="eager"
                alt=""
                src="./public/receipt.svg"
              />

              <div className="report">Report</div>
            </div>
          </div>
        </div>
      </div>
      <main className="personal-calendar-frame">
        <header className="government-holiday-text">
          <div className="search-parent">
            <img className="search-icon" alt="" src="./public/search.svg" />

            <input className="search" placeholder="Search..." type="text" />

            <img
              className="keyboard-voice-icon"
              alt=""
              src="./public/keyboard-voice.svg"
            />
          </div>
          <img className="bell-icon" alt="" src="./public/bell.svg" />

          <div className="present-frame">
            <div className="header-frame">
              <div className="user-frame">
                <b className="jalal-uddin">Admin</b>
                <div className="ceo">administrator</div>
              </div>
              <img
                className="date-frame-icon"
                alt=""
                src="./public/date-frame@2x.png"
              />
            </div>
            <img
              className="arrow-drop-down-icon"
              alt=""
              src="./public/arrow-drop-down.svg"
            />
          </div>
        </header>
        <section className="late-absent-options-frame">
          <div className="present-absent-frames">
            <div className="approval-text-frame">
              <div className="leave-option-frame">
                <div className="govt-holiday-text-frame">
                  <img
                    className="cloudsun-icon"
                    loading="eager"
                    alt=""
                    src="./public/cloudsun.svg"
                  />

                  <div className="partly-cloudy">Partly Cloudy</div>
                </div>
                <div className="frame-with-two-children">
                  <div className="frame-with-three-children"></div>
                </div>
                <div className="frame-with-four-children">
                  <div className="september-2022">21 September 2022</div>
                  <h1 className="today">Today</h1>
                </div>
              </div>
              <div className="bell-frame1">
                <div className="present-late-frame">
                  <div className="present-on-time">Present-on time</div>
                  <b className="absent-frame">70</b>
                </div>
                <div className="present-late-frame1">
                  <div className="late">Late</div>
                  <b className="b">20</b>
                </div>
                <div className="approval-frame">
                  <div className="c-u-l-frame7">
                    <div className="absent">Absent</div>
                    <b className="software-developer-frame">7</b>
                  </div>
                  <div className="c-u-l-frame8">
                    <div className="leave1">Leave</div>
                    <b className="b1">3</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="applicant-frame">
              <div className="rectangle-approved-frame">
                <input
                  className="personal-calendar-frame1"
                  placeholder="Approval"
                  type="text"
                />

                <div className="weekdays-frame">
                  <div className="wednesday-frame">
                    <div className="cul">
                      <button className="friday-frame">
                        <b className="date-of-application">Date of Application</b>
                      </button>
                      <div className="friday-frame1">
                        <div className="govt-holiday-frame">03/07/2021</div>
                      </div>
                      <div className="leave-frame">
                        <div className="leave-type-frame">01/07/2022</div>
                      </div>
                      <div className="present-absent-frame">
                        <div className="calendar-frame">27/06/2022</div>
                      </div>
                      <div className="approval-rectangles">
                        <div className="employee-names">27/06/2022</div>
                      </div>
                    </div>
                    <div className="cul1">
                      <div className="c-u-l-list">
                        <b className="applicant">Applicant</b>
                      </div>
                      <div className="name-and-role-frame">
                        <b className="savannah-nguyen">Savannah Nguyen</b>
                        <input
                          className="project-manager"
                          placeholder="Project Manager"
                          type="text"
                        />
                      </div>
                      <div className="name-and-role-frame1">
                        <b className="eleanor-pena">Eleanor Pena</b>
                        <div className="software-developer">Software Developer</div>
                      </div>
                      <div className="name-and-role-frame2">
                        <b className="brooklyn-simmons">Brooklyn Simmons</b>
                        <input
                          className="nursing-assistant"
                          placeholder="Nursing Assistant"
                          type="text"
                        />
                      </div>
                      <div className="name-and-role-frame3">
                        <b className="brooklyn-simmons1">Brooklyn Simmons</b>
                        <input
                          className="nursing-assistant1"
                          placeholder="Nursing Assistant"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="cul2">
                      <div className="application-type-wrapper">
                        <b className="application-type">Application type</b>
                      </div>
                      <input
                        className="cul-child"
                        placeholder="Casual leave"
                        type="text"
                      />

                      <div className="late-entry-wrapper">
                        <div className="late-entry">Late entry</div>
                      </div>
                      <input
                        className="cul-item"
                        placeholder="Paternity leave"
                        type="text"
                      />

                      <input
                        className="cul-inner"
                        placeholder="Paternity leave"
                        type="text"
                      />
                    </div>
                    <div className="cul3">
                      <div className="duration-wrapper">
                        <b className="duration">Duration</b>
                      </div>
                      <input
                        className="frame-input"
                        placeholder="02 (05-06 Jul)"
                        type="text"
                      />

                      <div className="jul-wrapper">
                        <div className="jul">01 (06 Jul)</div>
                      </div>
                      <input
                        className="cul-child1"
                        placeholder="05 (05-06 Jul)"
                        type="text"
                      />

                      <input
                        className="cul-child2"
                        placeholder="05 (05-06 Jul)"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="leaves-container">
                <div className="thin-divider-line">
                  <div className="thin-divider-line-child"></div>
                  <div className="approved">Approved</div>
                </div>
                <div className="thin-divider-line1">
                  <div className="thin-divider-line-item"></div>
                  <div className="rejected">Rejected</div>
                </div>
                <div className="thin-divider-line2">
                  <div className="thin-divider-line-inner"></div>
                  <div className="pending">Pending</div>
                </div>
              </div>
            </div>
          </div>
          <div className="horizontal-ellipse">
            <div className="friday-text-label">
              <div className="personal-calender-parent">
                <b className="personal-calender">Personal Calender</b>
                <div className="arrow-forward-ios-parent">
                  <img
                    className="arrow-forward-ios-icon"
                    alt=""
                    src="./public/arrow-forward-ios@2x.png"
                  />

                  <div className="september-20221">September 2022</div>
                  <img
                    className="arrow-forward-ios-icon1"
                    alt=""
                    src="./public/arrow-forward-ios-1.svg"
                  />
                </div>
              </div>
              <div className="month-frame">
                <div className="applicant-frame1">
                  <div className="sun-mon-frame">
                    <div className="sun">SUN</div>
                    <div className="mon">MON</div>
                    <div className="tue">TUE</div>
                  </div>
                  <div className="sun-mon-frame1">
                    <div className="div">27</div>
                    <div className="div1">28</div>
                    <div className="div2">29</div>
                  </div>
                </div>
                <div className="wed-thu-fri-sat">
                  <div className="wed-frame">
                    <div className="wed">WED</div>
                    <div className="thu-frame">
                      <div className="thu">THU</div>
                    </div>
                    <div className="thu-frame1">
                      <div className="fri">FRI</div>
                    </div>
                    <div className="sat">SAT</div>
                  </div>
                  <div className="sat-frame">
                    <div className="empty-frame">30</div>
                    <div className="empty-frame1">31</div>
                    <div className="empty-frame2">01</div>
                    <div className="empty-frame3">02</div>
                  </div>
                </div>
              </div>
              <div className="calendar">
                <div className="frame-parent">
                  <div className="frame-group">
                    <div className="parent">
                      <div className="div3">03</div>
                      <div className="div4">04</div>
                    </div>
                    <div className="pending-days-parent">
                      <div className="pending-days">10</div>
                      <div className="pending-approvals">11</div>
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="group">
                      <div className="div5">05</div>
                      <div className="div6">06</div>
                    </div>
                    <div className="container">
                      <div className="div7">12</div>
                      <div className="div8">13</div>
                    </div>
                  </div>
                  <div className="calendar-month">
                    <div className="weekdays">
                      <div className="monday">07</div>
                      <div className="monday1">08</div>
                    </div>
                    <div className="tuesday">
                      <div className="wednesday">
                        <div className="thursday">14</div>
                        <div className="thursday1">15</div>
                      </div>
                    </div>
                  </div>
                  <div className="friday">
                    <div className="saturday">09</div>
                    <div className="saturday1">16</div>
                  </div>
                </div>
                <div className="leave-types-parent">
                  <div className="leave-types">17</div>
                  <div className="leave-types1">18</div>
                  <div className="leave2">
                    <div className="ellipse-marker">
                      <div className="ellipse-parent">
                        <div className="frame-child"></div>
                        <div className="frame-div">
                          <div className="div9">19</div>
                          <div className="div10">20</div>
                        </div>
                      </div>
                    </div>
                    <div className="wrapper">
                      <div className="div11">21</div>
                    </div>
                    <div className="days-off">22</div>
                  </div>
                  <div className="leave-types2">23</div>
                </div>
                <div className="government-holidays">
                  <div className="parent-calendar">24</div>
                  <div className="parent-calendar1">25</div>
                  <div className="parent-calendar2">26</div>
                  <div className="parent-calendar3">27</div>
                  <div className="parent-calendar4">28</div>
                  <div className="parent-calendar5">29</div>
                  <div className="parent-calendar6">30</div>
                </div>
              </div>
            </div>
            <div className="holiday-frame">
              <div className="leave-container"></div>
              <div className="calendar-date">
                <div className="govt-holiday">Govt Holiday</div>
              </div>
              <div className="leave-container1"></div>
              <div className="leave3">Leave</div>
            </div>
          </div>
        </section>
        <section className="september-month-frame">
          <div className="s-u-n-m-o-n-t-u-w-e-d-t-h-f-f">
            <div className="w-e-d-t-h-u-t-f-r-i-frame">
              <b className="attendance-statistics">Attendance Statistics</b>
              <div className="govt-holiday-leave-frame">
                <div className="header-title-frame"></div>
              </div>
              <div className="icon-frame">
                <div className="present-on-time1">Present- On Time</div>
              </div>
              <div className="frame-with-two-children-frame">
                <div className="frame-with-two-children-frame1"></div>
              </div>
              <div className="frame-with-one-child-frame-a">
                <div className="present-late-entry">Present- Late Entry</div>
              </div>
              <div className="status-frame">
                <div className="bell-icon1"></div>
              </div>
              <div className="search-box">
                <div className="absent1">Absent</div>
              </div>
              <div className="presenton-time-vs-late">
                <div className="absent-vs-leave"></div>
              </div>
              <div className="leave4">Leave</div>
            </div>
            <div className="date-of-application-frame">
              <b className="monthly">Monthly</b>
              <div className="eleanor-pena1">
                <div className="eleanor-pena-child"></div>
                <b className="today1">Today</b>
                <b className="sep">21 Sep</b>
                <div className="casual-leave">
                  <div className="late-entry1">
                    <div className="paternity-leave"></div>
                    <div className="approval-frame1"></div>
                    <div className="personnel-ellipse"></div>
                    <div className="thursday-to-saturday"></div>
                  </div>
                </div>
                <div className="midweek">
                  <div className="ellipse-shape">
                    <div className="government-holiday">
                      <div className="leave-request">
                        <div className="calendar-frame1">
                          <div className="frame-approval-status"></div>
                          <img
                            className="arrow-back-ios-new-icon"
                            loading="eager"
                            alt=""
                            src="./public/arrow-back-ios-new.svg"
                          />
                        </div>
                        <b className="sep-2022">Sep 2022</b>
                      </div>
                    </div>
                    <div className="frame-calendar-weekdays">
                      <b className="frame-calendar-month">100</b>
                    </div>
                    <div className="frame-approval-frame-pending">
                      <div className="frame-approval-frame-rejected">
                        <div className="frame-approval-frame-approved">
                          <div className="frame-search-bell">
                            <b className="frame-search-text">75</b>
                            <b className="rectangle-presentational-ellip">50</b>
                            <b className="frame-govt-holiday">25</b>
                            <b className="leave-label">0</b>
                          </div>
                          <div className="frame-frame-w-e-d-t-h-u-f-r-i">
                            <div className="frame-frame">
                              <div className="frame-frame-parent">
                                <img
                                  className="frame-frame-icon"
                                  alt=""
                                  src="./public/frame-frame.svg"
                                />

                                <img
                                  className="absent-icon"
                                  alt=""
                                  src="./public/absent.svg"
                                />

                                <div className="frame-frame1">
                                  <img
                                    className="absent-leave-icon"
                                    alt=""
                                    src="./public/vector-1.svg"
                                  />

                                  <div className="frame-empty-area">
                                    <img
                                      className="approval-status-icon"
                                      alt=""
                                      src="./public/vector-2.svg"
                                    />

                                    <img
                                      className="present-or-late"
                                      alt=""
                                      src="./public/vector-3.svg"
                                    />
                                  </div>
                                  <img
                                    className="present-on-time-icon"
                                    alt=""
                                    src="./public/presenton-time.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="c-u-l-data">
                          <div className="savannah-nguyen-eleanor-pena">
                            <b className="approved-rejected-pending">01</b>
                            <b className="personal-calendar-header">02</b>
                            <div className="weekdays1">
                              <b className="sun-mon-tue">03</b>
                            </div>
                            <b className="sunday-monday-tuesday">04</b>
                            <b className="approved-rejected-pending1">05</b>
                            <b className="september-calendar-view">06</b>
                            <b className="employee-leave">07</b>
                            <b className="approved-rejected-pending2">08</b>
                            <b className="government-holiday1">09</b>
                            <b className="approved-rejected-pending3">10</b>
                            <b className="approved-rejected-pending4">11</b>
                            <b className="approved-rejected-pending5">12</b>
                            <b className="approved-rejected-pending6">13</b>
                            <b className="ellipse-shape1">14</b>
                            <b className="frame-container-children">15</b>
                            <b className="timeframe">16</b>
                            <b className="month-label">17</b>
                            <b className="arrow-dropdown">18</b>
                            <b className="search-frame1">19</b>
                            <b className="bell">20</b>
                            <b className="present-on-time2">21</b>
                            <b className="late1">22</b>
                            <b className="approval">23</b>
                            <b className="cul-frame">24</b>
                            <b className="september">25</b>
                            <b className="sunday-to-thursday">26</b>
                            <b className="wednesday-to-saturday">27</b>
                            <b className="sun-mon-tue1">28</b>
                            <b className="present-on-time3">29</b>
                            <b className="applicant1">30</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="approval-frame2">
                      <div className="govt-holiday1"></div>
                      <img
                        className="arrow-forward-ios-icon2"
                        alt=""
                        src="./public/arrow-forward-ios-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="parent-container-with-children">
              <div className="input-area-with-labels">
                <img
                  className="present-late-entry-icon"
                  alt=""
                  src="./public/presentlate-entry.svg"
                />

                <img
                  className="leave-icon"
                  loading="eager"
                  alt=""
                  src="./public/leave.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="september-month-frame1">
          <div className="attendance-statistics-parent">
            <b className="attendance-statistics1">Attendance Statistics</b>
            <div className="present-absent">
              <div className="present-absent-child"></div>
            </div>
            <div className="present-absent1">
              <div className="casual">Casual</div>
            </div>
            <div className="present-absent2">
              <div className="c-u-l-frame9"></div>
            </div>
            <div className="present-absent3">
              <div className="sick">Sick</div>
            </div>
            <div className="personal-calendar">
              <div className="sunday-to-thursday1"></div>
            </div>
            <div className="friday-to-saturday">
              <div className="maternity">Maternity</div>
            </div>
            <div className="govt-approval">
              <div className="header-frame1"></div>
            </div>
            <div className="search-frame2">
              <div className="paternity">Paternity</div>
            </div>
            <div className="cloud-frame">
              <div className="text-frame"></div>
            </div>
            <div className="sick1">Sick</div>
          </div>
          <div className="arrow-shape">
            <b className="monthly1">Monthly</b>
            <div className="ellipse-shape2">
              <div className="ellipse-shape-child"></div>
              <b className="today2">Today</b>
              <b className="sep1">21 Sep</b>
              <div className="frame-frame2">
                <div className="frame-contents">
                  <div className="parent-frame"></div>
                  <div className="frame-contents-child"></div>
                  <div className="frame-contents-item"></div>
                  <div className="frame-contents-inner"></div>
                  <div className="ellipse-div"></div>
                </div>
              </div>
              <div className="ellipse-shape-inner">
                <div className="frame-parent1">
                  <div className="frame-parent2">
                    <div className="approval-frame-parent">
                      <div className="approval-frame3">
                        <div className="calendar-frame2"></div>
                        <img
                          className="arrow-back-ios-new-icon1"
                          alt=""
                          src="./public/arrow-back-ios-new-1.svg"
                        />
                      </div>
                      <b className="sep-20221">Sep 2022</b>
                    </div>
                    <div className="ellipse-group">
                      <div className="frame-item"></div>
                      <img
                        className="arrow-forward-ios-icon3"
                        alt=""
                        src="./public/arrow-forward-ios-3.svg"
                      />
                    </div>
                  </div>
                  <div className="ellipse-node-parent">
                    <div className="ellipse-node">
                      <b className="frame-parent3">100</b>
                      <b className="b2">75</b>
                      <b className="visual-structure">50</b>
                      <b className="b3">25</b>
                      <b className="b4">0</b>
                    </div>
                    <div className="line">
                      <div className="line-child"></div>
                      <div className="text-parent">
                        <div className="text">
                          <img
                            className="vector-icon"
                            alt=""
                            src="./public/vector-4.svg"
                          />

                          <img
                            className="vector-icon1"
                            alt=""
                            src="./public/vector-5.svg"
                          />
                        </div>
                        <img
                          className="frame-inner"
                          loading="eager"
                          alt=""
                          src="./public/group-41.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="partly-cloudy1">
                    <b className="arrow-dropdown1">01</b>
                    <b className="jalal-uddin1">02</b>
                    <div className="c-e-o">
                      <b className="b5">03</b>
                    </div>
                    <b className="absent-leave-frame1">04</b>
                    <b className="wed-thu-sat">05</b>
                    <b className="b6">06</b>
                    <b className="b7">07</b>
                    <b className="arrow-dropdown2">08</b>
                    <b className="govt-holiday2">09</b>
                    <b className="leave5">10</b>
                    <b className="b8">11</b>
                    <b className="calendar-frame3">12</b>
                    <b className="search-frame3">13</b>
                    <b className="bell-frame2">14</b>
                    <b className="frame-group1">15</b>
                    <b className="cloud-frame1">16</b>
                    <b className="partly-cloudy-text">17</b>
                    <b className="arrow-down-dropdown">18</b>
                    <b className="presenton-time-late">19</b>
                    <b className="absent-leave-frame2">20</b>
                    <b className="cul-frame1">21</b>
                    <b className="frame-savannah-nguyen">22</b>
                    <b className="eleanor-pena-software">23</b>
                    <b className="applicant-text">24</b>
                    <b className="arrow-dropdown3">25</b>
                    <b className="weekdays-container">26</b>
                    <b className="wednesday-frame1">27</b>
                    <b className="thursday-friday">28</b>
                    <b className="arrow-dropdown4">29</b>
                    <b className="leave-label1">30</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

    </>
  );
}

export default AdminHome;
