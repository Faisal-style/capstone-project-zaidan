import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function WorkerItem({ id, fullName, img, kota, rating, keahlian }) {
  return (
    <div className="worker-item card">
      <div className="worker-item__img">
        <img
          src={
            img
              ? img
              : "https://www.kindpng.com/picc/m/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png"
          }
          alt=""
        ></img>
      </div>
      <div className="worker-item__body">
        <Link to={`/worker/${id}`}>
          <h3 className="worker-item__body__name">{fullName}</h3>
        </Link>
        <p className="worker-item__body__skill">{keahlian}</p>
        <p className="fs-5">
          {"Rating " + parseFloat(rating.toFixed(2)) + "     "}
          {[
            Array(Math.round(rating))
              .fill()
              .map(() => {
                return (
                  <FaStar size={20} key={uuidv4()} style={{ color: "gold" }} />
                );
              }),
          ]}
        </p>
      </div>
    </div>
  );
}

export default WorkerItem;
