import React from "react";
import { Link } from "react-router-dom";

export default function schedul() {
  return (
    <div className="h-[800px]">
      <div className="flex justify-center mt-40 items-center gap-2">
        <Link to="/Creatsch">
          <button>Create schedule</button>
        </Link>
        <Link to="/Viewschedul">
          <button>View schedule</button>
        </Link>
      </div>
    </div>
  );
}
