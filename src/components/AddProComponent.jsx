import { Plus, X, Check, CircleX } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { toast } from 'sonner';
import { addProject } from '../services/api';

const AddProComponent = ({ fetchprojects }) => {
  const [visible, setVisible] = useState(false);
  const [imgFile, setimgFile] = useState(null);
  const [coverImg, setcoverImg] = useState(null);

  const titleref = useRef(null);
  const descref = useRef(null);
  const linkref = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
  
    const projectdata = {
      title: titleref.current.value,
      desc: descref.current.value,
      link: linkref.current.value,
      covImg: coverImg, // Use covImg as per the backend schema
    };

    console.log(projectdata);

    try {
      const res = await addProject(projectdata);
      console.log(res.status);
      if (res.status === 201) {
        toast('Project added!', {
          className: 'bg-gradient-to-l from-blue-500 to-purple-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
          icon: <Check />,
        });
        fetchprojects(); // Fetch updated projects after adding
      }
    } catch (error) {
      toast.error('Error adding project!', {
        className: 'bg-gradient-to-l from-red-500 to-yellow-500 rounded-lg shadow-lg text-white p-3 flex gap-5 text-lg font-bold',
        icon: <X />,
      });
    }
    setVisible(false);
  };

  const handlefileUpload = async (e) => {
    const file = e.target.files[0];
    setimgFile(file);
    console.log(imgFile);
    const imgBlob = URL.createObjectURL(file);
    setcoverImg(imgBlob);
    console.log(imgBlob);
  };

  return (
    <>
      <div className="h-[5rem] w-full flex flex-row items-center justify-between pr-20">
        <button className="flex justify-center items-center text-white bg-purple-600 p-1 rounded-sm" onClick={() => { setVisible(true); }}>
          Add
          <Plus className="h-3 w-3" />
        </button>
      </div>

      {visible && (
        <div className="h-screen w-screen absolute top-0 left-0 bg-black/15 flex justify-center items-center z-50">
          <div className="h-[65%] w-[30%] flex flex-col bg-white shadow-lg">
            <div className="w-full h-[15%] flex flex-row justify-between px-10 items-center border-2 text-purple-500 bg-white text-xl font-bold shadow-sm">
              <div>Add Project</div>
              <div onClick={() => setVisible(false)}>
                <CircleX />
              </div>
            </div>
            <div className="w-full h-[85%] flex flex-row justify-center items-center">
              <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleAdd}>
                <input
                  type="text"
                  ref={titleref}
                  placeholder="Title"
                  className="p-3 bg-[#f8f8f8] w-full font-bold outline-none focus:border-purple-600"
                  required
                />
                <input
                  type="text"
                  ref={descref}
                  placeholder="Description"
                  className="p-3 bg-[#f8f8f8] w-full font-bold outline-none focus:border-purple-600 mb-3"
                  required
                />
                <input
                  type="text"
                  ref={linkref}
                  placeholder="Project Link"
                  className="p-3 bg-[#f8f8f8] w-full font-bold outline-none focus:border-purple-600 mb-3"
                  required
                />
                <input
                  type="file"
                  onChange={handlefileUpload}
                  accept=".jpeg, .jpg, .png"
                  className="p-3 bg-[#f8f8f8] w-full font-bold outline-none focus:border-purple-600 mb-3"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-green-500 via-red-600 to-purple-700 hover:bg-gradient-to-br font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4"
                   onSubmit={handleAdd}  >
                  Add Project
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProComponent;

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }
