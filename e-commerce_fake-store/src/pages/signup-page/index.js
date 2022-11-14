import SignupCard from "../../components/signup-card";
import "./index.css";

const Signup = () => {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <SignupCard className="signup" />
    </div>
  );
};
export default Signup;