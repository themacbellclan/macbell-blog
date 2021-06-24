import React from "react";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = "bg-green-500 text-white";
  }

  if (status === "error") {
    statusClasses = "bg-red-500";
  }

  const cssClasses = `mt-3 mx-auto w-4/12 h-10 p-4 flex flex-row justify-between items-center text-white  font-light text-sm space-x-3 xl:w-8/12 ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p className="whitespace-nowrap">{message}</p>
    </div>
  );
}

export default Notification;
