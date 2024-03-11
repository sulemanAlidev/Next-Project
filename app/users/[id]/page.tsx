import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
  searchParams: { sortBy: string };
}
const Users = ({ searchParams: { sortBy }, params: { id } }: Props) => {
  if (id > 50) notFound();
  return (
    <>
      <div>Users Detail {id}</div>
    </>
  );
};

export default Users;
