import React, { useCallback, useEffect, useState } from "react";

import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";

import useDebounce from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

const HomePage = () => {
  const [search, setSearch] = useState("xachakuri");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { data, isError, isLoading } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  const reposNotFound = !areReposLoading && (!repos || repos.length === 0);

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearch(event.target.value);
    },
    []
  );

  const clickHandler = useCallback(
    (username: string) => {
      setDropdown(false);
      fetchRepos(username);
    },
    [fetchRepos]
  );

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length > 0);
  }, [debounced, data]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-full">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Seach for Github username..."
          value={search}
          onChange={handleOnChange}
        />
        {dropdown && (
          <ul className="absolute overflow-y-scroll list-none top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white ">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((user) => (
              <li
                role="presentation"
                key={user.id}
                onClick={() => clickHandler(user.login)}
                className="flex py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors
            cursor-pointer"
              >
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-[25px] mr-2"
                />
                {user.login}
              </li>
            ))}
          </ul>
        )}
        <div className="container">
          {areReposLoading && <p className="text-center">Loading...</p>}
          {!areReposLoading && repos && repos.length > 0
            ? [...repos]
                ?.sort(
                  (a, b) => new Date(b.created_at) - new Date(a.created_at)
                )
                .map((repo) => <RepoCard repo={repo} key={repo.id} />)
            : reposNotFound && (
                <div className="border py-3 px-5 rounded mg-2 hover:shadow-md hover:bg-gray-100 transition-all">
                  <p className="text-center font-bold ">Repos not Found</p>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
