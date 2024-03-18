import { combineSlices } from "@reduxjs/toolkit";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimezoneSelect from "react-timezone-select";
import { useSelector } from "react-redux";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  console.log(formData);
  const { currentUser } = useSelector((state) => state.user);

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage(null);

      const Data = {
        currentId: currentUser._id,
        ...formData,
      };

      const res = await fetch("/api/user/schcreate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Data),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      if (res.ok) {
        navigate("/schedul");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <h3 className="font-semibold text-slate-400 ml-1">Name</h3>
              <input
                className="  p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="Name"
                id="name"
                onChange={handlchange}
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-400 ml-1">Email</h3>

              <input
                className="  p-3 rounded-lg w-[460px] h-11"
                type="email"
                placeholder="name@company.com"
                id="Email"
                onChange={handlchange}
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-400 ml-1">phone</h3>
              <input
                className="  p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="phone"
                id="phone"
                onChange={handlchange}
              />
            </div>
            <div>
              <h3 className="font-semibold text-slate-400 ml-1">Date</h3>
              <input
                className="  p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="date"
                id="date"
                onChange={handlchange}
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-400 ml-1">time</h3>
              <input
                className="  p-3 rounded-lg w-[460px] h-11"
                type="text"
                placeholder="time"
                id="time"
                onChange={handlchange}
              />
            </div>

            <button
              className=" bg-gray-600 text-white p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
              type="submit"
            >
              schedule
            </button>
          </form>

          {errorMessage && (
            <p className="mt-5 text-red-600 bg-red-300 w-300 h-7 rounded-lg text-center ">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
