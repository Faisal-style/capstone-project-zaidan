import React from "react";
import WorkerItem from "./workerItem";

function WorkerList({ data }) {
  return (
    <div className="worker-list">
      {data.map((d) => (
        <WorkerItem key={d.id} id={d.id} {...d} />
      ))}
    </div>
  );
}

export default WorkerList;
