import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";

const SubCategory = () => {
  const {user} = useContext(AuthContext)
  const [Marvel, setMarvel] = useState([]);
  const [Dc, setDc] = useState([]);
  const [Transformers, setTransformers] = useState([]);
  const [StarWars, setStarWars] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/subCategory/Marvel"
    )
      .then((res) => res.json())
      .then((data) => setMarvel(data));
  }, []);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/subCategory/Dc"
    )
      .then((res) => res.json())
      .then((data) => setDc(data));
  }, []);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/subCategory/Transformers"
    )
      .then((res) => res.json())
      .then((data) => setTransformers(data));
  }, []);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/subCategory/Star%20Wars"
    )
      .then((res) => res.json())
      .then((data) => setStarWars(data));
  }, []);
  //----------------------------------
  //          All Category Data
  //----------------------------------

  const handleViewDetails = () => {
    if(!user){
      return Swal.fire(
        'Redirect To Login page?!',
        'You have to log in first to view details!!',
        'error'
      )
    }
  }

  return (
    <div className="md:w-[1280px] text-sm font-bold md:my-6 w-full md:mx-auto">
      <Tabs className="text-center" forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Dc</Tab>
          <Tab>Transformers</Tab>
          <Tab>Star Wars</Tab>
        </TabList>
        {/* marvel data */}
        <TabPanel>
          <Tabs className="mx-auto" forceRenderTabPanel>
            <TabList>
              {Marvel.map((Single) => (
                <Tab key={Single._id}>{Single.name}</Tab>
              ))}
            </TabList>
            {Marvel.map((su) => (
              <TabPanel key={su._id}>
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div className="flex flex-col text-start gap-2 justify-center ml-6">
                    <p className="font-semibold fontNunito text-xl">
                      Name: {su.name}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Price: ${su.price}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Rating: {su.rating}
                    </p>
                    <Link to={`/singlePage/${su._id}`}>
                      <button onClick={handleViewDetails} className="text-black border-black border-4  bg-red-500 font-semibold hover:text-red-500 hover:bg-slate-200 px-3 py-1 rounded-sm  shadow-xl">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
        {/* dc data */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              {Dc.map((Single) => (
                <Tab key={Single._id}>{Single.name}</Tab>
              ))}
            </TabList>
            {Dc.map((su) => (
              <TabPanel key={su._id}>
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div className="flex flex-col text-start gap-2 justify-center ml-6">
                    <p className="font-semibold fontNunito text-xl">
                      Name: {su.name}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Price: ${su.price}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Rating: {su.rating}
                    </p>
                    <Link to={`/singlePage/${su._id}`}>
                      <button onClick={handleViewDetails} className="text-black border-black border-4  bg-red-500 font-semibold hover:text-red-500 hover:bg-slate-200 px-3 py-1 rounded-sm  shadow-xl">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
        {/* Transformers data */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              {Transformers.map((Single) => (
                <Tab key={Single._id}>{Single.name}</Tab>
              ))}
            </TabList>
            {Transformers.map((su) => (
              <TabPanel key={su._id}>
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div className="flex flex-col text-start gap-2 justify-center ml-6">
                    <p className="font-semibold fontNunito text-xl">
                      Name: {su.name}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Price: ${su.price}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Rating: {su.rating}
                    </p>
                    <Link to={`/singlePage/${su._id}`}>
                      <button onClick={handleViewDetails} className="text-black border-black border-4  bg-red-500 font-semibold hover:text-red-500 hover:bg-slate-200 px-3 py-1 rounded-sm  shadow-xl">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
        {/* Star wars data */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              {StarWars.map((Single) => (
                <Tab key={Single._id}>{Single.name}</Tab>
              ))}
            </TabList>
            {StarWars.map((su) => (
              <TabPanel key={su._id}>
                <div className="flex items-center justify-center gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div className="flex flex-col text-start gap-2 justify-center ml-6">
                    <p className="font-semibold fontNunito text-xl">
                      Name: {su.name}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Price: ${su.price}
                    </p>
                    <p className="font-semibold fontNunito text-md">
                      Rating: {su.rating}
                    </p>
                    <Link to={`/singlePage/${su._id}`}>
                      <button onClick={handleViewDetails} className="text-black border-black border-4  bg-red-500 font-semibold hover:text-red-500 hover:bg-slate-200 px-3 py-1 rounded-sm  shadow-xl">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategory;
