import React from 'react'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';
import { LuImagePlus } from "react-icons/lu";


const Create_Headshots5 = () => {
  const fileInputRef = useRef();
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleFileSelect = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log("Dropped files:", files);
  };
  const handleRoutes = () => {
    navigate('/create-headshots4', { state: { gender: gender } });
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
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
        <div className='container-fluid UP_Photos'>
          <div className="row text-center">
            <h1 className="col-md-6 CH2_h1 offset-sm-3">Upload photos</h1>
            <p className="col-md-6 offset-sm-3">Now the fun begins! Select 15 of your best photos. Good photos will result in amazing headshots!</p>
          </div>
        </div>
        <div className="container-fluid Main_5">
          <div className="row justify-content-center">
            <div className='col-md-6'></div>
            <div className="col-md-4">
              <a href="/Requirements" style={{ fontSize: '14px', color: '#007bff' }}>
                <i className="bi bi-card-checklist me-1"><LuImagePlus /></i> Photo Requirements
              </a>
            </div>
            <div className='row'>
              <div className='col-md-4'></div>
              <div
                className="col-md-4 border-dotted border_5 border-dashed text-center py-5 rounded"
                style={{ borderStyle: 'dashed', background: '#f6f9ff' }}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <FaUpload size={32} className="text-dark mb-2" />
                <p className="mb-1">Drag and drop your Photos here</p>
                <p className="text-muted">or</p>
                <button
                  className="btn btn-primary"
                  onClick={() => fileInputRef.current.click()}
                >
                  Browse Files
                </button>
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
        </div>
        <div className="row row_52 justify-content-center text-center">
          <div className="col-md-10">
            <button className="col-md-2 btn_b5" onClick={() => handleRoutes()}>Back</button>
            <a href="create-headshots6">
              <button className="col-md-2 btn_n5">Next</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Create_Headshots5
