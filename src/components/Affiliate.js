import React from 'react'
import { useState } from "react";
import privacy from "../images/privacy.png";
import rating from "../images/rating.png";
import check from "../images/check.png";
import { GoArrowRight } from "react-icons/go";
import { FaSackDollar } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import { Md60Fps } from "react-icons/md";

const Affiliate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar1 navbar-expand-sm d-block">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <div className="d-flex justify-content-center align-items-center">
                <img src={privacy} className="privacy" /><p className="privacy_text">We respect your privacy.</p>
              </div>
            </li>
            <li class="nav-item">
              <div className="d-flex justify-content-center align-items-center">
                <img src={rating} className="rating" /><p className="rating_text">Thousands of happy customers</p>
              </div>
            </li>
            <li class="nav-item">
              <div className="d-flex justify-content-center align-items-center">
                <img src={check} className="check" /><p className="check_text">45,975+ professional headshots created</p>
              </div>
            </li>
          </ul>
        </nav>
        <div className="container-fluid Main">
          {/* second navbar */}
          <nav className="navbar Nav_Blur_Free navbar-expand-sm d-block sticky-top">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="col-md-3 offset-sm-1">
                <a href="/" className='nav-link'>
                  <span className="fw-bold fs-5">Smart<span className="text-primary">Shot</span></span>
                </a>
              </div>

              <div
                className={`collapse navbar-collapse mt-2 ${isOpen ? "show" : ""}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li class="nav-item1 dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Tools</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="/AI_Couple_Photoshoot">AI Couple Photoshoot</a></li>
                      <li><a class="dropdown-item" href="/Free_AI_Headshot_Generator">Free AI Headshot Generator</a></li>
                    </ul>
                  </li>
                  <li className="nav-item nav-item1" >
                    <a className="nav-link" href="#Gallery">Gallery</a>
                  </li>
                  <li className="nav-item nav-item1">
                    <a className="nav-link" href="#Pricing">Pricing</a>
                  </li>
                  <li className="nav-item nav-item1">
                    <a className="nav-link" href="#FAQs">FAQs</a>
                  </li>
                  <li className="nav-item nav-item1">
                    <a className="nav-link" href="/Affiliate">Affiliate</a>
                  </li>
                </ul>


                <ul className="navbar-nav ms-auto MainNav">
                  <li className="nav-item Log_in ms-2">
                    <a className="nav-link" href="/login">
                      Log in
                    </a>
                  </li>
                  <li className="nav-item C_Head ms-2">
                    <a href="/create-headshots1" className="nav-link text-white">
                      Create Headshots
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-5'></div>
              <div className='col-md-2 justify-content-center text-center Affiliate_btn'>
                <p className='Affiliate_txt'>Affiliate Program</p>
              </div>
              <div className='col-md-5'></div>
            </div>
            <div className='row'>
              <div className='col-md-12 justify-content-center text-center Affiliate_Start'>
                <h1>Start <span className='text-primary'>Earning</span> With SmartShot</h1>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12 justify-content-center text-center Affiliate_Start_txt p-5'>
                <p>Earn <span>30% commission </span> on every sale by promoting SmartShot — the easiest way to create studio-quality AI professional headshots in minutes.<br />
                  Join our affiliate program and get rewarded for every user you refer.</p>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className="row justify-content-center text-center">
              <div className="col-md-12 Affiliate_btn1">
                <a href="/create-headshots1">
                  <button className="btn btn-primary">Join Now <GoArrowRight className="icon_Side" /></button>
                </a>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row Dwl_Affiliate'>
              <div className='col-md-12 justify-content-center text-center'>
                <a href='#'>
                  Download Brand Assets
                </a>
              </div>
            </div>
            <div className='row Dwl_Affiliate'>
              <div className='col-md-12 justify-content-center text-center'>
                <h1>Benefits of becoming affiliate</h1>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row Affiliate-Home-txt justify-content-center">
              {/* Feature 1 */}
              <div className="col-sm-1"></div>
              <div className="col-md-3">
                <div className="card_bg rounded-4 text-center p-4 h-100">
                  <div className="mb-3">
                    <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <MdAccountBalanceWallet className="Icon_Affiliate" />
                    </div>
                  </div>
                  <h5 className="fw-bold">Commission on Every Sale</h5>
                  <p className="text-muted mb-0">
                    Refer customers to SmartShot and earn 30% on every <br /> successful headshot package purchase.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-md-3">
                <div className="card_bg rounded-4 text-center p-4 h-100">
                  <div className="mb-3">
                    <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <Md60Fps className="Icon_Affiliate" />
                    </div>
                  </div>
                  <h5 className="fw-bold">60 day cookie window</h5>
                  <p className="text-muted mb-0">
                    Receive credit for sales made by your referrals within <br /> 60 days of their initial click.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-md-3">
                <div className="card_bg rounded-4 text-center p-4 h-100">
                  <div className="mb-3">
                    <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                      <FaSackDollar className="Icon_Affiliate" />
                    </div>
                  </div>
                  <h5 className="fw-bold">Earn up to $5000 a month!</h5>
                  <p className="text-muted mb-0">
                    Contribute to Smartshot's growth and earn substantial <br /> commissions in the process.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>

          {/* Footer */}

          <div className="container-fluid Bg_Footer_Affiliate">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                  <h5 className="m-0">SmartShot</h5>
                </div>
                <p>
                  Create studio-quality headshots with ease on <br /> SmartShot. Let AI
                  bring out your best look!
                </p>
              </div>

              <div className="col-md-2">
                <h6>Tools</h6>
                <ul className="list-unstyled">
                  <li>AI Headshot Generator</li>
                  <li>Free AI Headshot Generator</li>
                  <li>AI Couple Photoshoot</li>
                </ul>
              </div>

              <div className="col-md-1">
                <h6>About</h6>
                <ul className="list-unstyled">
                  <li>Gallery</li>
                  <li>FAQ</li>
                  <li>Pricing</li>
                </ul>
              </div>

              <div className="col-md-2">
                <h6>Legal</h6>
                <ul className="list-unstyled">
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>

            <hr className="border-secondary" />

            <div className="row">
              <div className="2"></div>
              <div className="col-md-10 offset-sm-1">
                <p className="mb-1">
                  Incorporation Name - FutureAI Limited
                </p>
                <p className="mb-1">
                  Incorporation address - Voukourestiou, 25 Neptune House, 1st Floor, Flat/Office 11 Zakaki, 3045, Limassol, Cyprus
                </p><br />
                <p>© 2024 Smartshot. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Affiliate
