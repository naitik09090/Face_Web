import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import m1 from "../images/m1.jpg"
import m2 from "../images/m2.jpg"
import m3 from "../images/m3.jpg"
import m4 from "../images/m4.jpg"
import { VscChromeClose } from "react-icons/vsc";

const PhotoRequirements = () => {
    return (
        <div className="container-fluid">
            <div className="container-fluid p-4">
                <div className="row justify-content-center text-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <h3>Photo Requirements</h3>
                        <p>Please upload photos that meet the following requirements:</p>
                        <div className="col-md-2">
                            <a href="/create-headshots5">
                                <VscChromeClose className="Close_Icon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-center justify-content-center">
                    {/* Selfies */}
                    <div className="col-md-1"></div>
                    <div className="col-md-2 mb-4">
                        <div className="card position-relative h-100 border-0">
                            <img src={m1} className="card-img-top rounded" alt="Selfies" />
                            <div className="card-body">
                                <h6 className="text-success fw-bold">Selfies</h6>
                                <p className="small">Use clear, well-lit frontal selfies taken at eye level.</p>
                            </div>
                            <div className="position-absolute top-0 end-0 m-2 fs-4 text-success">✔️</div>
                        </div>
                    </div>

                    {/* Variety */}
                    <div className="col-md-2 mb-4">
                        <div className="card position-relative h-100 border-0">
                            <img src={m2} className="card-img-top rounded" alt="Variety" />
                            <div className="card-body">
                                <h6 className="text-success fw-bold">Variety</h6>
                                <p className="small">Share photos with different outfits and backgrounds.</p>
                            </div>
                            <div className="position-absolute top-0 end-0 m-2 fs-4 text-success">✔️</div>
                        </div>
                    </div>

                    {/* Recency */}
                    <div className="col-md-2 mb-4">
                        <div className="card position-relative h-100 border-0">
                            <img src={m3} className="card-img-top rounded" alt="Recency" />
                            <div className="card-body">
                                <h6 className="text-success fw-bold">Recency</h6>
                                <p className="small">Upload recent photos (last 6 months) with similar hairstyles and lengths.</p>
                            </div>
                            <div className="position-absolute top-0 end-0 m-2 fs-4 text-success">✔️</div>
                        </div>
                    </div>

                    {/* Clarity */}
                    <div className="col-md-2 mb-4">
                        <div className="card position-relative h-100 border-0">
                            <img src={m4} className="card-img-top rounded" alt="Clarity" />
                            <div className="card-body">
                                <h6 className="text-success fw-bold">Clarity</h6>
                                <p className="small">Choose photos from chest or waist up, taken at a comfortable distance.</p>
                            </div>
                            <div className="position-absolute top-0 end-0 m-2 fs-4 text-success">✔️</div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    {/* No Blurry Images */}
                    <div className="row text-center justify-content-center">
                        <div className="col-md-1"></div>
                        <div className="col-md-2 mb-4">
                            <div className="card position-relative h-100 border-0">
                                <img src={m4} className="card-img-top rounded" alt="No Blurry Images" />
                                <div className="card-body">
                                    <h6 className="text-danger fw-bold">No Blurry Images</h6>
                                    <p className="small">No blurry, cropped, or overly dark/bright images.</p>
                                </div>
                                <div className="position-absolute top-0 end-0 m-2 fs-4 text-danger">❌</div>
                            </div>
                        </div>

                        {/* Dress Modestly */}
                        <div className="col-md-2 mb-4">
                            <div className="card position-relative h-100 border-0">
                                <img src={m3} className="card-img-top rounded" alt="Dress Modestly" />
                                <div className="card-body">
                                    <h6 className="text-danger fw-bold">Dress Modestly</h6>
                                    <p className="small">Skip photos with revealing outfits or low necklines.</p>
                                </div>
                                <div className="position-absolute top-0 end-0 m-2 fs-4 text-danger">❌</div>
                            </div>
                        </div>

                        {/* No Accessories */}
                        <div className="col-md-2 mb-4">
                            <div className="card position-relative h-100 border-0">
                                <img src={m2} className="card-img-top rounded" alt="No Accessories" />
                                <div className="card-body">
                                    <h6 className="text-danger fw-bold">No Accessories</h6>
                                    <p className="small">Leave out hats, sunglasses, headphones, or lanyards.</p>
                                </div>
                                <div className="position-absolute top-0 end-0 m-2 fs-4 text-danger">❌</div>
                            </div>
                        </div>

                        {/* Use Front Facing */}
                        <div className="col-md-2 mb-4">
                            <div className="card position-relative h-100 border-0">
                                <img src={m1} className="card-img-top rounded" alt="Use Front Facing" />
                                <div className="card-body">
                                    <h6 className="text-danger fw-bold">Use Front Facing</h6>
                                    <p className="small">Use photos where you're facing forward, not looking away or from the side.</p>
                                </div>
                                <div className="position-absolute top-0 end-0 m-2 fs-4 text-danger">❌</div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoRequirements;
