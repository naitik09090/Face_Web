
const Home = () => {
  return (
    <div>
      {/* <div className="d-flex align-items-center px-3 py-2 bg-white shadow-sm rounded-pill justify-content-between" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="d-flex align-items-center gap-2">
        {[...Array(totalSteps)].map((_, i) => {
          const stepNumber = i + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <React.Fragment key={i}>
              <div
                className={`rounded-circle d-flex align-items-center justify-content-center step-circle ${
                  isCompleted ? 'bg-primary text-white' : isActive ? 'border border-primary text-primary' : 'border text-secondary'
                }`}
              >
                <div className="circle-inner" />
              </div>
              {stepNumber !== totalSteps && <div className={`step-line ${stepNumber < currentStep ? 'bg-primary' : ''}`} />}
            </React.Fragment>
          );
        })}
      </div>
      <button className="btn btn-outline-light text-dark border rounded-pill px-3 py-1 fw-bold">Log in</button>
    </div> */}
   
 {/* const [step, setStep] = useState(1);

<div className="container mt-5">
      <StepProgress currentStep={step} />
      <div className="mt-3 d-flex gap-2">
        <button onClick={() => setStep(Math.max(step - 1, 1))} className="btn btn-secondary">Prev</button>
        <button onClick={() => setStep(Math.min(step + 1, 6))} className="btn btn-primary">Next</button>
      </div>
    </div> */}
    </div>
  )
}

export default Home
