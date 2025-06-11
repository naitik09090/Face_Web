import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Login_Form = () => {
  return (
    <>
      <div className="modal d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold">Log In</h5>
              <div className="col-md-2">
                <a href="/">
                  <button type="button" className="Close_Icon6" aria-label="Close"><VscChromeClose /></button>
                </a>
              </div>
            </div>
            <div className="modal-body">
              <p>Enter your email and password to log in.</p>

              <button className="btn btn-light w-100 mb-3 d-flex align-items-center justify-content-center">
                <FaGoogle className="google_icon" />
                Continue with Google
              </button>

              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 text-muted">or</span>
                <hr className="flex-grow-1" />
              </div>

              <form>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control form-control1"
                    placeholder="hello@example.com"
                  />
                </div>
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <label className="form-label mb-0">Password</label>
                  <a href="#" className="small text-primary">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  className="form-control form-control1 mb-3"
                  placeholder="********"
                />
                <button type="submit" className="btn btn_Login w-100">
                  Log In
                </button>
              </form>

              <div className="text-center mt-3">
                <small>
                  Don't have an account? <a href="#">Create an account</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login_Form
