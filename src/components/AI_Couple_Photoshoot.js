import { useState, useEffect, useRef } from "react";
import privacy from "../images/privacy.png";
import rating from "../images/rating.png";
import check from "../images/check.png";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m12 from "../images/m12.jpg";
import m31 from "../images/m31.jpg";
import m41 from "../images/m41.jpg";
import p2 from "../images/p2.jpg";
import Five_str from "../images/five_Star.png"
import { GoArrowRight } from "react-icons/go";
import { ImPower } from "react-icons/im";
import { FaSackDollar } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const AI_Couple_Photoshoot = () => {
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
            <div className='container-fluid'>
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
                                    <li className="nav-item nav-item1">
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
                        <div className="row text-center">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 Home_t">
                                <h1>AI Couple Photoshoot</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 Home_t2">
                                <p>
                                    Turn your Selfies into Beautiful Couple Photos with our AI tool! Whether you need couple <br /> photoshoot ideas,
                                    want to fix awkward poses, or create perfect photos for weddings, Valentine's,<br /> or anniversaries, we've got you covered.
                                    No need for a photographer just upload your photos,<br /> and our AI will create natural looking couple pictures with matching poses, styles, and<br /> backgrounds.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row Home_t31 justify-content-center text-center">
                            <div className="col-md-12 Photo_shoot">
                                <a href="/Requirements">
                                    <button className="btn Home_btn btn-primary">Create AI Couple Photoshoot <GoArrowRight className="icon_Side" /></button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid py-4">
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
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 home_banner">
                                <h1>How to Generate AI Couple Photos?</h1>
                            </div>
                        </div>
                        <div className="row card_Home">
                            <div className="col-md-2"></div>
                            <div className="col-md-3 mb-4 text-center text-md-start">
                                <div className="mb-3">
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 1</button>
                                </div>
                                <h4 className="fw-bold">Upload Your Photos</h4>
                                <p className="text-muted">Start by uploading clear, high quality photos of<br /> both partners. Choose recent photos (within the <br />
                                    last 6 months) that show your faces clearly with<br /> good lighting.<br />
                                    For best results, use front facing photos without <br />accessories like sunglasses or hats.
                                    This ensures <br /> our AI can create the most authentic and <br />beautiful Couple photos.</p>
                                <hr className="border-secondary2" />
                            </div>
                            <div className="col-md-3 mb-4 text-center text-md-start">
                                <div className="mb-3">
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 2</button>
                                </div>
                                <h4 className="fw-bold">Style Your Look</h4>
                                <p className="text-muted">Customize your Man and Woman photos by<br /> selecting preferences for both partners including<br /> hairstyles, outfits, and overall aesthetic.
                                    Our AI <br />will use these choices to create photos that<br /> match your vision.<br />
                                    You can adjust various features to ensure the<br /> generated photos perfectly capture your unique<br /> style as a couple.
                                </p>
                                <hr className="border-secondary2" />
                            </div>

                            <div className="col-md-3 mb-4 text-center text-md-start">
                                <div className="mb-3">
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">Step 3</button>
                                </div>
                                <h4 className="fw-bold">Generate Your Photos</h4>
                                <p className="text-muted">Click "Generate" to create your AI couple photos.<br /> Our advanced AI will process your selections and<br /> create beautiful,
                                    professional quality photos of<br /> you both together.<br />
                                    Review your generated photos and select your <br />favorites. Then simply click "Download" to save<br /> your perfect Couple photos,
                                    ready for sharing on<br /> social media or using in wedding invitations.</p>
                            </div>
                            <div className="col-md-2"></div>
                        </div>

                    </div>
                    <div className='container-fluid' id="Gallery">
                        <div className='row'>
                            <div className="col-md-12 justify-content-center text-center mb-5">
                                <h1>Explore the Quality of Our Couple Photos</h1>
                            </div>
                        </div>
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

                    {/* one */}

                    <div className='conatiner-fluid'>
                        <div className='row'>
                            <div className='col-md-12 Couple_P_txt text-center'>
                                <h1>Generate Your Own AI Couple Photoshoot</h1>
                            </div>
                        </div>
                        <div className="row m1_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <img src={m12} className="m1Couple_img" />
                                <img src={m41} className="m2Couple_img" />
                            </div>
                            <div className="col-md-4 m1_img_txt">
                                <h2>Design Beautiful Wedding Cards with Personalized Couple Photos Using AI</h2>
                                <p>With The AI Couple Photo Generator , you can easily make amazing couple photos for your wedding cards.
                                    Turn your favorite memories into special pictures that show the love and happiness you share.
                                    Our tool helps you create high-quality images that capture the love and joy of your most important memories.
                                    Whether you want to share your memories on social media or create a beautiful card, our AI Couple Photoshoot makes it simple and fun to get the perfect shot.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* two */}

                    <div className="container-fluid">
                        <div className="row m1_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-4 m1_img_txt2">
                                <h2>Make Your Anniversary Post Truly Special with AI Couple Photo Generator</h2>
                                <p>Easily create stunning anniversary photos that reflect the love and unique bond you share with your partner.
                                    Using our AI Couple Photo Generator, you can turn your favorite moments into beautiful images that celebrate your special day.
                                    Whether you're creating wedding photos using AI or designing an anniversary photoshoot,
                                    our tool lets you craft the perfect image that truly represents your relationship.
                                    Our easy to use feature helps you create AI couple photos that you'll always remember.
                                    These beautiful photos are perfect for sharing with friends and family, making your anniversary even more memorable.
                                </p>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4 m1_Img_1">
                                <img src={m12} className="m1Couple_img" />
                                <img src={m41} className="m2Couple_img" />
                            </div>
                        </div>
                    </div>

                    {/* three */}

                    <div className="container-fluid">
                        <div className="row m2_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-4">
                                <img src={m12} className="m1Couple_img" />
                                <img src={m41} className="m2Couple_img" />
                            </div>
                            <div className="col-md-4 m1_img_txt">
                                <h2>Highlight Your Relationship with Creative Social Media Posts Using AI Couple Photoshoot</h2>
                                <p>Make stunning couple photos that will stand out on Instagram and Facebook, showing off your love story.
                                    With our AI Couple Photo Generator you can easily create beautiful and unique photos that show the unique bond between you and your partner.
                                    Whether you're creating couple photos using AI or sharing a meaningful memory.
                                    It's simple to use, and the photos are perfect for sharing on social media with your friends and family.
                                    Create memorable social media posts that tell your love story.
                                    Whether it's AI couple photoshoots or everyday moments, this tool helps you create personal, beautiful photos that make your relationship shine online.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* four */}

                    <div className="container-fluid">
                        <div className="row m2_img_main">
                            <div className="col-md-2"></div>
                            <div className="col-md-5 m1_img_txt2">
                                <h2>Create Unique Valentine's Day Posts with AI Generated Couple Photos</h2>
                                <p>Easily make high quality couple photos with the AI Couple Photo Generator.
                                    These photos are great for Valentine's Day posts, cards, or just celebrating your love in a special way.
                                    With this tool, you can create beautiful pictures without needing a photographer.
                                    Whether you're making a sweet post for social media or designing couple photos using AI , it helps you save your favorite memories in a fun and easy way.
                                    The AI Couple Photoshoot is simple to use. You can quickly make lovely couple photos that show your love.
                                    Share your story online or create personalized cards with just a few clicks!
                                </p>
                            </div>
                            <div className="col-md-4 m1_Img_1">
                                <img src={m12} className="m1Couple_img" />
                                <img src={m41} className="m2Couple_img" />
                            </div>
                        </div>
                    </div>

                    <div className='container-fluid'>
                        <div className="row">
                            <div className='col-md-12 text-center'>
                                <h1>Why Choose Our AI Couple <br /> Photo Generator?</h1>
                            </div>
                        </div>

                        {/* three card HDR Doller and power */}
                        <div className="row card-Home justify-content-center">
                            {/* Feature 1 */}
                            <div className="col-sm-1"></div>
                            <div className="col-md-3">
                                <div className="card_bg rounded-4 text-center p-4 h-100">
                                    <div className="mb-3">
                                        <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                            <strong className='Icon_Affiliate'>HDR</strong>
                                        </div>
                                    </div>
                                    <h5 className="fw-bold">Create Beautiful Memories</h5>
                                    <p className="text-muted mb-0">
                                        Transform your couple photos into stunning AI-generated portraits that capture your unforgettable times together.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="col-md-3">
                                <div className="card_bg rounded-4 text-center p-4 h-100">
                                    <div className="mb-3">
                                        <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                            <FaSackDollar className='Icon_Affiliate' />
                                        </div>
                                    </div>
                                    <h5 className="fw-bold">Affordable Excellence</h5>
                                    <p className="text-muted mb-0">
                                        Get professional quality couple photos at a fraction of the cost of traditional photoshoots, perfect for special occasions.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="col-md-3">
                                <div className="card_bg rounded-4 text-center p-4 h-100">
                                    <div className="mb-3">
                                        <div className="bg-Card bg-gradient text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                            <ImPower className='Icon_Affiliate' />
                                        </div>
                                    </div>
                                    <h5 className="fw-bold">Quick & Easy Process</h5>
                                    <p className="text-muted mb-0">
                                        Generate beautiful couple photos in minutes with our user friendly AI tool, no photography expertise needed.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>

                        {/* Developer identity */}

                        <div className="container-fluid">
                            <div className="row Choose_txt">
                                <div className="col-md-12 text-center">
                                    <h1>See What Our <br /> Customers Say About Us</h1>
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

                        {/* offer card */}

                        <div className="container-fluid" id="Pricing">
                            <div className="row txt_nav">
                                <div className="col-md-12 text-center mb-4">
                                    <h1>Choose the Best Package for Your <br /> Coupleshoot</h1>
                                </div>
                            </div>
                            <div className="container-fluid Three_Cards py-5">
                                <div className="row justify-content-center">
                                    <div className='col-md-1'></div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card h-100 shadow-sm text-white text-center p-4" style={{ borderRadius: "20px", border: "5px solid rgb(120, 153, 253)d", boxShadow: "0 8px 20px rgba(0,0,0,0.1)", transform: "scale(1.2)", background: " #6d91fd" }}>
                                            <h4 className="fw-bold">Professional</h4>
                                            <p className="small mb-2">Perfect for personal branding</p>
                                            <h2 className="fw-bold mb-4">$20</h2>
                                            <button className="btn_Buy_Couple btn-light fw-bold mb-4">Buy Now</button>
                                            <ul className="list-unstyled text-start mx-auto" style={{ maxWidth: 220 }}>
                                                <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 40 Headshots</li>
                                                <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 5+ Different locations</li>
                                                <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 5+ different outfits</li>
                                                <li className="mb-2"><span className="text-white"><IoCheckmarkCircleOutline /></span> 1-2 hours processing time</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-1 "></div>
                                </div>
                            </div>
                        </div>

                        {/* FAQs */}

                        <div className="container-fluid" id="FAQs">

                            <div className="row">
                                <div className="col-md-12 quenstion_txt text-center">
                                    <h1>Couple Photoshoot FAQs</h1>
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
                                <div className="col-md-3">
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
            </div>
        </>
    )
}

export default AI_Couple_Photoshoot
