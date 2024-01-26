import React from "react";
import "./homepage.css";
import Cards from "./Cards/Cards";
import PropertiesList from "../Properties/PropertiesList";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <header className="header">
        <div className="header-items">
          <div className="logo">
            <img className="logo-img" src="logo.png" alt="Logo" />
          </div>
          <nav className="header-links">
            <a href="#" className="navbar-features">
              Contact Us
            </a>
            <a href="#" className="navbar-features">
              Follow for More
            </a>
            <Link className="navbar-features" to="/login">
              Signup
            </Link>
            <a href="#" className="navbar-features">
              Catalogue
            </a>
          </nav>
        </div>
      </header>
      <div class="hero-section">
        <div class="overlay-home">
          <div class="background-container">
            <div class="search-bar">
              <div class="search-icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <input
                className="insideSearch"
                type="text"
                placeholder="Search for a location"
              />
              <div class="search-icon">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="explore">
        <h3>Explore Popular Properties</h3>
        <div className="exploreCards">
          <Cards
            imageUrl="/assets/images/room(5).jpg"
            location="Gurugram,NCR"
            totalProperties="24012"
          />
          <Cards
            imageUrl="/assets/images/room(6).jpg"
            location="Faridabad,NCR"
            totalProperties="24012"
          />
          <Cards
            imageUrl="/assets/images/room(7).jpg"
            location="Mumbai,Mumbai"
            totalProperties="24012"
          />
          <Cards
            imageUrl="/assets/images/room(8).jpg"
            location="Pune,Pune"
            totalProperties="24012"
          />
          <Cards
            imageUrl="/assets/images/room(5).jpg"
            location="Gurugram,NCR"
            totalProperties="24012"
          />
          <Cards
            imageUrl="/assets/images/room(5).jpg"
            location="Gurugram,NCR"
            totalProperties="24012"
          />
        </div>
      </section>

      <section>
        <PropertiesList />
      </section>
    </>
  );
}

export default Homepage;
