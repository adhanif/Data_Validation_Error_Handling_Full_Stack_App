import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TaskCreate() {
  const url = "http://localhost:3000/tasks/create";

  const notify = () => toast.success("The form has been submitted");
  const notifyError = () => toast.error("The form has not submitted");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      priority: "",
      status: "",
    },
  });

  const onSubmit = (data) => {
    axios
      .post(url, data)
      .then(() => {
        notify();
        // reset();
      })
      .catch((err) => {
        notifyError();
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", {
            required: "This is required",
            maxLength: { value: 200, message: "Maximum length is 200" },
          })}
          placeholder="Title"
        />
        <p style={{ color: "red" }}>{errors.title?.message}</p>
        <textarea
          {...register("description", {
            required: "This is required!",
            maxLength: { value: 20, message: "minimum length is 20" },
          })}
          placeholder="Description"
        />
        <p style={{ color: "red" }}>{errors.description?.message}</p>
        <select {...register("priority", { required: "Select the priority!" })}>
          <option value="">Select priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <p style={{ color: "red" }}>{errors.priority?.message}</p>

        <select {...register("status", { required: "Select the status!" })}>
          <option value="">Select priority</option>
          <option value="open">open</option>
          <option value="in progress">in progress</option>
          <option value="resolved">resolved</option>
          <option value="closed">closed</option>
        </select>
        <p style={{ color: "red" }}>{errors.status?.message}</p>
        <input type="submit" />
      </form>
    </>
  );
}
