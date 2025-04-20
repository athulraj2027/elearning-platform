import React, { useState } from "react";
import AddCategory from "../../Pages/AdminPages/Categories/Components/AddCategory";
import { UseAppContext } from "../../Context/AppContext/AppContext";

const AdminTable = (props) => {
  const {modal, setModal} = UseAppContext()
  const [modalType, setModalType] = useState();
  const [modalAction, setModalAction] = useState();
  const componentMap = {
    category: {
      add: AddCategory,
    },
  };

  const DynamicComponent = componentMap[modalType]?.[modalAction] || null;

  const handleModal = (type, action) => {
    setModalType(type);
    setModalAction(action);
  };
  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row justify-between">
        <h1 className="text-xl sm:text-2xl text-violet-500 font-bold">
          {props.pageName}
        </h1>
        <select name="Sort" id="" className="w-[200px]">
          <option value="">--Sort by--</option>
          {props.sort.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <select name="Filter" id="" className="w-[100px]">
          <option value="">--Filter by--</option>
          {props.filter.map((item, index) => (
            <option key={index} value={item.name.toLowerCase()}>
              {item.name}
            </option>
          ))}
        </select>
        {props.addBtn && (
          <button
            className="float-right bg-violet-500 p-2 w-[150px] rounded-md text-white cursor-pointer"
            onClick={() => {
              setModal(true);
              handleModal(props.type, "add");
            }}
          >
            Add {props.pageName}
          </button>
        )}
      </div>
      <table className="w-full overflow-auto mt-4 text-sm sm:text-md  p-3 table-fixed">
        <thead>
          <tr className="h-[40px]  text-violet-400">
            <th className="w-[120px]">SI.No</th>
            {props.headers.map((header, index) => (
              <th key={index} className="w-[120px] text-violet-400">
                {header.name}
              </th>
            ))}
            <th className=" text-violet-400 w-[120px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, index) => {
            return (
              <tr className="h-[40px] border-t border-t-gray-500" key={index}>
                <td className="text-center">{index + 1}</td>
                {props.headers.map((header, colIndex) => (
                  <td key={colIndex} className="text-center">
                    {data[header.key] ?? "--"}
                  </td>
                ))}
                <td className="text-center flex flex-wrap gap-2 justify-center items-center">
                  {props.activateBtn && (
                    <button className="px-3 py-1 rounded-md text-white bg-green-500">
                      Activate
                    </button>
                  )}
                  {props.editBtn && (
                    <button className="px-3 py-1 rounded-md text-white bg-orange-500">
                      Edit
                    </button>
                  )}
                  {/* <button className="px-3 py-1 rounded-md text-white bg-red-500">
                    Delete
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {modal && DynamicComponent && (
        <div className="inset-0 z-50 w-full h-full fixed top-0 right-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-md overflow-auto">
            <DynamicComponent />
            <button
              className="bg-red-500 text-white p-2 rounded-md"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTable;
