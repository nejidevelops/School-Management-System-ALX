import { Link } from "react-router-dom";
import "./RegisterConfirmation.css";
const RegisterConfirmation = ({ courseName }) => {
  return (
    <main className="reg-confirmation">
      <h2>You are successfully registered for {courseName}!</h2>
      <div className="buttons">
        <Link to="/">Go home</Link>
        <Link to="/browse">Browse more classes</Link>
      </div>
    </main>
  );
};

export default RegisterConfirmation;
