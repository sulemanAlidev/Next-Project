import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: string;
  name: string;
  email: string;
}
interface Props {
  sortBy: string;
}

const UserTable = async ({ sortBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const sorted = sort(users).asc((u) => (sortBy == "name" ? u.name : u.email));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <Link href={`users/?sortBy=name`}>Name</Link>{" "}
            </th>
            <th>
              <Link href={`users/?sortBy=email`}>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user: User) => (
            <tr key={user.id}>
              <td>
                <Link href={`users/${user.id}`}>{user.name}</Link>{" "}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
