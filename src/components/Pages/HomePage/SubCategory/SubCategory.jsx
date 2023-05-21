import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-mdasik0.vercel.app/subCategory"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //----------------------------------
  //          All Category Data
  //----------------------------------
  const Marvel = data.filter((d) => d.subCategory === "Marvel");
  const Dc = data.filter((d) => d.subCategory === "Dc");
  const Transformers = data.filter((d) => d.subCategory === "Transformers");
  const StarWars = data.filter((d) => d.subCategory === "Star Wars");
  console.log(Marvel);

  return (
    <div className="md:w-[1280px] text-sm font-bold md:my-6 w-full md:mx-auto mx-3">
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Dc</Tab>
          <Tab>Transformers</Tab>
          <Tab>Star Wars</Tab>
        </TabList>
        {/* marvel data */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              {Marvel.map((Single) => (
                <Tab key={Single._id}>{Single.name}</Tab>
              ))}
            </TabList>
            {Marvel.map((su) => (
              <TabPanel key={su._id}>
                <div className="flex gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div className="flex flex-col justify-center ml-6">
                    <p className="font-semibold text-xl">Name: {su.name}</p>
                    <p className="font-semibold text-sm">Price: ${su.price}</p>
                    <p className="font-semibold text-sm">Rating: {su.rating}</p>
                    <button className="px-4 bg-red-500 text-white hover:bg-slate-800 hover:text-white duration-500 font-semibold text-sm py-2 rounded shadow-xl hover:shadow-inner hover:shadow-slate-500  my-3">
                      <Link to={`/singlePage/${su._id}`}>View Details</Link>
                    </button>
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
                <div className="flex gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div>
                    <p className="font-semibold text-sm">Name: {su.name}</p>
                    <p className="font-semibold text-sm">Price: ${su.price}</p>
                    <p className="font-semibold text-sm">Rating: {su.rating}</p>
                    <button className="btn">
                      <Link to={`/singlePage/${su._id}`}>View Details</Link>
                    </button>
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
                <div className="flex gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div>
                    <p className="font-semibold text-sm">Name: {su.name}</p>
                    <p className="font-semibold text-sm">Price: ${su.price}</p>
                    <p className="font-semibold text-sm">Rating: {su.rating}</p>
                    <button className="btn">
                      <Link to={`/singlePage/${su._id}`}>View Details</Link>
                    </button>
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
                <div className="flex gap-3">
                  <img className="h-[250px] rounded-lg" src={su.img} alt="" />
                  <div>
                    <p className="font-semibold text-sm">Name: {su.name}</p>
                    <p className="font-semibold text-sm">Price: ${su.price}</p>
                    <p className="font-semibold text-sm">Rating: {su.rating}</p>
                    <button className="btn">View Details</button>
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
