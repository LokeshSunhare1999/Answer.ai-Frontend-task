import LoginImage from "../assets/loginImage.png";
import SignUp from "../component/SignUP";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <img src={LoginImage} alt="login-image" />
      </div>
      <SignUp />
    </div>
  );
};

export default Login;
