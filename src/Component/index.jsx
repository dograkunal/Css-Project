import React from "react";
import Logo from "../assets/img/omnifood-logo.png";
import heroImg from "../assets/img/hero.png";
import customer1 from "../assets/customers/customer1.jpg";
import customer2 from "../assets/customers/customer2.jpg";
import customer3 from "../assets/customers/customer3.jpg";
import customer4 from "../assets/customers/customer4.jpg";
import customer5 from "../assets/customers/customer5.jpg";
import customer6 from "../assets/customers/customer6.jpg";
import stepImage from "../assets/img/app/app-screen-1.png";
import stepImage2 from "../assets/img/app/app-screen-2.png";
import stepImage3 from "../assets/img/app/app-screen-3.png";
import Logo1 from "../assets/img/logos/techcrunch.png";
import Logo2 from "../assets/img/logos/forbes.png";
import Logo3 from "../assets/img/logos/business-insider.png";
import Logo4 from "../assets/img/logos/usa-today.png";
import Logo5 from "../assets/img/logos/the-new-york-times.png";
import meal1 from "../assets/img/meals/meal-1.jpg";
import meal2 from "../assets/img/meals/meal-2.jpg";
import "./mainStyle.scss";
import "./general.scss";

function LandingPage() {
  return (
    <>
      <header className="header">
        <img className="headerLogo" src={Logo} alt="Logo" />
        <nav className="mainNav">
          <ul className="mainNavList">
            <li>
              <a href="#" className="mainNavLink">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink">
                Meals
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="mainNavLink navLast">
                Try for free
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

        <section className="sectionFeatured">
          <div className="container">
            <h2 className="headingFeaturedIn">As featured in</h2>
            <div className="logosFeatured">
              <img src={Logo1} alt="techcrunch logo" />
              <img src={Logo2} alt="forbes logo" />
              <img src={Logo3} alt="bussiness insider logo" />
              <img src={Logo5} alt="new york times logo" />
              <img src={Logo4} alt="usa today logo" />
            </div>
          </div>
        </section>

        <section className="sectionWorks ">
          <div className="container">
            <span className="subHeading">How it works</span>
            <h2 className="headingSecondary">
              Your daily dose of health in 3 simple steps
            </h2>
          </div>

          <div className="container gridClass gridCol_2 gridVrCentre">
            {/* STEP 01  */}
            <div className="stepTextBox">
              <p className="stepNumber">01</p>
              <h3 className="headingTertiary">
                Tell us what you like (and what not)
              </h3>
              <p className="stepDiscription">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </div>
            <div className="stepImageBox">
              <img
                src={stepImage}
                className="stepImage"
                alt="iphone app reference screen"
              />
            </div>

            {/* STEP 02 */}
            <div className="stepImageBox">
              <img
                src={stepImage2}
                className="stepImage"
                alt="iphone app meal approving screen"
              />
            </div>
            <div className="stepTextBox">
              <p className="stepNumber">02</p>
              <h3 className="headingTertiary">Approve your weekly meal plan</h3>
              <p className="stepDiscription">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>

            {/* STEP 03 */}
            <div className="stepTextBox">
              <p className="stepNumber">03</p>
              <h3 className="headingTertiary">
                Receive meals at convenient time
              </h3>
              <p className="stepDiscription">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <div className="stepImageBox">
              <img
                src={stepImage3}
                className="stepImage"
                alt="iphone app delivery screen"
              />
            </div>
          </div>
        </section>

        <section className="sectionMeals">
          <div className="container textAlnCntr">
            <span className="subHeading">Meals</span>
            <h2 className="headingSecondary">
              Omnifood AI chooses from 5,000+ recipes
            </h2>
          </div>
          <div className="container gridClass gridCol_3 marginBtmMd">
            <div className="mealCard">
              <img src={meal1} alt="Japanese Gyozas" className="mealImage" />
              <div className="mealContent">
                <div className="mealTag">
                  <span className="tag tagVeg">Vegetarian</span>
                </div>
                <p className="mealTitle">Japanese Gyozas</p>
                <ul className="mealAttributes">
                  <li className="mealAttribute">
                    <ion-icon name="flame-outline" class="mealIcon"></ion-icon>
                    <strong> 650</strong> Calories
                  </li>
                  <li className="mealAttribute">
                    <ion-icon
                      name="restaurant-outline"
                      class="mealIcon"
                    ></ion-icon>
                    NutriScore &reg;<strong> 74</strong>
                  </li>
                  <li className="mealAttribute">
                    <ion-icon class="mealIcon" name="star-outline"></ion-icon>
                    <strong>4.9</strong>Rating (537)
                  </li>
                </ul>
              </div>
            </div>
            <div className="mealCard">
              <img src={meal2} alt="Avocado Salad" className="mealImage" />
              <div className="mealContent">
                <div className="mealTag">
                  <span className="tag  tagvegan">Vegan</span>
                  <span className="tag tagPaleo">Paleo</span>
                </div>
                <p className="mealTitle">Avocado Salad</p>
                <ul className="mealAttributes">
                  <li className="mealAttribute">
                    <ion-icon name="flame-outline" class="mealIcon"></ion-icon>
                    <strong> 400</strong> Calories
                  </li>
                  <li className="mealAttribute">
                    <ion-icon
                      name="restaurant-outline"
                      class="mealIcon"
                    ></ion-icon>
                    NutriScore &reg;<strong> 92</strong>
                  </li>
                  <li className="mealAttribute">
                    <ion-icon class="mealIcon" name="star-outline"></ion-icon>
                    <strong>4.8</strong>Rating (441)
                  </li>
                </ul>
              </div>
            </div>
            <div className="mealDiets">
              <h3 className="headingTertiary">Works with any diet!</h3>
              <ul className="listHead">
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Vegetarian</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Vegan</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Pescatarian</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Gluten-free</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Lactose-free</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Keto</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Paleo</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Low FODMAP</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Kid-friendly</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container allRecipes">
            <a href="#" className="linkCls">
              see all recipes &rarr;
            </a>
          </div>
        </section>

        <section className="sectionPricing">
          <div className="container">
            <span className="subHeading">Pricing</span>
            <h2 className="headingSecondary">
              Eat well without breaking the bank!
            </h2>
          </div>

          <div className="container gridClass marginBtmMd gridCol_2">
            <div className="pricingPlans pricingPlanFirst">
              <header className="planHeader">
                <p className="planName">Starter</p>
                <p className="planPrice">
                  <span>$</span>399
                </p>
                <p className="planText">It's just 13$ per meal!</p>
              </header>
              <ul className="listHead">
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>1 meal per day</span>
                </li>

                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Order from 11am and 9pm</span>
                </li>

                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Delivery is free</span>
                </li>
                <li className="listItems">
                  <ion-icon class="iconStyle" name="close-outline"></ion-icon>
                  <span>Get access to latest recipes</span>
                </li>
              </ul>
              <div className="planSignUp">
                <a href="#" className="btn btnFull">
                  Start eating well
                </a>
              </div>
            </div>
            <div className="pricingPlans pricingPlanComplete">
              <header className="planHeader">
                <p className="planName ">Complete</p>
                <p className="planPrice">
                  <span>$</span>649
                </p>
                <p className="planText">It's just 11$ per meal!</p>
              </header>
              <ul className="listHead">
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    <strong>2</strong> meal per day
                  </span>
                </li>

                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>
                    Order <strong>24/7</strong>
                  </span>
                </li>

                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Delivery is free</span>
                </li>
                <li className="listItems">
                  <ion-icon
                    class="iconStyle"
                    name="checkmark-outline"
                  ></ion-icon>
                  <span>Get access to latest recipes</span>
                </li>
              </ul>
              <div className="planSignUp">
                <a href="#" className="btn btnFull">
                  Start eating well
                </a>
              </div>
            </div>
          </div>
          <div className="container gridClass">
            <aside className="planDetails">
              Prices include all applicable taxes.You can cancel at any time.
              Both plans contain the following:
            </aside>
          </div>

          <div className="container gridClass gridCol_4">
            <div className="feature">
              <ion-icon class="featureIcon" name="infinite-outline"></ion-icon>
              <p className="featureTitle">Never cook again!</p>
              <p className="featureText">
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>
            <div className="feature">
              <ion-icon class="featureIcon" name="nutrition-outline"></ion-icon>
              <p className="featureTitle">Local and organic</p>
              <p className="featureText">
                Our cooks only use local, fresh, and organic products to prepare
                your meals.
              </p>
            </div>
            <div className="feature">
              <ion-icon class="featureIcon" name="leaf-outline"></ion-icon>
              <p className="featureTitle"> No waste</p>
              <p className="featureText">
                All our partners only use reusable containers to package all
                your meals.
              </p>
            </div>
            <div className="feature">
              <ion-icon class="featureIcon" name="pause-outline"></ion-icon>
              <p className="featureTitle">Pause anytime</p>
              <p className="featureText">
                Going on vacation? Just pause your subscription, and we refund
                unused days
              </p>
            </div>
          </div>
        </section>

        <section className="sectionCta gridMrBtm">
          <div className="container">
            <div className="cta">
              <div className="ctaTextbox">
                <h2 className="headingSecondary">
                  We offer a free sample meal
                </h2>
                <p className="ctaText">
                  Healthy, tasty and hassle-free meals are waiting for you.
                  Start eating well today. You can cancel or pause anytime. And
                  the first meal is on us!
                </p>
                <form className="ctaForm" action="#">
                  <div>
                    <label for="fullName">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Jon Doe"
                      required
                    />
                  </div>
                  <div>
                    <label for="eMail">Email address</label>
                    <input
                      id="eMail"
                      type="email"
                      placeholder="abc@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label for="selectWhere">
                      Where did you hear about us?
                    </label>
                    <select id="selectWhere" required>
                      <option value="">Please Choose One Option </option>
                      <option value="friends">Friends & Family</option>
                      <option value="social media">Social Media</option>
                      <option value="commercials">Commercials</option>
                      <option value="podcast">Podcast</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <button className="btn btnForm">Sign up now!</button>
                </form>
              </div>
              <div
                className="ctaImagebox"
                role="image"
                aria-label="Women enjoying food"
              ></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footerMain">
        <div className="container gridClass gridFooter">
          <div className="logoColumn">
            <a href="#" className="footerLogo">
              <img src={Logo} alt="OmniFood Logo" className="headerLogo" />
            </a>
            <ul className="socialLinks">
              <li>
                <a className="footerLink" href="#">
                  <ion-icon name="logo-instagram" class="socialIcon"></ion-icon>
                </a>
              </li>
              <li>
                <a className="footerLink" href="#">
                  <ion-icon name="logo-facebook" class="socialIcon"></ion-icon>
                </a>
              </li>
              <li>
                <a className="footerLink" href="#">
                  <ion-icon name="logo-twitter" class="socialIcon"></ion-icon>
                </a>
              </li>
            </ul>
            <p className="copyright">
              Copyright &copy; 2023 by Omnifood, Inc. All rights reserved.{" "}
            </p>
          </div>
          <div className="addressCol">
            <p className="footerHeading">Contact us</p>
            <address className="contacts">
              <p className="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a className="footerLink" href="tel:415-201-6370">
                  415-201-6370
                </a>
                <br />
                <a className="footerLink" href="mailto:hello@omnifood.com">
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
          <div className="navCol">
            <p className="footerHeading">Company</p>
            <ul className="footerNavigation">
              <li>
                <a href="#" className="footerLink">
                  About Omnifoodd
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  For Business
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Cooking partners
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="navCol">
            <p className="footerHeading">Account</p>
            <ul className="footerNavigation">
              <li>
                <a href="#" className="footerLink">
                  Create account
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Sign in
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  iOS app
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Android app
                </a>
              </li>
            </ul>
          </div>

          <div className="navCol">
            <p className="footerHeading">Resources</p>
            <ul className="footerNavigation">
              <li>
                <a href="#" className="footerLink">
                  Create account
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Recipe directory
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Privacy & terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
