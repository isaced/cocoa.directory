import Router from "next/router";
import React, { useContext, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// mui
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import { Query } from "../types";
import urlWithQuery from "../util/urlWithQuery";

type Props = {
  query: Query;
  total: number;
};

const Search = (props: Props) => {
  const { query, total } = props;
  const callback = useDebouncedCallback((text: string) => {
    Router.replace(urlWithQuery("/", { ...query, search: text, page: undefined }));
  }, 150);

  return (
    <div className=" mt-6">
      <Paper component="form" className="flex">
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" disabled>
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          defaultValue={query && query.search}
          placeholder={"Search libraries..."}
          inputProps={{ "aria-label": "search libraries" }}
          onChange={(e) => {
            callback(e.target.value);
          }}
          className="bg-opacity-0"
        />
      </Paper>
      <div>
        <p className="text-white mt-4">
          {total} {total === 1 ? "library" : "libraries"}
        </p>
      </div>
    </div>
  );
};

export default Search;
