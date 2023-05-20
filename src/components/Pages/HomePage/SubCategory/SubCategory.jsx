import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const SubCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/subCategory")
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
  console.log(Marvel)

  return <div>
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
        {
            Marvel.map(Single => <Tab key={Single._id}>{Single.name}</Tab>)
        }
    </TabList>
    {
        Marvel.map(su => <TabPanel  key={su._id}>
            <div className='flex gap-3'>

            <img className='h-[250px] rounded-lg' src={su.img} alt="" />
            <div>
            <p className='font-semibold text-sm'>Name: {su.name}</p>
            <p className='font-semibold text-sm'>Price:  ${su.price}</p>
            <p className='font-semibold text-sm'>Rating: {su.rating}</p>
            <button className='btn'>
                <Link to={`/singlePage/${su._id}`}>View Details</Link>
            </button>
            </div>
            </div>
            
        </TabPanel>)
    }
    </Tabs>
    </TabPanel>
    {/* dc data */}
    <TabPanel>
    <Tabs forceRenderTabPanel>
    <TabList>
        {
            Dc.map(Single => <Tab key={Single._id}>{Single.name}</Tab>)
        }
    </TabList>
    {
        Dc.map(su => <TabPanel  key={su._id}>
            <div className='flex gap-3'>

            <img className='h-[250px] rounded-lg' src={su.img} alt="" />
            <div>
            <p className='font-semibold text-sm'>Name: {su.name}</p>
            <p className='font-semibold text-sm'>Price:  ${su.price}</p>
            <p className='font-semibold text-sm'>Rating: {su.rating}</p>
            <button className='btn'>
                <Link to={`/singlePage/${su._id}`}>View Details</Link>
            </button>
            </div>
            </div>
            
        </TabPanel>)
    }
    </Tabs>
    </TabPanel>
    {/* Transformers data */}
    <TabPanel>
    <Tabs forceRenderTabPanel>
    <TabList>
        {
            Transformers.map(Single => <Tab key={Single._id}>{Single.name}</Tab>)
        }
    </TabList>
    {
        Transformers.map(su => <TabPanel  key={su._id}>
            <div className='flex gap-3'>

            <img className='h-[250px] rounded-lg' src={su.img} alt="" />
            <div>
            <p className='font-semibold text-sm'>Name: {su.name}</p>
            <p className='font-semibold text-sm'>Price:  ${su.price}</p>
            <p className='font-semibold text-sm'>Rating: {su.rating}</p>
            <button className='btn'>
                <Link to={`/singlePage/${su._id}`}>View Details</Link>
            </button>
            </div>
            </div>
            
        </TabPanel>)
    }
    </Tabs>
    </TabPanel>
    {/* Star wars data */}
    <TabPanel>
    <Tabs forceRenderTabPanel>
    <TabList>
        {
            StarWars.map(Single => <Tab key={Single._id}>{Single.name}</Tab>)
        }
    </TabList>
    {
        StarWars.map(su => <TabPanel  key={su._id}>
            <div className='flex gap-3'>

            <img className='h-[250px] rounded-lg' src={su.img} alt="" />
            <div>
            <p className='font-semibold text-sm'>Name: {su.name}</p>
            <p className='font-semibold text-sm'>Price:  ${su.price}</p>
            <p className='font-semibold text-sm'>Rating: {su.rating}</p>
            <button className='btn'>View Details</button>
            </div>
            </div>
            
        </TabPanel>)
    }
    </Tabs>
    </TabPanel>
    </Tabs>
  </div>;
};

export default SubCategory;
