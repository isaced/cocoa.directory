import Router from "next/router";
import React, { useContext, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { Query } from "../types";
import urlWithQuery from "../util/urlWithQuery";
// import { Filters, FilterButton } from "./Filters";
// import { Search as SearchIcon } from "./Icons";
// import { SortButton } from "./Sort";

type Props = {
  query: Query;
  total: number;
};

const Search = (props: Props) => {
  const { query, total } = props;
  const callback = useDebouncedCallback((text: string) => {
    console.log(text);
    Router.replace(urlWithQuery("/", { ...query, search: text, page: undefined }));
  }, 150);

  return (
    <>
      <div>
        <div>
          <div>
            <input
              defaultValue={query && query.search}
              placeholder={"Search libraries..."}
              onChange={(e) => {
                callback(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <p>
              {total} {total === 1 ? "library" : "libraries"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// const styles = StyleSheet.create({
//   wrapper: {
//     paddingVertical: 16,
//     alignItems: "center",
//   },
//   container: {
//     width: "100%",
//     maxWidth: layout.maxWidth,
//     paddingHorizontal: 16,
//   },
//   displayHorizontal: {
//     alignItems: "center",
//     flexDirection: "row",
//   },
//   textInput: {
//     flex: 1,
//     height: 50,
//     borderWidth: 2,
//     borderRadius: 4,
//     padding: 16,
//     paddingLeft: 44,
//     outlineColor: colors.primary,
//     fontSize: 20,
//     color: colors.white,
//   },
//   searchIcon: {
//     position: "absolute",
//     left: 16,
//   },
//   resultsContainer: {
//     marginTop: 8,
//     justifyContent: "space-between",
//   },
//   smallResultsContainer: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//   },
//   buttonsContainer: {
//     marginTop: 6,
//   },
//   totalCount: {
//     color: colors.primary,
//     fontWeight: "600",
//   },
//   totalText: {
//     color: colors.white,
//     marginTop: 4,
//   },
// });

export default Search;
