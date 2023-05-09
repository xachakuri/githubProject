import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { githubActions } from "../store/github/github.slice";

const actions = {
  ...githubActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
