import React from "react";
import useAppSelector from "../hooks/redux";

const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.githubFavourites);

  if (favourites.length === 0)
    return <h2 className="text-center text-2xl font-bold">No items</h2>;

  return (
    <div className="flex flex-col items-center pt-10 mx-auto h-screen w-screen">
      <h2 className="text-center font-bold text-2xl mb-3">
        Your favourites Repos
      </h2>
      <ul className="list-none">
        {favourites.map((item) => (
          <li
            key={item.id}
            className="flex flex-col border w-[560px] py-3 px-5 rounded mg-2 hover:shadow-md hover:bg-gray-100 transition-all"
          >
            <p className="font-bold">{item.name}</p>
            <a href={item.url}>{item.url}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
