import React from 'react'
import { useState } from 'react'
import { useRef } from 'react';
import { FaUpload } from 'react-icons/fa';
import m31 from '../images/m31.jpg'
import m41 from '../images/m41.jpg'
import m21 from '../images/m21.jpg'
import { HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Free_AI_Headshot_Generator = () => {
    const [isOpen, setIsOpen] = useState(false);

    const fileInputRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);

    const handleToggle = () => {
        setIsVisible(prev => !prev);
    };
    const handleToggle1 = () => {
        setIsVisible1(prev => !prev);
    };
    const handleToggle2 = () => {
        setIsVisible2(prev => !prev);
    };
    const handleToggle3 = () => {
        setIsVisible3(prev => !prev);
    };
    const handleToggle4 = () => {
        setIsVisible4(prev => !prev);
    };
    const handleToggle5 = () => {
        setIsVisible5(prev => !prev);
    };
    const handleToggle6 = () => {
        setIsVisible6(prev => !prev);
    };
    const handleToggle7 = () => {
        setIsVisible7(prev => !prev);
    };

    const handleFileSelect = (e) => {
        const files = e.target.files;
        console.log("Selected files:", files);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log("Dropped files:", files);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='container-fluid'>

            {/* Navbar */}

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
                                    <li><a class="dropdown-item" href="/">AI Studio Quality Headshot Generator</a></li>
                                </ul>
                            </li>
                            <li className="nav-item nav-item1" >
                                <a className="nav-link" href="#Features">Features</a>
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


            <div className="container-fluid">
                <div className="row free_text">
                    <div className='col-md-12 text-center'>
                        <h1>100% Free AI Headshot Generator for <br />Professional Headshots</h1>
                    </div>
                </div>
                <div className="row free_text">
                    <div className='col-md-12 text-center'>
                        <p>Upload your photo and get a professional headshot with our Free AI Headshot Generator <br /> online, create high quality headshot 100% free.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" >
                <div className="row">
                    <div className='col-md-4'></div>
                    <div
                        className="col-md-4 Main_5_free justify-content-center text-center"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <button
                            className="btn justify-content-center text-center"
                            onClick={() => fileInputRef.current.click()}
                        >
                            <FaUpload size={15} className='Upload_icon_Free' />
                            Upload Image
                        </button>
                        <p>Or just drop here</p>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                        />
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-5'></div>
                    <div className='col-md-2'>
                        <img src={m31} className='m12_Free' />
                        <img src={m41} className='m12_Free' />
                        <img src={m31} className='m12_Free' />
                        <img src={m41} className='m12_Free' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center Free_TXt'>
                        <p>Our free AI headshot generator will get the task done, but the quality may not match what <br /> you get with our <a href='/'>Professional AI Headshot Generator </a>
                            For a more polished and studio <br /> quality look, try our <a href='/create-headshots1'> Professional option!</a></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 home_banner">
                        <h1>How to Generate Professional Headshots <br /> with AI?</h1>
                    </div>
                </div>
                <div className="row card_Home">
                    <div className="col-md-2"></div>
                    <div className="col-md-3 mb-4 text-center text-md-start">
                        <div className="mb-3">
                            <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 1</button>
                        </div>
                        <h4 className="fw-bold">Upload Your Image</h4>
                        <p className="text-muted">Pick a clear, good quality photo where your face is fully visible and upload it to our AI headshot generator.</p>
                    </div>
                    <div className="col-md-3 mb-4 text-center text-md-start">
                        <div className="mb-3">
                            <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 2</button>
                        </div>
                        <h4 className="fw-bold">Generate Headshot</h4>
                        <p className="text-muted">Click on "Generate Headshot", and our AI will turn your photo into a professional headshot.</p>
                    </div>

                    <div className="col-md-3 mb-4 text-center text-md-start">
                        <div className="mb-3">
                            <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 3</button>
                        </div>
                        <h4 className="fw-bold">Download Headshot</h4>
                        <p className="text-muted">Download your headshot, or make a new one if you want more variations.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </div>

            <div className='container-fluid' id='Features'>
                <div className='row'>
                    <div className='col-md-12 text-center cross_img_Free'>
                        <h1>Why Choose SmartShot AI for Professional Headshots?</h1>
                    </div>
                </div>
                {/* one */}
                <div className="row m1_img_main">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src={m31} className="m1Couple_img_Free" />
                        <img src={m41} className="m2Couple_img_Free" />
                    </div>
                    <div className="col-md-4 m1_img_txt">
                        <h2>The Best Free AI Headshot Generator for Professional Photos</h2>
                        <p>Most headshot generator tools ask you to upload many photos, take a long time, and produce low quality results.
                            But with our AI headshot generator, you only need to upload one photo, and in just 25 seconds, you get a high quality professional headshot for free.
                            Our free AI headshot generator is the perfect tool for anyone who needs a professional photo.
                            You don't have to spend money on expensive photoshoots. Just use our AI headshot generator and get a quality headshot for free!
                        </p>
                    </div>
                </div>

                {/* two */}
                <div className="row m1_img_main">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 m1_img_txt2">
                        <h2>Perfect AI Headshot Generator for LinkedIn, Resumes, Business Profiles, and More</h2>
                        <p>A professional photo can make a big difference in how people see you online.
                            Whether it's for LinkedIn, your resume, or your business profile, having the right headshot is important.
                            For job seekers, our free AI headshot generator creates the perfect headshot for your resume, helping you make a great first impression.
                            For LinkedIn, our AI tool creates a high quality, professional photo to boost your profile visibility.
                            For business profiles, you can get a great headshot to represent your business and brand.
                            You can also turn your selfie into a professional headshot for your website or portfolio.
                            Just upload your photo, and within seconds, you'll get a professional headshot for free. The process is simple, easy, and fast.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={m21} className='M_21_Free' />
                    </div>
                </div>

                <div className="row m1_img_main">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src={m31} className="m1Couple_img_Free" />
                        <img src={m41} className="m2Couple_img_Free" />
                    </div>
                    <div className="col-md-4 m1_img_txt">
                        <h2>Create Professional Headshot for Social Media Profiles</h2>
                        <p>To make a great impression, you should have a professional headshot for your social media profiles.
                            With our free AI headshot generator, you can turn your selfie or photo into a headshot that's perfect for Instagram and Facebook to boost your personal branding.
                            Use our free headshot generator and In just 3 simple steps, you can create a quality headshot online that's ideal for your Twitter or business accounts.
                            It's easy and quick!
                        </p>
                    </div>
                </div>

                <div className="row m1_img_main">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 m1_img_txt2">
                        <h2>Instant, Easy, and Quality Results with our AI Headshot Generator</h2>
                        <p>SmartShot AI makes creating professional headshots simple and fast.
                            With just a few clicks, you can upload your photo and get a high quality headshot in seconds, perfect for your resume, LinkedIn, or social media profiles!
                            Our advanced AI technology makes sure your headshot will be perfect, no matter your gender, outfit, or hairstyle.
                            Plus, it's completely free right now, saving you both time and money!
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={m21} className='M_21_Free' />
                    </div>
                </div>

            </div>

            <div className="container-fluid" id="FAQs">

                <div className="row">
                    <div className="col-md-12 quenstion_txt text-center">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                </div>

                {/* one Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        How does the AI Headshot generator work?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle}>
                            {isVisible ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                Our AI headshot generator uses advanced algorithms to create high quality, professional AI headshots.
                                Simply upload <br /> your photos, select preferences, and our tool will generate the perfect AI professional headshot for your needs.
                            </div>
                        </>
                    )}
                </div>

                {/* two Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        How long does it take to generate a headshot?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle1}>
                            {isVisible1 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible1 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                It takes just a few seconds to generate a professional headshot using our AI tool. You'll get a very good quality result in <br /> no time!
                            </div>
                        </>
                    )}
                </div>

                {/* three Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        Are my photos safe and secure?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle2}>
                            {isVisible2 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible2 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                Your privacy is a priority. We ensure that all your AI headshots are processed securely.
                            </div>
                        </>
                    )}
                </div>
                {/* Four Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        What file formats are available for the generated headshot?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle3}>
                            {isVisible3 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible3 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                You can download your AI headshot in popular formats like JPG and PNG, making it easy to upload to platforms like<br /> LinkedIn,
                                business profiles, or social media.
                            </div>
                        </>
                    )}
                </div>
                {/* Five Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        Can i use generated headshots for commercial purposes?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle4}>
                            {isVisible4 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible4 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                Absolutely! Once you have your AI headshot, you can use it across multiple platforms, including websites,
                                business<br /> cards, and resumes, to showcase a professional image.
                            </div>
                        </>
                    )}
                </div>
                {/* six Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        How to Get the Best Results for an AI Headshot?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle5}>
                            {isVisible5 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible5 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                To get the best headshots on, upload a clear, well lit photo taken at eye level, free from accessories like hats or <br /> sunglasses.
                                The clearer your photo, the better the AI will create a realistic, high quality headshot.
                            </div>
                        </>
                    )}
                </div>
                {/* Seven Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        Who should use the AI headshot Generator?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle6}>
                            {isVisible6 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible6 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                Anyone who needs professional photos can use our AI headshot generator.
                                It's perfect for creating headshots for<br /> LinkedIn, resumes, websites, social media profiles, business cards, and blogs.
                            </div>
                        </>
                    )}
                </div>
                {/* Eight Toggle Btn Hide Show */}

                <div className="row FAQs_Row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 Q_1">
                        Can I get a quality headshot for free?
                    </div>
                    <div className="col-md-3">
                        <button className="btn Tgl_Btn" onClick={handleToggle7}>
                            {isVisible7 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                        </button>
                    </div>
                    {isVisible7 && (
                        <>
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Tgl_Txt">
                                Yes, our tool will generate a headshot for free, but the quality may not match the level offered in our professional plan.<br />
                                For a studio quality look, we recommend using our <a href='/create-headshots1'> Premium option.</a>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Footer */}

            <div className="container-fluid Bg_Footer">
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
    )
}

export default Free_AI_Headshot_Generator
