import React from "react";

const Stat = (props) => {
  return (
    <div className={`flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#008236] ${props.bg}  `}>
      <div className="flex justify-between items-center">
        <p className="text-[#0d141c] text-md leading-normal">{props.title}</p>
        <p className="text-xs text-gray-400">See Details</p>
      </div>
      <div className="flex item-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
        <p className="text-[#0d141c] tracking-light text-3xl font-bold leading-tight">
          {props.number}
        </p>
      </div>
      <p className="text-xs mt-3 text-gray-400">{props.subTitle}</p>
    </div>
  );
};

export default Stat;
