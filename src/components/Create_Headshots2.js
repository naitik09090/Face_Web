import React from 'react'
import { MdBlock } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import man1 from '../images/ragular_Body.jpg';
import woman1 from '../images/ragular_Body2.jpg';


const Create_Headshots2 = () => {
    const [color, setColor] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const handleSelect = (selectedColor) => {
        console.log(location.state?.gender);

        setGender(location.state?.gender);
        setColor(selectedColor);
    };
    const next = () => {
        const selectedColor = getColor();
        // console.log(gender2);
        if (gender === 'man') {
            navigate('/create-headshots3', { state: { gender: gender } });
        } else if (gender === 'woman') {
            navigate('/create-headshots3_2', { state: { gender: gender } });
        }
    };

    const getColor = () => {
        if (color === 'Black') return color;
        if (color === 'Blonde') return color;
        if (color === 'Brown') return color;
        if (color === 'Bald') return color;
        if (color === 'man') return man1;
        if (color === 'woman') return woman1;
        return null;
    };
    return (
        <>
            <div>
                <nav className="d-flex Nav_create_Headshot justify-content-between align-items-center p-3 border-bottom">
                    <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5">Smart<span className="text-primary">Shot</span></span>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        {[0, 0, 2, 3, 4, 5].map((index) => (
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
                        <h1 className="col-md-6 CH2_h1 offset-sm-3">What's your hair color?</h1>
                        <p className="col-md-6 offset-sm-3">Help us generate the perfect photos</p>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className='col-md-3'></div>
                        <div className='man1 col-md-2' onClick={() => handleSelect('Black')}>
                            <div className='black1' >
                                <p className='black_p'>Black</p>
                                <input type="radio" name="gender" className="man_r12" checked={color === 'Black'} />
                            </div>
                        </div>
                        <div className='man2 col-md-2' onClick={() => handleSelect('Blonde')}>
                            <div className='black2'>
                                <p className='black_p2'>Blonde</p>
                                <input type="radio" name="gender" className="man_r12" checked={color === 'Blonde'} />
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    <div className="row icon2 d-flex justify-content-center">
                        <div className='col-md-3'></div>
                        <div className='man3 col-md-2' onClick={() => handleSelect('Brown')}>
                            <div className='Brown3'>
                                <p className='Brown_p'>Brown</p>
                                <input type="radio" name="gender" className="man_r12" checked={color === 'Brown'} />
                            </div>
                        </div>
                        <div className='man4 col-md-2' onClick={() => handleSelect('Bald')}>
                            <div><MdBlock className='block_Icon' />
                                <p className='bald_p'>Bald</p>
                                <input type="radio" name="gender" className="man_r13" checked={color === 'Bald'} />
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                    <div className="row row_22 justify-content-center text-center">
                        <div className="col-md-10">
                            <a href="/create-headshots1">
                                <button className="col-md-2 btn_b2">Back</button>
                            </a>
                                <button className="col-md-2 btn_n2" onClick={next}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create_Headshots2
