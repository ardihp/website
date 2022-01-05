import React from "react";
import { Tooltip as TippyTooltip } from "react-tippy";

function Tooltip({ content, children }) {
  return (
    <TippyTooltip
      html={
        <div className="flex space-x-1 items-center px-2 py-1 mb-2 text-gray-600 bg-white border rounded-md shadow-md dark:bg-dark dark:text-gray-200">
          <p className="font-manrope font-bold text-xs">{content}</p>
          <i className="fas fa-angle-right text-sm" />
        </div>
      }
    >
      {children}
    </TippyTooltip>
  );
}

export default Tooltip;
