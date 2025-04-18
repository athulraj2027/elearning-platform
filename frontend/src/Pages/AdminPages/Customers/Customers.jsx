import React from "react";
import AdminTable from "../../../Components/Admin/AdminTable";

const Customers = () => {
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
    { name: "Name", key: "name" },
    { name: "Number of Purchases", key: "numOfPurchases" },
    { name: "Joined At", key: "joinedAt" },
    { name: "Status", key: "status" },
  ];
  const customers = [
    {
      name: "athul",
      numOfPurchases: 5,
      joinedAt: "23 Mar 2024",
      status: "Active",
    },
  ];

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
