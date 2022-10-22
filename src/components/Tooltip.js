import React from "react";
import { Tooltip as TippyTooltip } from "react-tippy";

function Tooltip({ content, children }) {
  return (
    <TippyTooltip
      html={
        <div className="flex space-x-1 items-center px-2 h-8 mb-2 dark:text-slate-100 text-gray-600 dark:bg-slate-800 bg-white border dark:border-slate-600 rounded-md shadow-md">
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
