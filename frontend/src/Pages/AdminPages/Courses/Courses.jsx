import React from "react";
import AdminTable from "../../../Components/Admin/AdminTable";

const Courses = () => {
  const sortOptions = [
    { name: "Price ( Higher to lower )", value: "price-desc" },
    { name: "Price ( Lower to higher )", value: "price-asc" },
    { name: "Enrollment ( Higher to lower )", value: "enr-desc" },
    { name: "Enrollment ( Lower to higher )", value: "enr-asc" },
    { name: "Date created ( Oldest first )", value: "date-asc" },
    { name: "Date created ( Newest first )", value: "date-desc" },
  ];

  const filterOptions = [{ name: "Active" }, { name: "Inactive" }];
  const columns = [
    { name: "Name", key: "name" },
    { name: "Tutor", key: "tutor" },
    { name: "Created At", key: "createdAt" },
    { name: "No of enrollment", key: "noOfEnrollment" },
    { name: "Rating", key: "rating" },
    { name: "Status", key: "status" },
  ];
  const courses = [
    {
      name: "web dev",
      tutor: "athul",
      createdAt: "12 dec 2024",
      noOfEnrollment: 23,
      rating: 4.5,
      status: "unverified",
    },
  ];
  return (
    <AdminTable
      pageName="Courses"
      sort={sortOptions}
      headers={columns}
      data={courses}
      filter={filterOptions}
      addBtn={false}
      activateBtn={false}
    />
  );
};

export default Courses;
