import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const ErrorPage = () => {
  useTitle('Error')
  const error = useRouteError();

  console.log(error.status, "this is data", error.data);
  return (
    <div>
      <div className="flex items-center justify-center my-20">
        <div className="">
          <img src="https://media.tenor.com/N8vyVQh1E-gAAAAC/error-loading.gif" alt="" />
          <div className="bottom-20 left-20  ">
          </div>
          <div className=" m-4 text-red-700 text-xl font-extrabold left-5 top-10">
            <div>{error.data}</div>
          </div>
            <Link to="/">
              <button className="btn text-white w-full font-bold text-sm ">
                Go back to home Page
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
