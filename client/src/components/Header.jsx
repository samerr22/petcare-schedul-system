import React from "react";
import { Link, useAsyncError } from "react-router-dom";
import { useSelector } from "react-redux";

export default function () {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-500">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/schedul">
          <h1 className="font-bold ">PetCare</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/schedul">
            <li>Home</li>
          </Link>

          {currentUser ? (
            <Link to={"/profile"}>
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            </Link>
          ) : (
            <Link to="/sign-in">
              <li>Sing In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
