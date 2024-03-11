import React from "react";
import UserTable from "./userTable";

interface Props {
  searchParams: { sortBy: string };
}
const Users = ({ searchParams: { sortBy } }: Props) => {
  console.log("queryParams", sortBy);
  return (
    <>
      <div>Users Table</div>
      <UserTable sortBy={sortBy} />
    </>
  );
};

export default Users;
