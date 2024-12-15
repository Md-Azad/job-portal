import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import registerAnimation from "../../assets/Animations/login.json";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
const Register = () => {
  const { createUser, user } = useAuth();
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrors(null);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (regex.test(password)) {
      createUser(email, password)
        .then((result) => {
          if (result.user) {
            navigate("/");
          }
        })
        .catch((err) => {
          setErrors(err.message);
        });
    } else {
      setErrors(
        "Your Password Must have a lowercase, an uppercase and one number."
      );
    }
  };

  return (
    <div className=" bg-purple-50 rounded-lg  my-4 w-full md:w-3/4 mx-auto ">
      <h1 className="text-center pt-12 text-3xl font-bold">Register Here</h1>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-4xl">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-[500px] hidden md:inline-block"
          ></Lottie>
        </div>

        <div className="card  w-full  shadow-2xl shadow-black ml-0 md:ml-12">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-900">{errors}</p>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
              />
            </div>
          </form>
          <h1 className="text-center my-4">
            have already an Account?{" "}
            <Link to="/login" className="text-blue-700 font-bold">
              Login
            </Link>{" "}
            Here.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
