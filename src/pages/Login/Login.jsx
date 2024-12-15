import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animations/login.json";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className=" bg-purple-50 rounded-lg  my-4 w-full md:w-3/4 mx-auto ">
      <h1 className="text-center pt-12 text-3xl font-bold">Login Here</h1>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-4xl">
          <Lottie
            animationData={loginAnimation}
            loop={true}
            className="w-[500px] hidden md:inline-block"
          ></Lottie>
        </div>

        <div className="card  w-full  shadow-2xl shadow-black ml-0 md:ml-12">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h1 className="text-center my-4">
            Do not have an Account?{" "}
            <Link to="/register" className="text-blue-700 font-bold">
              Make Account
            </Link>{" "}
            Here.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;