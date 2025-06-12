import { useState, useEffect, useRef } from "react";
// import logo from "../images/logo.png";
// import fb from "../images/facebook.png";
// import ig from "../images/instagram.png";
// import tt from "../images/twitter.png";
import privacy from "../images/privacy.png";
import rating from "../images/rating.png";
import check from "../images/check.png";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import m31 from "../images/m31.jpg";
import m41 from "../images/m41.jpg";
import Five_str from "../images/five_Star.png"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { FaBehance } from "react-icons/fa6";
import { BsMessenger } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialReddit } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { ImPower } from "react-icons/im";
import { FaSackDollar } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrollRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);
    const [isVisible8, setIsVisible8] = useState(false);
    const [isVisible9, setIsVisible9] = useState(false);

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
    const handleToggle8 = () => {
        setIsVisible8(prev => !prev);
    };
    const handleToggle9 = () => {
        setIsVisible9(prev => !prev);
    };

    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const scrollStep = () => {
            if (container) {
                scrollAmount += 1;
                container.scrollLeft = scrollAmount;

                if (scrollAmount >= container.scrollWidth - container.clientWidth) {
                    scrollAmount = 0;
                }
            }
        };

        const interval = setInterval(scrollStep, 30); // adjust speed

        return () => clearInterval(interval);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="container-fluid main_Navbar">
                {/* first navbar */}
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
                    {/* headshots heading */}
                    <div className="container-fluid">
                        <div className="row m-4 p-4">
                            <div className="col-12 d-flex justify-content-center align-items-center">

                                <p className="Main_p_Images">
                                    <img src={m1} className="m1_Headshots" />
                                    <img src={m2} className="m1_Headshots2" />
                                    <img src={m3} className="m1_Headshots3" />
                                    Trusted by 5000+ professionals for high quality AI Headshots!</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-12 Home_t">
                                <h1>Professional<span className="text-primary"> AI Headshot <br /></span> Generator </h1>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-12 Home_t2">
                                <p>
                                    Create realistic, professional looking headshots in minutes with our AI headshot generator.<br />
                                    Get studio quality AI professional headshots for LinkedIn, resumes, business, and social media profiles<br /> easily. Upload your photos or selfies, choose your styles, and get 40+ headshots online.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* headshots btn */}
                    <div className="container-fluid">
                        <div className="row Home_t31 justify-content-center text-center">
                            <div className="col-md-12 Home_t3 justify-content-center text-center">
                                <a href="/create-headshots1">
                                    <button className="btn Home_btn btn-primary">Create Your Headshots <GoArrowRight className="icon_Side" /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* images */}
                    <div className="container-fluid py-4">
                        <div className="row Scroll_Img">
                            <div className="col-12">
                                <div
                                    className="d-flex gap-3 overflow-auto px-3"
                                    ref={scrollRef}
                                    style={{ whiteSpace: 'nowrap' }}
                                >
                                    {/* Image 1 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m31}
                                            alt="Image 1"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 1
                                        </div>
                                    </div>

                                    {/* Image 2 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m41}
                                            alt="Image 2"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 2
                                        </div>
                                    </div>

                                    {/* Image 3 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m31}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 4 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m41}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 5 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m31}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 6 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m41}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 7 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m31}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 8 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m41}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 9 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m31}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 10 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m41}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 11 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m31}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>
                                    {/* Image 12 */}
                                    <div className="position-relative flex-shrink-0" style={{ minWidth: 160 }}>
                                        <img
                                            src={m41}
                                            alt="Image 3"
                                            className="img-fluid rounded shadow-sm"
                                            style={{ height: '220px', objectFit: 'cover', width: '160px' }}
                                        />
                                        <div className="position-absolute bottom-0 start-0 w-100 px-2 py-1 text-white bg-dark bg-opacity-50 rounded-bottom small">
                                            Label 3
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* card defination and three cards */}
                    <div className="container-fluid">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-12 home_banner">
                                <h1>How to Create Professional Headshots with <br /> Our AI Headshot Generator</h1>
                            </div>
                        </div>
                        <div className="row card_Home">
                            <div className="col-md-2"></div>
                            <div className="col-md-3 mb-4 text-center text-md-start">
                                <div className="mb-3">
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 1</button>
                                </div>
                                <h4 className="fw-bold">Upload Your Photos</h4>
                                <p className="text-muted">Upload a clear and high quality photo or selfie of yourself. The photo should be recent (taken in the last 6 months) and show your face clearly from the front at eye level.<br />
                                    Do not wear hats, sunglasses, or headphones so that our AI headshot generator can create the best AI headshot.</p>
                            </div>
                            <div className="col-md-3 mb-4 text-center text-md-start">
                                <div className="mb-3">
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 2</button>
                                </div>
                                <h4 className="fw-bold">Customize Your Look</h4>
                                <p className="text-muted">Personalize your AI headshots by choosing features like gender, age, eye color, and hair color. This helps us create a good quality AI professional headshot.<br />
                                    With these options, our AI headshot generator can create headshots that match your style and appearance, making it look more realistic.</p>
                            </div>

                            <div className="col-md-3 mb-4 text-center text-md-start">
                                <div className="mb-3">
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 3</button>
                                </div>
                                <h4 className="fw-bold">Generate and Download</h4>
                                <p className="text-muted">After choosing your look, click "Generate" to make your AI headshot. Wait for the results, and we will email you when your headshots are ready.<br />
                                    If you like the result, just click "Download" to get your AI generated professional headshots.</p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                    </div>

                    {/* headshots  generator */}
                    {/* scrolling images */}
                    <div className="container-fluid Try_our_AI_Couple_Photoshoot" id="Gallery">
                        <div className="row Home_Quality">
                            <div className="col-md-12">
                                <h1>Try our AI Couple Photoshoot</h1>
                                <p>Turn your Selfies into Beautiful Couple Photos with our AI tool! Whether you need couple photoshoot <br /> ideas, want to fix awkward poses,
                                    or create perfect photos for weddings, Valentine's, or <br /> anniversaries, we've got you covered.</p>
                                <a href="/Requirements">
                                    <button className="End_btn">Create Your Headshots <GoArrowRight className="icon_Side_End" /></button>
                                </a>
                            </div>
                        </div>


                        <div className="container-fluid">
                            <div className='row'>
                                <div className="col-md-12">
                                    <div className="scroll-wrapper2">
                                        <div className="scroll-images2">
                                            <img src={m31} alt="1" />
                                            <img src={m41} alt="2" />
                                            <img src={m31} alt="3" />
                                            <img src={m41} alt="4" />
                                            <img src={m31} alt="5" />
                                            <img src={m41} alt="6" />
                                            <img src={m31} alt="7" />
                                            <img src={m41} alt="8" />
                                            <img src={m31} alt="9" />
                                            <img src={m41} alt="10" />
                                            <img src={m31} alt="11" />
                                            <img src={m41} alt="12" />
                                            <img src={m31} alt="13" />
                                            <img src={m41} alt="14" />
                                            <img src={m31} alt="15" />
                                            <img src={m41} alt="16" />
                                            <img src={m31} alt="17" />
                                            <img src={m41} alt="18" />
                                            <img src={m31} alt="19" />
                                            <img src={m41} alt="20" />
                                            <img src={m31} alt="21" />
                                            <img src={m41} alt="22" />
                                            <img src={m31} alt="23" />
                                            <img src={m41} alt="24" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="scrolling_images_Main"></div>


                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 Ai_h1 text-center">
                                <h1>
                                    Generate Your Own AI Professional Headshot
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* first AI Professional Headshot */}

                    <div className="container-fluid">
                        <div className="row m1_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <img src={m1} className="m1_img" /><FaFacebook className="fb_icon" />
                                <img src={m2} className="m2_img" /><FaXTwitter className="twitter_icon" />
                            </div>
                            <div className="col-md-4 m1_img_txt">
                                <h2>Generate Realistic AI Headshots for Every Platform</h2>
                                <p>Our AI headshot maker creates professional looking headshots with clear facial features,
                                    good lighting, natural skin tones, and the right expression, so your photo looks real and natural. <br />
                                    You can easily create a studio quality headshot for any platform, like LinkedIn, Instagram, Facebook, or personal websites.<br />
                                    Whether you need a corporate headshot, realtor headshot, or actor headshot, our AI headshots generator helps you look professional and stand out in any industry.
                                    They are perfect for boosting visibility for networking or personal branding.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* second AI Professional Headshot */}

                    <div className="container-fluid">
                        <div className="row m1_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-4 m1_img_txt2">
                                <h2>Create Professional Headshots with AI for Your Online Profiles</h2>
                                <p>Get AI generated headshots that make your online photo look professional.
                                    Perfect for business profiles, resumes, and portfolios. <br />
                                    Choose how you want to look by picking from different options.
                                    Change your style, background, and features to get a personalized AI headshot. AI headshot<br />
                                    With easy to use features, you can create AI headshots that not only look professional but also show your personality,
                                    making a strong impression on clients, employers, or anyone viewing your profile.
                                </p>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4 m1_Img_1">
                                <img src={m3} className="m3_img" /><TiSocialDribbble className="Dribble_Icon" />
                                <img src={m4} className="m4_img" /><FaLinkedinIn className="LinkdIn_Icon" />
                            </div>
                        </div>
                    </div>

                    {/* third AI Professional Headshot */}

                    <div className="container-fluid">
                        <div className="row m2_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <img src={m1} className="m1_img" /><SlSocialInstagram className="ig_icon" />
                                <img src={m2} className="m2_img" /><SlSocialReddit className="SocialReddit_icon" />
                            </div>
                            <div className="col-md-4 m1_img_txt">
                                <h2>Create Professional Headshots That Build Trust & Credibility</h2>
                                <p>Create business headshots with ai that grabs attention on social media like Facebook,
                                    Instagram, and Twitter, helping your profile stand out in professional networks. <br />
                                    With our AI headshot generator, you can personalize your headshot by changing your hairstyle, background, and more.
                                    Get studio quality headshots that match your style or brand.<br />
                                    A professional headshot builds trust, creates a great first impression, and adds credibility.
                                    It also helps you connect better with people on social media.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Four AI Professional Headshot */}

                    <div className="container-fluid">
                        <div className="row m2_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-5 m1_img_txt2">
                                <h2>Professional AI Headshots for Team Member Profiles</h2>
                                <p>Easily create AI professional headshots for team member profiles without <br /> spending money on expensive photography or wasting time on editing. <br />
                                    Our AI headshot generator helps you get professional looking headshot in <br /> minutes.
                                    These ai headshots are great for business, social media, personal <br /> branding, or anywhere a professional image is needed.<br />
                                    Our tool is simple to use, making it easy to generate attention grabbing <br /> headshots with little effort.
                                    This online headshot generator also helps maintain <br /> the same style for all team members, so your company looks neat and uniform.<br />
                                    You can also use these headshot images for LinkedIn, your company website,<br /> and internal directories.
                                </p>
                            </div>
                            <div className="col-md-4 m1_Img_1">
                                <img src={m3} className="m3_img" /><BsMessenger className="Messenger_Icon" />
                                <img src={m4} className="m4_img" /><FaBehance className="Behance_Icon" />
                            </div>
                        </div>
                    </div>
                    {/* three Card */}
                    <div className="container-fluid">
                        <div className="row card-Home-txt">
                            <div className="col-md-12 text-center">
                                <h1>Why Do Our AI Headshots <br /> Stand Above the Rest?</h1>
                            </div>
                        </div>
                        <div className="row card-Home justify-content-center">
                            {/* Feature 1 */}
                            <div className="col-sm-1"></div>
                            <div className="col-md-3">
                                <div className="card_bg rounded-4 text-center p-4 h-100">
                                    <div className="mb-3">
                                        <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                            <strong>HDR</strong>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold">Studio Quality Headshot</h5>
                                    <p className="text-muted mb-0">
                                        Our AI technology creates high resolution, studio quality headshots with natural lighting, sharp details, and lifelike expressions.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="col-md-3">
                                <div className="card_bg rounded-4 text-center p-4 h-100">
                                    <div className="mb-3">
                                        <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                            <FaSackDollar />
                                        </div>
                                    </div>
                                    <h5 className="fw-bold">Cost Effective</h5>
                                    <p className="text-muted mb-0">
                                        Get premium headshots for much less than a regular photoshoot. Perfect for all teams, from small startups to big companies.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="col-md-3">
                                <div className="card_bg rounded-4 text-center p-4 h-100">
                                    <div className="mb-3">
                                        <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                            <ImPower />
                                        </div>
                                    </div>
                                    <h5 className="fw-bold">Fast & Simple</h5>
                                    <p className="text-muted mb-0">
                                        No need for expensive photoshoots! Just upload your pictures, and our AI will create professional headshots for you.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>

                    {/* offer Card */}

                    <div className="container-fluid" id="Pricing">
                        <div className="row txt_nav">
                            <div className="col-md-12 text-center">
                                <h1>Choose the Best Package for Your <br /> Professional Headshot</h1>
                            </div>
                        </div>
                        <div className="container-fluid Three_Cards py-5">
                            <div className="row justify-content-center">

                                {/* Professional Plan */}
                                <div className="col-md-1 "></div>
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 shadow-sm text-center p-4" style={{ borderRadius: "20px" }}>
                                        <h4 className="fw-bold">Professional</h4>
                                        <p className="text-muted small mb-2">Perfect for personal branding</p>
                                        <h2 className="fw-bold mb-4">$19</h2>
                                        <button className="btn_Buy btn-light fw-bold mb-4">Buy Now</button>
                                        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: 220 }}>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 40 Headshots</li>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 5+ Different locations</li>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 5+ different outfits</li>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 4-6 hours processing time</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Executive Plan */}
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 shadow-sm text-white text-center p-4" style={{ borderRadius: "20px", border: "5px solid rgb(120, 153, 253)d", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", transform: "scale(1.05)", background: " #6d91fd" }}>
                                        <h4 className="fw-bold">Executive</h4>
                                        <p className="small mb-2">Built for business and visibility</p>
                                        <h2 className="fw-bold mb-4">$29</h2>
                                        <button className="btn_Buy btn-light fw-bold mb-4">Buy Now</button>
                                        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: 220 }}>
                                            <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 100 Headshots</li>
                                            <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 15+ Different locations</li>
                                            <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 10+ different outfits</li>
                                            <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 3-4 hours processing time</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Elite Plan */}
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 shadow-sm text-center p-4" style={{ borderRadius: "20px" }}>
                                        <h4 className="fw-bold">Elite</h4>
                                        <p className="text-muted small mb-2">Made for maximum impact</p>
                                        <h2 className="fw-bold mb-4">$49</h2>
                                        <button className="btn_Buy btn-light fw-bold mb-4">Buy Now</button>
                                        <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: 220 }}>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 200 Headshots</li>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 30+ Different locations</li>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 20+ different outfits</li>
                                            <li className="mb-2"><span className="text-primary"><IoCheckmarkCircleOutline /></span> 3-4 hours processing time</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-1 "></div>
                            </div>
                        </div>
                    </div>

                    {/* developer identity */}

                    <div className="container-fluid">
                        <div className="row Choose_txt">
                            <div className="col-md-12 text-center">
                                <h1>See Why Professionals <br /> Choose Us</h1>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                {/* Testimonial 1 */}
                                <div className="col-md-1"></div>
                                <div className="col-md-3 crd_1">
                                    <div className="p-2 shadow-sm bg-light rounded">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={p2} alt="" className="rounded-circle me-3" width="50" height="50" />
                                            <div>
                                                <h6 className="mb-0 fw-bold">Addison T.</h6>
                                                <small className="text-muted">Job Seekers</small>
                                            </div>
                                        </div>
                                        <p>I just received fantastic headshots! My LinkedIn profile has never looked better, and I've received countless compliments from colleagues. Thank You!!!</p>
                                        <div className="text-warning">
                                            <img src={Five_str} className="Five_str" />
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 2 */}
                                <div className="col-md-3 crd_1">
                                    <div className="p-2 shadow-sm bg-light rounded">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={p2} alt="" className="rounded-circle me-3" width="50" height="50" />
                                            <div>
                                                <h6 className="mb-0 fw-bold">Bill G.</h6>
                                                <small className="text-muted">Social Media Influencers</small>
                                            </div>
                                        </div>
                                        <p>I just received fantastic headshots! My LinkedIn profile has never looked better, and I've received countless compliments from colleagues. Thank You!!!</p>
                                        <div className="text-warning">
                                            <img src={Five_str} className="Five_str" />
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial 3 */}
                                <div className="col-md-3 crd_1">
                                    <div className="p-2 shadow-sm bg-light rounded">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={p2} alt="" className="rounded-circle me-3" width="50" height="50" />
                                            <div>
                                                <h6 className="mb-0 fw-bold">Tanya P.</h6>
                                                <small className="text-muted">Entrepreneur</small>
                                            </div>
                                        </div>
                                        <p>I just received fantastic headshots! My LinkedIn profile has never looked better, and I've received countless compliments from colleagues. Thank You!!!</p>
                                        <div className="text-warning">
                                            <img src={Five_str} className="Five_str" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-1"></div>
                                {/* Testimonial 4 */}
                                <div className="row box_main justify-content-center">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-3 crd_1">
                                        <div className="p-2 shadow-sm bg-light rounded">
                                            <div className="d-flex align-items-center mb-3">
                                                <img src={p2} alt="" className="rounded-circle me-3" width="50" height="50" />
                                                <div>
                                                    <h6 className="mb-0 fw-bold">Carlos H.</h6>
                                                    <small className="text-muted">Digital Marketer</small>
                                                </div>
                                            </div>
                                            <p>I just received fantastic headshots! My LinkedIn profile has never looked better, and I've received countless compliments from colleagues. Thank You!!!</p>
                                            <div className="text-warning">
                                                <img src={Five_str} className="Five_str" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial 5 */}
                                    <div className="col-md-3 crd_1">
                                        <div className="p-2 shadow-sm bg-light rounded">
                                            <div className="d-flex align-items-center mb-3">
                                                <img src={p2} alt="" className="rounded-circle me-3" width="50" height="50" />
                                                <div>
                                                    <h6 className="mb-0 fw-bold">Kevin M.</h6>
                                                    <small className="text-muted">Job Seeker</small>
                                                </div>
                                            </div>
                                            <p>I just received fantastic headshots! My LinkedIn profile has never looked better, and I've received countless compliments from colleagues. Thank You!!!</p>
                                            <div className="text-warning">
                                                <img src={Five_str} className="Five_str" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Testimonial 6 */}
                                    <div className="col-md-3 crd_1">
                                        <div className="p-2 shadow-sm bg-light rounded">
                                            <div className="d-flex align-items-center mb-3">
                                                <img src={p2} alt="" className="rounded-circle me-3" width="50" height="50" />
                                                <div>
                                                    <h6 className="mb-0 fw-bold">Michael J.</h6>
                                                    <small className="text-muted">Public Speaker</small>
                                                </div>
                                            </div>
                                            <p>I just received fantastic headshots! My LinkedIn profile has never looked better, and I've received countless compliments from colleagues. Thank You!!!</p>
                                            <div className="text-warning">
                                                <img src={Five_str} className="Five_str" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>
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
                                What Kind of photos do I need to upload?
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
                                        Upload a variety of photos with different facial expressions,
                                        backgrounds, and lighting from different times of the day.<br />
                                        Also, try to keep makeup and accessories simple.
                                    </div>
                                </>
                            )}
                        </div>

                        {/* two Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                What do you do with my uploaded photos?
                            </div>
                            <div className="col-md-2">
                                <button className="btn Tgl_Btn" onClick={handleToggle1}>
                                    {isVisible1 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                                </button>
                            </div>
                            {isVisible1 && (
                                <>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6 Tgl_Txt">
                                        We use your photos to train our AI model to create realistic AI headshots. Your photos are deleted after we provide <br /> result.
                                    </div>
                                </>
                            )}
                        </div>

                        {/* three Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                Who owns my AI photos?
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
                                        You do. We give you full ownership and commercial rights to your AI photos.
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Four Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                How long does an AI headshot take?
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
                                        We focus on quality, not speed. You'll get your headshots the same day.
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Five Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                What do people misunderstand about AI headshots?
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
                                        Not every photo will be perfect. Some might look strange due to AI's nature. But we guarantee at least one great <br /> headshot in every order.
                                    </div>
                                </>
                            )}
                        </div>
                        {/* six Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                How many good photos can I expect?
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
                                        The number of great headshots you get depends on the photos you upload. If you follow the guidelines, you can receive <br />
                                        8-10+ excellent shots. At a minimum, you'll get at least one profile worthy photo.
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Seven Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                What is the most realistic AI headshots?
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
                                        Smartshot is the most realistic AI headshot generator. It's used by major companies and powered by Flux technology to <br />
                                        create the best results.
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Eight Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                Can I use AI headshots on LinkedIn?
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
                                        Yes, 70% of our customers use AI headshots on LinkedIn. It's perfectly fine!
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Nine Toggle Btn Hide Show */}

                        <div className="row FAQs_Row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                Can ChatGPT generate headshots?
                            </div>
                            <div className="col-md-3">
                                <button className="btn Tgl_Btn" onClick={handleToggle8}>
                                    {isVisible8 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                                </button>
                            </div>
                            {isVisible8 && (
                                <>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6 Tgl_Txt">
                                        ChatGPT can create basic headshots, but they are not realistic enough for professional use. For high quality headshots, <br /> use Smartshot.
                                    </div>
                                </>
                            )}
                        </div>
                        {/* Ten Toggle Btn Hide Show */}

                        <div className="row FAQs_Row Q_10">
                            <div className="col-md-3"></div>
                            <div className="col-md-6 Q_1">
                                Is there a free AI headshot generator?
                            </div>
                            <div className="col-md-3">
                                <button className="btn Tgl_Btn" onClick={handleToggle9}>
                                    {isVisible9 ? <RxCross1 className="Tgl_Cross_Btn" /> : <HiPlus className="Tgl_Plus_Btn" />}
                                </button>
                            </div>
                            {isVisible9 && (
                                <>
                                    <div className="col-md-3"></div>
                                    <div className="col-md-6 Tgl_Txt">
                                        Yes, Smartshot offers a <a href="/Free_AI_Headshot_Generator">free AI headshot generator</a>. No email or credit card required.
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row justify-content-center text-center">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 Bg_End">
                                <h1 className="fw-bold">
                                    Ready for Your<br />Professional Makeover?
                                </h1>
                                <h2>Try Our AI Headshot Generator Today!</h2>
                                <a href="/create-headshots1">
                                    <button className="End_btn text-center">Create Your Headshots <GoArrowRight className="icon_Side_End" /></button>
                                </a>

                                <div className="scroll-wrapper">
                                    <div className="scroll-images">
                                        <img src={m1} alt="1" />
                                        <img src={m2} alt="2" />
                                        <img src={m1} alt="3" />
                                        <img src={m2} alt="4" />
                                        <img src={m1} alt="5" />
                                        <img src={m2} alt="6" />
                                        <img src={m1} alt="7" />
                                        <img src={m2} alt="8" />
                                        <img src={m1} alt="9" />
                                        <img src={m2} alt="10" />
                                        <img src={m1} alt="11" />
                                        <img src={m2} alt="12" />
                                        <img src={m1} alt="13" />
                                        <img src={m2} alt="14" />
                                        <img src={m1} alt="15" />
                                        <img src={m2} alt="16" />
                                        <img src={m1} alt="17" />
                                        <img src={m2} alt="18" />
                                        <img src={m1} alt="19" />
                                        <img src={m2} alt="20" />
                                        <img src={m1} alt="21" />
                                        <img src={m2} alt="22" />
                                        <img src={m1} alt="23" />
                                        <img src={m2} alt="24" />
                                    </div>
                                </div>
                            </div>
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
            </div>
        </>
    )
}

export default Navbar;
