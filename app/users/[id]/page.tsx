import React from "react";

interface Props {
  params: { id: number };
  searchParams: { sortBy: string };
}
const Users = ({ searchParams: { sortBy }, params: { id } }: Props) => {
  return (
    <>
      <div>Users Detail {id}</div>
    </>
  );
};

export default Users;
