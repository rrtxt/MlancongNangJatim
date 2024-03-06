import React, { useState } from "react";
import DestinationCard from "../destinationcard/destinationcard";
import PaginationButtons from "../pagination/pagination";
import './listitems.css'

import { destinationData } from "../dummy";
import { Link } from "react-router-dom";

export default function ListItem() {

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  console.log(currentPage);

  return (
    <div className="result">
      <div className="top">
        <h3>Top Rank</h3>

        <div className="results">
          <Link to={"/detail/1"}>
            <DestinationCard data={destinationData[0]} />
          </Link>
          <Link to={"/detail/2"}>
            <DestinationCard data={destinationData[1]} />
          </Link>
          <DestinationCard data={destinationData[2]} />
        </div>

      </div>
      <div className="other">
        <h3>Result</h3>
        <div className="results">
          {destinationData
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((data, index) => (
              <DestinationCard key={index} data={data} />
            ))}
        </div>
        <PaginationButtons
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />


      </div>
    </div>
  );
}

