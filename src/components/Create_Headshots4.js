import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import nosunglasses from "../images/no-glasses.png"
import sunglasses from "../images/sunglasses.png"

const Create_Headshots4 = () => {
    const [googles, setGoogles] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setGender(location.state.gender);
    }, []);


    const handleSelect = (selectedGender) => {
        setGoogles(selectedGender);
    };

    const handleRoutes = () => {
        if (gender === 'man') {
            navigate('/create-headshots3', { state: { gender: gender } });
        } else {
            navigate('/create-headshots3_2', { state: { gender: gender } });
        }
    }

    return (
        <>
            <div className="container-fluid">
                <nav className="d-flex Nav_Head_4 justify-content-between align-items-center p-3 border-bottom">
                    <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5">Smart<span className="text-primary">Shot</span></span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        {[0, 0, 0, 0, 4, 5].map((index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`rounded-circle border d-flex justify-content-center align-items-center`}
                                    style={{
                                        width: '24px',
                                        height: '24px',
                                        backgroundColor: index === 0 ? '#fff' : '#e0e0e0',
                                        borderColor: index === 0 ? '#007bff' : '#ccc',
                                    }}
                                >
                                    {/* circle show */}

                                    {index === 0 && (
                                        <div
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                backgroundColor: '#007bff',
                                            }}
                                        />
                                    )}
                                </div>
                                {/* side line show */}

                                {index < 5 && (
                                    <div style={{ width: '40px', height: '2px', backgroundColor: index === 0 ? '#007bff' : '#ccc' }}></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <a href="/login">
                        <button className="btn btn-outline-light border rounded-pill fw-bold text-dark px-4">
                            Log in
                        </button>
                    </a>
                </nav>
                <div className='container-fluid'>
                    <div className="row row2 text-center">
                        <h1 className="col-md-6 CH2_h1 offset-sm-3">Do you wear glasses?</h1>
                        <p className="col-md-6 offset-sm-3">Help us generate the perfect photos</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row icon2 justify-content-center">
                        <div className="col-md-2"></div>
                        <div className='man41 col-md-2' onClick={() => handleSelect('sunglasses')}>
                            <div className='no_sunglasses'><img src={nosunglasses} className="sunglasses_4" />
                                <p className='black_p4'>I don't wear glasses</p>
                                <input type="radio" name="gender" className="man_r124" checked={googles === 'sunglasses'} />
                            </div>
                        </div>
                        <div className='man41 col-md-2' onClick={() => handleSelect('crack_sunglasses')}>
                            <div className='no_sunglasses'><img src={sunglasses} className="sunglasses_4" />
                                <p className='black_p4'>I don't wear glasses</p>
                                <input type="radio" name="gender" className="man_r124" checked={googles === 'crack_sunglasses'} />
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="row row_41 justify-content-center text-center">
                            <div className="col-md-5 row_4">
                                <p className="p4">Note: Avoid uploading photos with glasses if you don't want them in your AI Headshot images.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row_42 justify-content-center text-center">
                    <div className="col-md-10">
                        <button className="col-md-2 btn_b4" onClick={() => handleRoutes()}>Back</button>
                        <a href="/create-headshots5">
                            <button className="col-md-2 btn_n4">Next</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create_Headshots4
