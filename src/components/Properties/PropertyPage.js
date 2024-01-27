import React, { useEffect } from "react";
import DynamicStar from "../utils/DynamicStar";
import HomeHighlight from "../utils/Home-util";
function PropertyPage() {
  return (
    <div>
      <section className="gallery">
        <div className="gallery-item">
          <img
            className="gallery-item-col-2 gallery-item-row-2"
            src="https://picsum.photos/id/1015/600/400.jpg"
            alt=""
          />
          <img
            className="gallery-item"
            src="https://plus.unsplash.com/premium_photo-1680011184304-961ab9f485ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="gallery-item"
            src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <img
            className="gallery-item"
            src="https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBob3RvfGVufDB8fDB8fHww"
            alt=""
          />
          <img
            className="gallery-item"
            src="https://images.unsplash.com/photo-1611963169787-ac9e3a65b27b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbSUyMHBob3RvfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </section>

      <section className="addition-details">
        <div className="more-about-text">
          <h3 className="about-title">
            Shree Krishna Palace By Vivek Builders
          </h3>
          <p className="property-addressText">New Delhi,110120,Near DPS</p>
          <h4 className="more-detailedText-header">
            Well-constructed 1562 Sq Ft Home Is Now Offering To You In Uttara
            For Sale
          </h4>
          <p className="detailed-para">
            Nestled in the heart of the vibrant city of Delhi, Krishna Palace
            stands as a beacon of opulence and tranquility. This magnificent
            hotel, with its regal architecture and impeccable service, offers a
            lavish escape for both business and leisure travelers. Join us as we
            explore the grandeur and splendor of Krishna Palace, where every
            moment is a celebration of luxury.
          </p>
        </div>
        <div className="request-form">
          <form id="visitRequestForm">
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required
            />
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Date of Visit"
              required
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              required
            />
            <button type="submit" className="request-btn">
              Send Request
            </button>
          </form>
        </div>
        <div className="home-highlights">
        <HomeHighlight
          parking="yes"
          ac="YES"
          yearBuilt="2008"
          landArea="535sq"
          listed="NO"
          hoa="none"
        />
      </div>
      </section>
    
      <div className="detailed-agent-card">
        <h4 style={{ textAlign: "center", marginTop: "-10px" }}>
          Agent Information
        </h4>
        <div className="profile-container">
          <div className="profile-pic">
            <img
              className="profile-pic-agent"
              src="data:image/jpeg;base64,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"
            />
          </div>
          <div className="profile-details">
            <p className="profile-name" style={{ fontWeight: "600" }}>
              Maithili Thakur
            </p>
            <div className="profile-reviews">
              <DynamicStar totalStars={5} initialRating={3.5} />
            </div>
            <p className="profile-email" style={{ fontWeight: "500" }}>
              maithili@example.com
            </p>
            <p className="profile-phone" style={{ fontWeight: "500" }}>
              Phone: +123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
