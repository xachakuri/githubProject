import React, { useCallback, useState } from "react";

import { IRepo } from "../models/models";
import formattedDate from "../utils/formattedDate";
import useActions from "../hooks/actions";
import useAppSelector from "../hooks/redux";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavourite, removeFavourite } = useActions();

  const { favourites } = useAppSelector((state) => state.githubFavourites);

  const [isFav, setIsFav] = useState(
    favourites.some((fav) => fav.url === repo.html_url)
  );

  const handlerAddFavourite = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      addFavourite({ id: repo.id, name: repo.full_name, url: repo.html_url });
      setIsFav(true);
    },
    [addFavourite, repo]
  );

  const handlerRemoveFavourite = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      removeFavourite(repo.id);
      setIsFav(false);
    },
    [removeFavourite, repo.id]
  );

  return (
    <div className="flex justify-between border py-3 px-5 rounded mg-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p>
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold mr-2">{repo.watchers}</span>
          Created Date:{" "}
          <span className="font-bold">{formattedDate(repo.created_at)}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
      </a>
      {!isFav && (
        <button
          onClick={handlerAddFavourite}
          type="button"
          className="py-2 px-4 bg-green-600 rounded hover:shadow-md transition-all"
        >
          Add
        </button>
      )}

      {isFav && (
        <button
          onClick={handlerRemoveFavourite}
          type="button"
          className="py-2 px-4 bg-red-500 rounded hover:shadow-md transition-all"
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default RepoCard;
