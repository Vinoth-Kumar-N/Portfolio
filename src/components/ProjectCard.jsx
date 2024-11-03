import { Trash, Link } from 'lucide-react'
import React from 'react'
import axios from 'axios';


const ProjectCard = ({ title, desc, cover, id, link }) => {


  return (
    <>
      <div className="w-[300px] h-[320px] flex flex-col items-center shadow-lg cursor-pointer snap-start bg-[#0c1f3d] transition-all duration-700 hover:shadow-[#384B70] hover:scale-105 rounded-lg">
        <img src={cover} alt={title} className="h-[150px] w-[95%] mt-3" />
        <p className="font-bold text-2xl px-6 bg-[#0c1f3d] text-[#F5EFFF]">
          {title}
        </p>
        <p className="text-[#d9cfea] text-sm px-6 m-1 bg-[#0c1f3d]">{desc}</p>
        <div className=" h-[3rem] w-full flex flex-row gap-6 justify-end items-center p-6 bg-[#0c1f3d]" >
          <a href={link} className=" p-2 rounded-md">
            <div className="bg-[#0c1f3d] text-[#bbb]">
              <Link />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default ProjectCard


















  // const handledelete = async (ide) => {
  //   try {
  //     const res = await deletepro(ide);
  //     if (res.status === 200) {
  //       console.log('deleted');
  //       toast('Deleted');
  //       fetchprojects();
  //     }
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }
  // const [titstate, settitstate] = useState(title);
  // const [descstate, setdescstate] = useState(desc);
  // const [linkstate, setlinkstate] = useState(link);
  // const [covimgstate, setcovimgstate] = useState(covimg);
  // const [visible, setvisible] = useState(false);