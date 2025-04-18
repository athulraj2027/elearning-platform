import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminTable from "../../../Components/Admin/AdminTable";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const sortOptions = [
    { name: "Number of courses ( Higher to lower )", value: "cou-desc" },
    { name: "Number of courses ( Lower to higher )", value: "cou-asc" },
    { name: "Alphabetical ( Z-A )", value: "alp-desc" },
    { name: "Alphabetical ( A-Z )", value: "alp-asc" },
    { name: "Date created ( Oldest first )", value: "date-asc" },
    { name: "Date created ( Newest first )", value: "date-desc" },
  ];

  const filterOptions = [
    { name: "Active" },
    { name: "Inactive" },
    { name: "Verified" },
    { name: "Unverified" },
  ];
  const columns = [
    { name: "Name", key: "Name" },
    { name: "Number of Courses", key: "NoOfCourses" },
    { name: "Created At", key: "createdAt" },
    { name: "Status", key: "status" },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get("/api/admin/categories");
        console.log(data)
        setCategories(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
  // const categories = [
  //   {
  //     name: "Development",
  //     numOfCourses: 3,
  //     createdAt: "13 mar 2024",
  //     status: "active",
  //   },
  // ];

  return (
    <>
      <AdminTable
        pageName="Categories"
        sort={sortOptions}
        headers={columns}
        data={categories}
        filter={filterOptions}
        addBtn={true}
        editBtn={true}
        activateBtn={true}
        type="category"
      />
    </>
  );
};

export default Categories;
