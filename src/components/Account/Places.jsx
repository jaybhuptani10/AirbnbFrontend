import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Uploads from "./Uploads";

const Places = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkin, setChekin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathroom, setBathroom] = useState(1);
  const [redirect, setRedirect] = useState("");
  const handleCbClick = (ev) => {
    const { checked, name } = ev.target;
    if (checked) {
      setPerks([...perks, name]);
    } else {
      setPerks([...perks.filter((selectedName) => selectedName !== name)]);
    }
  };
  const addNewPlaces = async (ev) => {
    ev.preventDefault();

    await axios.post("http://localhost:3001/places", {
      title,
      address,
      description,
      perks,
      extraInfo,
      checkin,
      checkout,
      maxGuests,
      bedrooms,
      beds,
      bathroom,
    });
  };
  setRedirect("/account/places");

  return (
    <>
      {action !== "new" && (
        <div className="text-center ">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/Account/Places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add new Places
          </Link>
        </div>
      )}
      {action === "new" && (
        <div className="p-4">
          <form onSubmit={addNewPlaces}>
            <h2 className="text-xl mt-4">Title</h2>
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="title"
            />
            <h2 className="text-xl mt-4">Address</h2>
            <input
              type="text"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              placeholder="address"
            />
            <h2 className="text-xl mt-4">Photos</h2>
            <p>more = better</p>
            <Uploads />
            <h2 className="text-xl mt-4">Description</h2>
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            <h2 className="text-xl mt-4">Perks</h2>
            <p className="text-gray-500 text sm">
              Select all the perks that apply
            </p>
            <div className="grid mt-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              <div>
                <h2>Sceneic Views</h2>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Garden View"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5.996 9c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707C11.83 8.253 12.577 9 13.991 9c1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 8.253 20.585 9 22 9V7c-.563 0-.804-.217-1.295-.707C20.159 5.747 19.411 5 17.996 5s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 5.747 11.407 5 9.993 5s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 5.747 3.413 5 2 5v2c.561 0 .801.217 1.291.707C3.836 8.253 4.583 9 5.996 9zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 13.253 20.585 14 22 14v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 10.747 11.407 10 9.993 10s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 10.747 3.413 10 2 10v2c.561 0 .801.217 1.291.707C3.836 13.253 4.583 14 5.996 14zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 18.253 20.585 19 22 19v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 15.747 11.407 15 9.993 15s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 15.747 3.413 15 2 15v2c.561 0 .801.217 1.291.707C3.836 18.253 4.583 19 5.996 19z" />
                  </svg>
                  <span>Garden View</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Lake View"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5.996 9c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707C11.83 8.253 12.577 9 13.991 9c1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 8.253 20.585 9 22 9V7c-.563 0-.804-.217-1.295-.707C20.159 5.747 19.411 5 17.996 5s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 5.747 11.407 5 9.993 5s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 5.747 3.413 5 2 5v2c.561 0 .801.217 1.291.707C3.836 8.253 4.583 9 5.996 9zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 13.253 20.585 14 22 14v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 10.747 11.407 10 9.993 10s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 10.747 3.413 10 2 10v2c.561 0 .801.217 1.291.707C3.836 13.253 4.583 14 5.996 14zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 18.253 20.585 19 22 19v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 15.747 11.407 15 9.993 15s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 15.747 3.413 15 2 15v2c.561 0 .801.217 1.291.707C3.836 18.253 4.583 19 5.996 19z" />
                  </svg>
                  <span>Lake view</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center"
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Mountain View"
                    onChange={handleCbClick}
                  />
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M3 20h18L14.079 5.388a2.3 2.3 0 00-4.158 0L3 20z" />
                    <path d="M7.5 11l2 2.5L12 11l2 3 2.5-2" />
                  </svg>
                  <span>Mountain view</span>
                </label>
              </div>
              <div>
                <h2>Bathroom</h2>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Hair Drier"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M22 9a4.32 4.32 0 01-2.22-.55A3.4 3.4 0 0018 8V7a4.32 4.32 0 012.22.55A3.4 3.4 0 0022 8m0-2a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 5v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 7m0 3a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 9v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 11m-12 1.73A70.39 70.39 0 0017 11V4s-6.5-2-9.5-2a5.5 5.5 0 00-1.38 10.82L7 19h1a3 3 0 001.46 2.33A3.15 3.15 0 0111 24h1a4.12 4.12 0 00-1.91-3.45C9.39 20 9 19.63 9 19h1m-2.5-9A2.5 2.5 0 1110 7.5 2.5 2.5 0 017.5 10z" />
                  </svg>
                  <span>Hair Drier</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Shampoo"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 256 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M64 0C50.7 0 40 10.7 40 24s10.7 24 24 24c4.4 0 8 3.6 8 8v64.9c0 12.2-7.2 23.1-17.2 30.1C21.7 174.1 0 212.5 0 256v192c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V256c0-43.5-21.7-81.9-54.8-105-10-7-17.2-17.9-17.2-30.1V56c0-4.4 3.6-8 8-8 13.3 0 24-10.7 24-24S205.3 0 192 0H64zm64 382c-26.5 0-48-20.1-48-45 0-16.8 22.1-48.1 36.3-66.4 6-7.8 17.5-7.8 23.5 0 14.1 18.3 36.2 49.6 36.2 66.4 0 24.9-21.5 45-48 45z" />
                  </svg>
                  <span>Shampoo</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Hot Water"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M19 5c-1.11 0-2 .89-2 2v6.76c-.64.57-1 1.39-1 2.24 0 1.66 1.34 3 3 3s3-1.34 3-3c0-.85-.36-1.67-1-2.23V7c0-1.11-.89-2-2-2m0 1c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1M8 3.54l-.75.84S5.97 5.83 4.68 7.71 2 11.84 2 14c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.16-1.39-4.41-2.68-6.29S8.75 4.38 8.75 4.38L8 3.54m0 3.13c.44.52.84.95 1.68 2.17C10.89 10.6 12 12.84 12 14c0 2.22-1.78 4-4 4s-4-1.78-4-4c0-1.16 1.11-3.4 2.32-5.16C7.16 7.62 7.56 7.19 8 6.67z" />
                  </svg>
                  <span>Hot Water</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Shower Gel"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.1-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64 64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-128c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64 64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm0-128c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64 64c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm32-32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
                  </svg>
                  <span>Shower Gel</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Bathtub"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M21 14v1c0 1.91-1.07 3.57-2.65 4.41L19 22h-2l-.5-2h-9L7 22H5l.65-2.59A4.987 4.987 0 013 15v-1H2v-2h18V5a1 1 0 00-1-1c-.5 0-.88.34-1 .79.63.54 1 1.34 1 2.21h-6a3 3 0 013-3h.17c.41-1.16 1.52-2 2.83-2a3 3 0 013 3v9h-1m-2 0H5v1a3 3 0 003 3h8a3 3 0 003-3v-1z" />
                  </svg>
                  <span>Bathtub</span>
                </label>
              </div>
              <div>
                <h2>Bedroom & Laundry</h2>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Hangers"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M12 4a3.5 3.5 0 00-3.5 3.5h2A1.5 1.5 0 0112 6a1.5 1.5 0 011.5 1.5A1.5 1.5 0 0112 9c-.55 0-1 .45-1 1v1.75L2.4 18.2A1 1 0 003 20h18a1 1 0 00.6-1.8L13 11.75v-.9a3.5 3.5 0 002.5-3.35A3.5 3.5 0 0012 4m0 9.5l6 4.5H6z" />
                  </svg>
                  <span>Hangers</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Extra Pillows and Blankets"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 640 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192V64zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288v384zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160z" />
                  </svg>
                  <span>Extra Pillows and Blanket</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input type="checkbox" name="Iron" onChange={handleCbClick} />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M21 6c-1.66 0-3 1.34-3 3v4c0 .55-.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-.55.45-1 1-1h1V6h-1z" />
                  </svg>
                  <span>Iron</span>
                </label>
              </div>
              <div>
                <h2>Entertainment</h2>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input type="checkbox" name="TV" onChange={handleCbClick} />
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM13.991 3l.024.001a1.46 1.46 0 01.538.143.757.757 0 01.302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 01-.143.538.758.758 0 01-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 01-.538-.143.758.758 0 01-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 01.143-.538.758.758 0 01.254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
                  </svg>
                  <span>Tv</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Speakers"
                    onChange={handleCbClick}
                  />
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.5 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5zm-2 2a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm-6 1.5A.5.5 0 015 6v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm8 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm-10 1A.5.5 0 013 7v2a.5.5 0 01-1 0V7a.5.5 0 01.5-.5zm12 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0V7a.5.5 0 01.5-.5z"
                    />
                  </svg>
                  <span>Speakers</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Games"
                    onChange={handleCbClick}
                  />
                  <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                    <path
                      fill="currentColor"
                      d="M15.47 11.293a1 1 0 10-1.415 1.414 1 1 0 001.415-1.414zM16.177 9.172a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414zM19.712 11.293a1 1 0 10-1.414 1.414 1 1 0 001.414-1.414zM16.177 13.414a1 1 0 111.414 1.415 1 1 0 01-1.414-1.415zM6 13H4v-2h2V9h2v2h2v2H8v2H6v-2z"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 5a7 7 0 000 14h10a7 7 0 100-14H7zm10 2H7a5 5 0 000 10h10a5 5 0 000-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Games</span>
                </label>
              </div>
              <div>
                <h2>Heating & Cooloing</h2>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input type="checkbox" name="Fans" onChange={handleCbClick} />
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                  >
                    <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 00-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 00-.491-.454A5.976 5.976 0 018 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 00.57-.361 6.004 6.004 0 00-2.53-3.823 9.02 9.02 0 01-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254zm-.137.728a2.007 2.007 0 01-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 002.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11zM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 008 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 01-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02zM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 00-.568.359 6.003 6.003 0 002.525 3.839 8.37 8.37 0 01.148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 016 8zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 00-.594-.312 5.987 5.987 0 00-2.06 4.106c.206-.074.418-.14.637-.199zM8 9a1 1 0 100-2 1 1 0 000 2z" />
                    <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
                  </svg>
                  <span>Fans</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input type="checkbox" name="AC" onChange={handleCbClick} />
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="M6 12H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 8h12M18.3 17.7a2.5 2.5 0 01-3.16 3.83 2.53 2.53 0 01-1.14-2V12M6.6 15.6A2 2 0 1010 17v-5" />
                  </svg>
                  <span>AC</span>
                </label>
                <label
                  className="flex border p-4 rounded-2xl gap-2 items-center "
                  htmlFor=""
                >
                  <input
                    type="checkbox"
                    name="Heater"
                    onChange={handleCbClick}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M5 18S2 10 2 6s2-4 2-4h1s1 0 1 1-1 1-1 3 3 4 3 7-3 5-3 5m10-1c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2H9c-2 0-3-1.8-3-1.8-.2-.2-.3-.6 0-.8 0 0 3-2.5 4-2.5h5M13.7 3.4l-1.4 3.4 1.4 3.4-2 4.8-1.7-1.4 1.4-3.4L10 6.8 12 2l1.7 1.4m4.2 0l-1.4 3.4 1.4 3.4-2 4.8-1.7-1.4 1.4-3.4-1.4-3.4 2-4.8 1.7 1.4m4.1 0l-1.4 3.4 1.4 3.4-2 4.8-1.7-1.4 1.4-3.4-1.4-3.4 2-4.8L22 3.4" />
                  </svg>
                  <span>Heater</span>
                </label>
              </div>
            </div>

            <h2 className="text-xl mt-4">Extra Info</h2>
            <p className="text-gray-500 text-sm">House rules etc...</p>
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />
            <h2 className="text-xl mt-4">Checkin & Checkout time</h2>
            <p className="text-gray-500 text-sm">
              Enter Check in and Check out time
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="">
                <h3 className="mt-2 -mb-1">Check in Time</h3>
                <input
                  type="text"
                  value={checkin}
                  onChange={(ev) => setChekin(ev.target.value)}
                  placeholder="13:00"
                />
              </div>
              <div className="">
                <h3 className="mt-2 -mb-1">Check out Time</h3>
                <input
                  type="text"
                  value={checkout}
                  onChange={(ev) => setCheckout(ev.target.value)}
                  placeholder="13:00"
                  name=""
                  id=""
                />
              </div>
            </div>
            <h2 className="text-xl mt-4">Enter other house details</h2>
            <p className="text-gray-500 text-sm">
              Enter Number of rooms , bathrooms etc
            </p>
            <div className="grid gap-2 sm:grid-cols-4">
              <div>
                <h3 className="mt-2 -mb-1">Max Guest</h3>
                <input
                  type="number"
                  value={maxGuests}
                  onChange={(ev) => setMaxGuests(ev.target.value)}
                  placeholder="4"
                  name=""
                  id=""
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Number of Bedrooms</h3>
                <input
                  type="number"
                  value={bedrooms}
                  onChange={(ev) => setBedrooms(ev.target.value)}
                  placeholder="2"
                  name=""
                  id=""
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Number of Beds</h3>
                <input
                  type="number"
                  value={beds}
                  onChange={(ev) => setBeds(ev.target.value)}
                  placeholder="4"
                  name=""
                  id=""
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Number of Bathrooms</h3>
                <input
                  type="number"
                  value={bathroom}
                  onChange={(ev) => setBathroom(ev.target.value)}
                  placeholder="2"
                  name=""
                  id=""
                />
              </div>
            </div>
            <h2 className="text-xl mt-4">Price</h2>
            <input type="number" placeholder="3200 Rs" />
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Places;
