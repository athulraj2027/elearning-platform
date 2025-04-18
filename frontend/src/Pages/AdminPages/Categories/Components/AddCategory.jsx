import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UseAppContext } from "../../../../Context/AppContext/AppContext";

const AddCategory = () => {
  const { setModal } = UseAppContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  //   Handling image preview

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!validTypes.includes(file.type)) {
      toast.error("Only JPG, JPEG, PNG, or WEBP files are allowed.");
      return;
    }

    if (file.size > maxSize) {
      toast.error("File size should not exceed 2MB.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handling form submission

  const formSubmitHandler = async () => {
    console.log("hi");
    if (!name || !description || !image) {
      console.log("hi");
      return toast.error("Credentials missing");
    }
    console.log("regex checking");
    const nameRegex = /^[a-zA-Z0-9 _-]{3,30}$/;
    const descriptionRegex = /^.{10,300}$/;

    if (!nameRegex.test(name)) return toast.error("Invalid syntax for name");
    if (!descriptionRegex.test(description))
      return toast.error("Invalid syntax for description");

    try {
      console.log("in the try section");
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      const { data } = await axios.post(
        "/api/admin/categories/add",
        formData,
        config
      );
      console.log("complete");

      console.log("Response of creating category : ", data);
      setModal(false);
      toast.success("Category created successfully");
      return;
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.message) {
        return toast.error(err.response.data.message);
      } else {
        return toast.error("Something went wrong");
      }
    }
  };

  return (
    <div>
      <h1 className="text-md sm:text-xl text-violet-500 font-bold">
        Add Category
      </h1>

      {/* Add name field */}

      <label className="text-xs text-gray-700 sm:text-sm">
        Name of the category
      </label>
      <br />
      <input
        type="text"
        placeholder="Name"
        className="p-1 focus:outline-none border border-gray-200 rounded-md mb-3"
        onChange={(e) => setName(e.target.value)}
        // value={name}
      />
      <br />

      {/* Add description */}

      <label className="text-xs text-gray-700 sm:text-sm">
        Add description
      </label>
      <br />
      <textarea
        name="description"
        className="h-40 w-60 border border-gray-200"
        placeholder="Description"
        id=""
        onChange={(e) => setDescription(e.target.value)}
        // value={description}
      />
      <br />

      {/* Add Image field */}

      <label className="text-xs text-gray-700 sm:text-sm">Add Image</label>
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
      />
      <br />

      {/* Preview field */}

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-4 w-40 h-40 object-cover rounded-md border"
        />
      )}
      <br />

      {/* Submit button */}

      <button
        className="bg-green-600 text-white p-2 rounded-md my-3 cursor-pointer"
        onClick={formSubmitHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default AddCategory;
