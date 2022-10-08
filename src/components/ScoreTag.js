import React, { useEffect, useState } from "react";

const ScoreTag = ({ score }) => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (score >= 4.5) {
      setComment("好極了");
    } else {
      setComment("非常好");
    }
  }, [score]);

  return (
    <div className="mt-3 d-flex align-items-center">
      <div className="fw-bold">{comment}</div>
      <div className="bg-danger text-white fs-4 rounded-2 ms-2 px-2 py-1">
        {score}
      </div>
    </div>
  );
};

export default ScoreTag;
