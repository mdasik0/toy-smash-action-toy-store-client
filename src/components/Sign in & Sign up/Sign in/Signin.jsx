import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaLock, FaRegEnvelope } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";

const Signin = () => {
  const { signInUser, googleSignin } = useContext(AuthContext);
  useTitle("SignIn");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user.photoURL);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error));
  };
  return (
    <div className="md:pb-6 md:pt-10 px-3 mx-0 md:mx-28 flex justify-center">
      <form
        onSubmit={handleSubmit}
        style={{ width: "450px" }}
        className=""
        action=""
      >
        <h3 className="text-2xl font-extrabold mb-4">Sign in</h3>

        
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <label className="input-group">
            <span><FaRegEnvelope></FaRegEnvelope></span>
            <input
              type="email"
              name="email"
              placeholder="input your email here"
              className="input input-bordered"
              required
            />
          </label>
        </div>
        {/* email end */}
        {/* password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <label className="input-group">
            <span><FaLock></FaLock></span>
            <input
              type="password"
              name="password"
              placeholder="input your password here"
              className="input input-bordered"
              required
            />
          </label>
        </div>
        {/* password end */}

        <div className="text-sm mt-3">
          {
            <p className="text-red-500 font-bold" id="error">
              {error.message}
            </p>
          }
          Don&apos;t have an account ?{" "}
          <Link
            className="text-blue-600 underline underline-offset-2"
            to="/signUp"
          >
            Sign up
          </Link>
        </div>

        <div>
          <input
            className="text-black border-2 border-black px-3 rounded-full mt-3 hover:bg-slate-900 duration-500 hover:text-white py-[6px]"
            type="submit"
            value='Sign In'
          />
        </div>

        <div className="divider">OR</div>

        <div className="mt-6 flex gap-5 mb-3 md:mb-0 justify-center">
        <div
            onClick={handleGoogleSignIn}
            data-tip="Login with Google"
            className="tooltip text-black border-2 border-black px-3 rounded-full mt-3 hover:bg-slate-900 duration-500 hover:text-white py-[6px] flex items-center"
          >
            <FaGoogle></FaGoogle>
            <p className="ml-3">Google</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
