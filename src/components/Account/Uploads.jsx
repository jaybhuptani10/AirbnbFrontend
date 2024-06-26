import React, { useState } from "react";
import axios from "axios";
const Uploads = () => {
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const addPhotoByLink = async (ev) => {
    ev.preventDefault();
    const { data: filename } = await axios.post("/api/images/uploadbylink", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  };
  const uploadPhoto = async (ev) => {
    const files = ev.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    await axios
      .post("/api/images/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Response data:", res.data); // Log the response data
        const filenames = res.data;
        if (Array.isArray(filenames)) {
          setAddedPhotos((prev) => {
            return [...prev, ...filenames];
          });
        } else {
          console.error("Filenames is not an array");
        }
      })
      .catch((error) => {
        console.error("Error uploading photos:", error);
      });
  };
  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(ev) => setPhotoLink(ev.target.value)}
          placeholder={"Add using a link .....jpg"}
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 rounded-2xl px-4"
        >
          Add&nbsp;Photo
        </button>
      </div>

      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link, index) => (
            <div key={index}>
              <div className="h-32 flex w-full object-cover position-center">
                {/* {link} */}
                <img
                  className="rounded-2xl w-full h-full object-cover "
                  src={"http://localhost:8000/uploads/" + link}
                  alt=""
                />
              </div>
            </div>
          ))}
        <label className="h-32 border cursor-pointer justify-center bg-transparent flex items-center gap-1  rounded-2xl p-2 text-2xl text-gray-600">
          <input
            type="file"
            multiple
            onChange={uploadPhoto}
            className="hidden"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
          Upload
        </label>
      </div>
    </div>
  );
};

export default Uploads;
