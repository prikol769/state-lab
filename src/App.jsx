import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const btnStyle = {
    color: "#ffff",
    backgroundColor: "#7950f2",
  };

  const handlePrevStep = () => {
    if (step <= 1) return;
    setStep((prevStep) => prevStep - 1);
  };

  const handleNextStep = () => {
    if (step >= 3) return;
    setStep((prevStep) => prevStep + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={handleToggle} className="close">
        {isOpen ? <>&times;</> : <>&#10003;</>}
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={handlePrevStep} style={btnStyle}>
              Prev
            </button>
            <button onClick={handleNextStep} style={btnStyle}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>404</div>
      )}
    </div>
  );
}

export default App;
