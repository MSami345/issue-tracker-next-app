import Link from "next/link";
import React from "react";
interface User {
  id: number;
  name: string;
  userName: string;
}

const page = async () => {
  // {next:{revalidate:20}}
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        Users page
        {/* <Link href={"/products"}>Products Page</Link> */}
      </div>
      <div>
        Users list:
        <ol>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default page;
