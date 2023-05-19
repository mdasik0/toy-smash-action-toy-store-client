import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Signin = () => {
    const { signInUser, googleSignin, gitHubSignin } = useContext(AuthContext);
    const [error,setError] = useState('')
  
  
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
    const handleGitHubSignIn = () => {
      gitHubSignin()
        .then((result) => {
          const user = result.user;
          console.log(user);
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
    
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
    
            <div className="text-sm">
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
            <input className="bg-red-500 px-3 py-2 text-white hover:bg-slate-300 font-semibold rounded-sm shadow-md active:shadow-inner active:shadow-black duration-300 shadow-black hover:text-red-500  mt-4" type="submit" />
            </div>

        <div className="divider">OR</div>

    
            <div className="mt-6 flex gap-5 mb-3 md:mb-0 justify-center">


              <div
                onClick={handleGoogleSignIn}
                data-tip="Login with Google"
                className="border-2 py-[4px] tooltip rounded-full cursor-pointer mt-3 px-3 text-slate-700 font-bold flex items-center border-slate-300"
              >
                <FaGoogle></FaGoogle>
                <p className="ml-3">Google</p>
              </div>
              <div
               data-tip="Login with Github"
                onClick={handleGitHubSignIn}
                className=" tooltip border-2 py-[4px]  rounded-full cursor-pointer px-3 mt-3 text-slate-700 font-bold flex items-center border-slate-300"
              >
                <FaGithub></FaGithub>
                <p className="ml-3">Github</p>
              </div>
              
            </div>
          </form>
        </div>
      );
};

export default Signin;
