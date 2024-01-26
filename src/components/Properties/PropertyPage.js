import React, { useEffect } from "react";

function PropertyPage() {
  return (
    <>
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
              cols="60"
              placeholder="Message"
              required
            />
            <button type="submit" className="request-btn">
              Send Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PropertyPage;
