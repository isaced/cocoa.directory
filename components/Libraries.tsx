import { Library } from "../types";
import Router from "next/router";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ForkRightOutlinedIcon from "@mui/icons-material/ForkRightOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import urlWithQuery from "../util/urlWithQuery";

type Props = {
  libraries: Library[];
};

const Libraries = (props: Props) => {
  const router = useRouter();
  const page = router.query.page ? parseInt(router.query.page as string) : undefined;
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-6xl">
        <div className="space-y-3">
          {props.libraries.map((library, idx) => {
            return (
              <div key={idx} className="flex justify-between border-2 p-4">
                <div className="w-8/12">
                  <h2>
                    <a href={library.githubUrl}>{library.github.name}</a>
                  </h2>
                  <p>{library.github.description}</p>
                  {/* <p>
                    <a href={library.github?.license?.url}>{library.github.license?.name}</a>
                  </p> */}
                </div>
                <div>
                  <p>
                    <StarOutlineIcon />
                    {library.github.stats.stars} stars
                  </p>
                  <p>
                    <ForkRightOutlinedIcon />
                    {library.github.stats.forks} forks
                  </p>
                  <p>
                    <ErrorOutlineOutlinedIcon />
                    {library.github.stats.issues} issues
                  </p>
                  <p>
                    <DateRangeOutlinedIcon />
                    {library.github.stats.updatedAt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mt-8">
          <Stack spacing={2}>
            <Pagination
              count={10}
              page={page}
              onChange={(event, newPage) => {
                Router.replace(urlWithQuery("/", { ...router.query, page: newPage }));
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Libraries;
