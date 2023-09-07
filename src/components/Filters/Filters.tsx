import type { IFilter } from "../../@types/todo";
import React from "react";

const Filters = ({ changeFilter }: { changeFilter: (filter: IFilter) => void }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        data-testid="filter-button"
        onClick={() => changeFilter("All")}
        className="px-2 border border-transparent border-r-zinc-600"
      >
        <span>Все</span>
      </button>
      <button
        data-testid="filter-button"
        onClick={() => changeFilter("Active")}
        className="px-2"
      >
        <span>Активные</span>
      </button>
      <button
        data-testid="filter-button"
        onClick={() => changeFilter("Completed")}
        className="px-2 border border-transparent border-l-zinc-600"
      >
        <span>Завершенные</span>
      </button>
    </div>
  );
};

export default Filters;
