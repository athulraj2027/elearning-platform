import React, { useEffect, useState } from "react";
import AdminTable from "../../../Components/Admin/AdminTable";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const sortOptions = [
    { name: "No. of purchases ( Higher to lower )", value: "cou-desc" },
    { name: "Number of purchases ( Lower to higher )", value: "cou-asc" },
    { name: "Alphabetical ( Z-A )", value: "alp-desc" },
    { name: "Alphabetical ( A-Z )", value: "alp-asc" },
    { name: "Date joined ( Oldest first )", value: "date-asc" },
    { name: "Date joined ( Newest first )", value: "date-desc" },
  ];
  const filterOptions = [
    { name: "Active" },
    { name: "Inactive" },
    { name: "Blocked" },
  ];
  const columns = [
    { name: "Name", key: "Name" },
    { name: "Number of Purchases", key: "CoursesEnrolled" },
    { name: "Joined At", key: "JoinedDate" },
    { name: "Status", key: "IsActive" },
  ];

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await axios.get("/api/admin/customers");
        setCustomers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <AdminTable
      pageName="Customers"
      sort={sortOptions}
      headers={columns}
      data={customers}
      filter={filterOptions}
      // addBtn={false}
      // editBtn={false}
      activateBtn={true}
    />
  );
};

export default Customers;
