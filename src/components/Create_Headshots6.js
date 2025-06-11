import React from 'react'
import { FaInfoCircle } from "react-icons/fa";

const Create_Headshots6 = () => {
    return (
        <div className='container-fluid'>
            <nav className="d-flex UP_Photos justify-content-between align-items-center p-3 border-bottom">
                <div className="d-flex align-items-center">
                    <span className="fw-bold fs-5">Smart<span className="text-primary">Shot</span></span>
                </div>

                <div className="d-flex align-items-center gap-3">
                    {[0, 0, 0, 0, 0, 5].map((index) => (
                        <React.Fragment key={index}>
                            <div
                                className={`rounded-circle border d-flex justify-content-center align-items-center`}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    backgroundColor: index === 1 || 5 ? '#fff' : '#e0e0e0',
                                    borderColor: index === 0 ? '#007bff' : '#ccc',
                                }}
                            >
                                {/* circle show */}

                                {index === 1 || 5 && (
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
                <div className='row row_6'>
                    <div className='col-md-12 justify-content-center text-center'>
                        <h1>Please Review Your Information</h1>
                        <p>Review all information carefully. Click 'Edit' to make changes.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ maxWidth: "500px" }}>
                <div className="border rounded p-3 d-flex justify-content-between align-items-center mb-3 shadow-sm">
                    <div>
                        <div className="fw-bold">Gender</div>
                        <div className="text-muted">man</div>
                    </div>
                    <a href="/create-headshots1" className="text-primary text-decoration-none fw-semibold">Edit</a>
                </div>

                <div className="border rounded p-3 d-flex justify-content-between align-items-center mb-3 shadow-sm">
                    <div>
                        <div className="fw-bold">Hair Color</div>
                        <div className="text-muted">Black</div>
                    </div>
                    <a href="/create-headshots2" className="text-primary text-decoration-none fw-semibold">Edit</a>
                </div>

                <div className="border rounded p-3 d-flex justify-content-between align-items-center mb-3 shadow-sm">
                    <div>
                        <div className="fw-bold">Body Type</div>
                        <div className="text-muted">regular</div>
                    </div>
                    <a href="/create-headshots3" className="text-primary text-decoration-none fw-semibold">Edit</a>
                </div>

                <div className="border rounded p-3 d-flex justify-content-between align-items-center mb-3 shadow-sm">
                    <div>
                        <div className="fw-bold">Glasses in Result</div>
                        <div className="text-muted">none</div>
                    </div>
                    <a href="/create-headshots4" className="text-primary text-decoration-none fw-semibold">Edit</a>
                </div>

                <div className="border rounded p-3 d-flex justify-content-between align-items-center mb-4 shadow-sm">
                    <div>
                        <div className="fw-bold">Photos Uploaded</div>
                        <div className="text-muted">9 photos</div>
                    </div>
                    <a href="/create-headshots5" className="text-primary text-decoration-none fw-semibold">Edit</a>
                </div>
            </div>
            <div className="container-fluid">
                <div className='row justify-content-center text-center'>
                    <div className='col-md-12 text_create_6'>
                        <FaInfoCircle className='icon_create_6' />
                        Please review all information carefully. Click 'Edit' to make any changes.
                    </div>
                </div>
            </div>
            <div className="row row_62 justify-content-center text-center">
                <div className="col-md-10">
                    <a href="create-headshots5">
                        <button className="col-md-2 btn_b6">Back</button>
                    </a>
                    <a href="create-headshots6">
                        <button className="col-md-2 btn_n6">Next</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Create_Headshots6
