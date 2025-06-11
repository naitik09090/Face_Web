import React from "react";
import { useState } from "react";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import man1 from '../images/ragular_Body.jpg';
import woman1 from '../images/ragular_Body2.jpg';


const Create_Headshots1 = () => {
    const [gender, setGender] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSelect = (selectedGender) => {
        setGender(selectedGender);
    };

    const gender1 = location.state?.gender === undefined ? 'man' : location.state.gender;
    const gender3 = location.state?.gender === undefined ? 'woman' : location.state.gender;
    const gender2 = gender || gender1 && gender3;

    const next = () => {
        const selectedGender = getImage();
        console.log(gender2);
        navigate('/create-headshots2', { state: { gender: gender } });

    };

    const getImage = () => {
        if (gender2 === 'man') {
            return man1;
        } else if (gender2 === 'woman') {
            return woman1;
        } else {
            return null;
        }
    }

    return (
        <>
            <div className='container-fluid Main_Headshot'>
                <nav className="d-flex justify-content-between Nav_HeadShots align-items-center p-3 border-bottom">
                    <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5">Smart<span className="text-primary">Shot</span></span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
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
                    <div className="row row1 text-center">
                        <h1 className="col-md-6 CH1_h1 offset-sm-3">What's your gender?</h1>
                        <p className="col-md-6 offset-sm-3">Help us generate the perfect photos</p>
                    </div>

                    <div className="row d-flex icon1 gap-3 text-center">
                        <div className="col-md-4"></div>

                        <button className="col-md-2 man" onClick={() => handleSelect('man')}>
                            <div>
                                <i className="bi bi_m bi-person-fill me-2"><FaMale /> Man</i>
                                <input type="radio" value="man" className="man_r" name="gender" checked={gender === 'man'} />
                            </div>
                        </button>

                        <button className="col-md-2 woman" onClick={() => handleSelect('woman')}>
                            <div>
                                <i className="bi bi_w bi-person-fill me-2"><FaFemale /> Woman</i>
                                <input type="radio" value="woman" className="man_r2" name="gender" checked={gender === 'woman'} />
                            </div>
                        </button>

                        <div className="col-md-4"></div>
                    </div>

                    <div className="row row_12 justify-content-center text-center">
                        <div className="col-md-10">
                            <a href="#">
                                <button className="col-md-2 btn_b">Back</button>
                            </a>
                                <button className="col-md-2 btn_n" onClick={next}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create_Headshots1
