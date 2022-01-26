import React from "react";

interface Props {
  sort: string;
  setSort: (sort: string) => void;
}

const TableHead: React.FC<Props> = ({ sort, setSort }) => {
  return (
    <tr>
      <th className="tablehead">
        <img
          className="sort-symbol"
          src="https://img.icons8.com/ios-filled/20/000000/numerical-sorting-12.png"
          alt="sort"
          onClick={() => setSort("asc-cn")}
        />
        <span>Customer Number </span>
        <img
          className="sort-symbol"
          src="https://img.icons8.com/material-outlined/20/000000/numerical-sorting-21.png"
          alt="sort"
          onClick={() => setSort("desc-cn")}
        />
      </th>
      <th className="tablehead">
        <img
          src="https://img.icons8.com/ios-glyphs/20/000000/alphabetical-sorting--v1.png"
          alt="sort"
          onClick={() => setSort("asc-un")}
        />
        <span>User Name </span>
        <img
          src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
          alt="sort"
          onClick={() => setSort("desc-un")}
        />
      </th>
      <th className="tablehead">
        <img
          src="https://img.icons8.com/ios-glyphs/20/000000/alphabetical-sorting--v1.png"
          alt="sort"
          onClick={() => setSort("asc-fn")}
        />
        <span>First Name </span>
        <img
          src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
          alt="sort"
          onClick={() => setSort("desc-fn")}
        />
      </th>
      <th className="tablehead">
        <img
          src="https://img.icons8.com/ios-glyphs/20/000000/alphabetical-sorting--v1.png"
          alt="sort"
          onClick={() => setSort("asc-ln")}
        />
        <span>Last Name </span>
        <img
          src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
          alt="sort"
          onClick={() => setSort("desc-ln")}
        />
      </th>
      <th className="tablehead">
        <img
          className="sort-symbol"
          src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
          alt="sort"
          onClick={() => setSort("asc-ll")}
        />
        <span>Email </span>
        <img
          className="sort-symbol"
          src="https://img.icons8.com/windows/20/000000/sort-alpha-up.png"
          alt="sort"
          onClick={() => setSort("desc-ll")}
        />
      </th>
      <th>Actions</th>
    </tr>
  );
};

export default TableHead;
