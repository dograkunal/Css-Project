import React from "react";
import Logo from "../assets/img/omnifood-logo.png";
import heroImg from "../assets/img/hero.png";
import customer1 from "../assets/customers/customer1.jpg";
import customer2 from "../assets/customers/customer2.jpg";
import customer3 from "../assets/customers/customer3.jpg";
import customer4 from "../assets/customers/customer4.jpg";
import customer5 from "../assets/customers/customer5.jpg";
import customer6 from "../assets/customers/customer6.jpg";
import "./mainStyle.scss";

function LandingPage() {
  return (
    <>
      <header className="header">
        <img className="headerLogo" src={Logo} alt="Logo" />
        <nav className="mainNav">
          <ul className="mainNavList">
            <li>
              <a href="#" className="mainNavLink">
                Section 1
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink">
                Section 2
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink">
                Section 3
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink">
                Section 4
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink navLast">
                Section 5
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="sectionHero">
          <div className="hero">
            <div className="heroTextBox">
              <h1 className="headingPrimary">
                A healthy meal delivered to your door, every single day
              </h1>
              <p className="heroDescription">
                The smart 365-days-per-year food subscription that will make you
                eat healthy again. Tailored to your personal tastes and
                nutritional needs.
              </p>
              <a href="#" className="btn btnFull marginRgtSm">
                Eating Clean
              </a>
              <a href="#" className="btn btnOutline">
                Learn More &darr;
              </a>
              <div className="deliveredMeals">
                <div className="deliveredImg">
                  <img src={customer1} alt="customer picture" />
                  <img src={customer2} alt="customer picture" />
                  <img src={customer3} alt="customer picture" />
                  <img src={customer4} alt="customer picture" />
                  <img src={customer5} alt="customer picture" />
                  <img src={customer6} alt="customer picture" />
                </div>
                <p>
                  <span>250,000+</span> meals delivered last year!
                </p>
              </div>
            </div>
            <div className="heroImageBox">
              <img
                src={heroImg}
                className="heroImage"
                alt="Main Header Image"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
