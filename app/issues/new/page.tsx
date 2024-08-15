"use client";
import { message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  title: string;
  description: string;
}

const IssuesPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
  });

  //handleChange to handle both input and textarea
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/issues", formData);
      message.success("Issue Added Successful");
      setFormData({ title: "", description: "" });
      router.push("/issues");
    } catch (error) {
      message.error(`Error: ${error as Error}`);
    }
  };

  return (
    <div className="max-w-xll flex p-3 items-center justify-center border-cyan-950 m-2">
      <form
        onSubmit={handleSubmit}
        className="border-cyan-850 m-2 p-3 rounded-lg"
        style={{ borderWidth: "1px" }}
      >
        <h2 className="mb-2 font-bold">Add an issue</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            rows={5}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter the description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit new issue
        </button>
      </form>
    </div>
  );
};

export default IssuesPage;
