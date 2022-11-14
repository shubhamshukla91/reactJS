import LoginCard from "../../components/login-card";
import "./index.css";

const Login = () => {
  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      <LoginCard className="login" />
    </div>
  );
};
export default Login;