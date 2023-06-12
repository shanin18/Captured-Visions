import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex item-center justify-center gap-3 mb-10">
      <h2 className="font-poppins text-3xl font-semibold uppercase dark:text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
