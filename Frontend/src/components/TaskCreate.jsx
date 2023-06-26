import React from "react";
import { useForm } from "react-hook-form";

export default function TaskCreate() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("title", {
          required: "this is required",
          maxLength: { value: 200, message: "maximum length is 200" },
        })}
        placeholder="Title"
      />
      <textarea
        {...register("description", {
          required: "this is required",
          maxLength: { value: 20, message: "minimum length is 20" },
        })}
        placeholder="Description"
      />
      <select {...register("priority", { required: true })}>
        <option value="">Select priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input {...register("status")} placeholder="Status" />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
