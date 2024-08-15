import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div className="flex flex-col space-y-3 items-start p-3">
      <p>IssuesPage</p>
      <button>
        <Link
          className="p-2 bg-gray-800 text-white hover:bg-gray-600 rounded-xl"
          href="/issues/new"
        >
          Add Issue
        </Link>
      </button>
    </div>
  );
};

export default IssuesPage;
