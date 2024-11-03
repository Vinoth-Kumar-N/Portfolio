import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import pro2 from '../assets/img/pro2.jpg'
import pro1 from '../assets/img/pro1.jpg'
import pro3 from '../assets/img/pro3.jpg'
import Footer from "../components/Footer";


const Projects = () => {
  const prodata = [
    {
      "title": "Portfolio",
      "desc": "A simple portfolio which is developed using Html, Css, Javascript",
      "covImg": pro1,
      "link": "https://github.com/Vinoth-Kumar-N/Voting-Dapp"
    },
    {
      "title": "Self-coded Portfolio",
      "desc": "A portfolio developed which is developed using React and Tailwind Css with Best Practises",
      "covImg": pro2,
      "link": "https://github.com/Vinoth-Kumar-N/Voting-Dapp"
    },
    {
      "title": "Voting Dapp",
      "desc": "A decentralized application for voting",
      "covImg": pro3,
      "link": "https://github.com/Vinoth-Kumar-N/Voting-Dapp"
    }
  ]

  return (
    <>

      <div className="w-full h-full lg:h-[88vh] flex flex-row flex-wrap gap-8 justify-center items-center bg-[#0B192C] ">
        <div className="w-full h-full flex flex-wrap justify-center items-center gap-10 mt-24 lg:mt-0 p-6">
          {
            prodata.map((data, index) => (
              <ProjectCard title={data.title} desc={data.desc} key={data._id || index} cover={data.covImg} link={data.link} id={data._id} />
            ))
          }
        </div>

      </div >
      <Footer />

    </>

  );
}

export default Projects;


































  // const [prodata, setprodata] = useState([]);
  // const fetchprojects = async () => {
  //   try {
  //     const response = await getProjects();
  //     if (!response) {
  //       console.log("error occuring");
  //     }
  //     setprodata(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.warn(error);
  //     toast('Error', {
  //       className: 'bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
  //       icon: <MessageCircleIcon />,
  //     });
  //   }
  // }
  // if (!prodata) {
  //   return (
  //     <div className="w-full h-[10%] flex justify-center items-center">
  //       <AddProComponent />
  //     </div>
  //   )
  // }
  // useEffect(() => {
  //   fetchprojects();
  // }, []);