import React, { useCallback } from "react";
import useAppSelector from "../hooks/redux";
import useActions from "../hooks/actions";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.githubFavourites);
  const { removeFavourite } = useActions();

  const handlerRemoveFavourite = useCallback(
    (id: number) => {
      removeFavourite(id);
    },
    [removeFavourite]
  );

  if (favourites.length === 0)
    return <h2 className="text-center text-2xl font-bold mt-10">No items</h2>;

  return (
    <div className="flex flex-col items-center pt-10 mx-auto h-screen w-screen">
      <h2 className="text-center font-bold text-2xl mb-3">
        Your favourites Repos
      </h2>
      <ul className="list-none">
        {favourites.map((item) => (
          <li
            key={item.id}
            className="flex justify-between  border w-[560px] py-3 px-5 rounded mg-2 hover:shadow-md hover:bg-gray-100 transition-all"
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <a href={item.url}>{item.url}</a>
            </div>
            <button
              onClick={() => handlerRemoveFavourite(item.id)}
              type="button"
              className="py-2 px-4 bg-red-500 rounded hover:shadow-md transition-all"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
