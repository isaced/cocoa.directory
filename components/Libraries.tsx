import { Library } from "../types";

type Props = {
  libraries: Library[];
};

const Libraries = (props: Props) => {
  return (
    <div>
      {props.libraries.map((library, idx) => {
        return (
          <div key={idx}>
            <h2>
              <a href={library.githubUrl}>{library.github.name}</a>
            </h2>
            <p>{library.github.description}</p>
            <p>
              <a href={library.github?.license?.url}>{library.github.license?.name}</a>
            </p>
            <p>{library.github.stats.stars} stars</p>
            <p>{library.github.stats.forks} forks</p>
            <p>{library.github.stats.issues} issues</p>
            <p>{library.github.stats.updatedAt}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Libraries;
