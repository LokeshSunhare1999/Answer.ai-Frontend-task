import LoginImage from "../assets/loginImage.png";
import LoginPage from "../component/LoginPage";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src={LoginImage} alt="login-image" />
      </div>
      <LoginPage />
    </div>
  );
};

export default Login;
