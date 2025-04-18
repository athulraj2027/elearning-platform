import React from "react";
import AdminTable from "../../../Components/Admin/AdminTable";
const Categories = () => {
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
    { name: "Name", key: "name" },
    { name: "Number of Courses", key: "numOfCourses" },
    { name: "Created At", key: "createdAt" },
    { name: "Status", key: "status" },
  ];
  const categories = [
    {
      name: "Development",
      numOfCourses: 3,
      createdAt: "13 mar 2024",
      status: "active",
    },
  ];

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
      />
    </>
  );
};

export default Categories;
