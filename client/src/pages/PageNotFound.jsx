import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#330c2f] via-[#cfbff7] to-[#cfb1b7] text-white text-center">
      <div className="bg-[#330c2f] rounded-lg shadow-lg p-8 max-w-md w-full">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="text-yellow-400 text-6xl mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-[#7b287d] text-white font-semibold py-2 px-4 rounded hover:bg-[#330c2f] transition duration-300 flex items-center"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
