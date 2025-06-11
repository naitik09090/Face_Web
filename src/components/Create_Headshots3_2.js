import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import slimBody2 from '../images/slimBody2.jpg'
import ragular_Body2 from '../images/ragular_Body2.jpg'
import large_Body2 from '../images/large_Body2.jpg'

const Create_Headshots3 = () => {
    const [selected, setSelected] = useState("Regular Body");
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setGender(location.state.gender);
    }, []);

    const back = () => {
        navigate('/create-headshots2', { state: { gender: gender } });
    }
    const handleRoutes = () => {
        navigate('/create-headshots4', { state: { gender: gender } });
    }

    const options = [
        {
            label: "Slim Body",
            value: "Slim Body",
            img: slimBody2
        },
        {
            label: "Regular Body",
            value: "Regular Body",
            img: ragular_Body2
        },
        {
            label: "Large Body",
            value: "Large Body",
            img: large_Body2
        }
    ];


    return (
        <>
            <div className='container-fluid'>
                <nav className="d-flex Nav_crreate_Headshot justify-content-between align-items-center p-3 border-bottom">
                    <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5">Smart<span className="text-primary">Shot</span></span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        {[0, 0, 0, 3, 4, 5].map((index) => (
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
                        <h1 className="col-md-6 CH2_h1 offset-sm-3">What's your body type?</h1>
                        <p className="col-md-6 offset-sm-3">Help us generate the perfect photos</p>
                    </div>
                </div>
                <div className="container-fluid icon_3 mt-4">
                    <div className="row g-3">
                        <div className="col-md-2"></div>
                        {options.map((opt) => (
                            <div className="col-md-3" key={opt.value}>
                                <label
                                    className={`card card3 h-100 text-center p-2 ${selected === opt.value ? "border-primary border-3" : "border"
                                        }`}
                                    onClick={() => setSelected(opt.value)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img
                                        src={opt.img}
                                        alt={opt.label}
                                        className="card-img-top img_3"
                                        style={{ height: "300px", objectFit: "cover" }}
                                    />
                                    <div className="col-md-3 card-body">
                                        <h6 className="card-title">{opt.label}</h6>
                                        <input
                                            type="radio"
                                            name="bodyType"
                                            value={opt.value}
                                            checked={selected === opt.value}
                                            onChange={() => setSelected(opt.value)}
                                            className="form-check-input d-none"
                                        />
                                    </div>
                                </label>
                            </div>
                        ))}
                        <div className="col-md-3"></div>
                    </div>
                </div>
                <div className="row row_32 justify-content-center text-center">
                    <div className="col-md-10">
                        <button className="col-md-2 btn_b3" onClick={() => back()}>Back</button>
                        <button className="col-md-2 btn_n3" onClick={() => handleRoutes()}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create_Headshots3
