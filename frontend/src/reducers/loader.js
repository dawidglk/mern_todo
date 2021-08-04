const ADD_LOADER = "LOADER/ADD_LOADER";
const REMOVE_LOADER = "LOADER/REMOVE_LOADER";

const addLoaderAction = () => ({ type: ADD_LOADER });
const removeLoaderAction = () => ({ type: REMOVE_LOADER });

export const loader = {
  add: addLoaderAction,
  remove: removeLoaderAction,
};

const initialState = {
  loader: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOADER:
      return {
        ...state,
        loader: [...state.loader, true],
      };
    case REMOVE_LOADER:
      const [, ...rest] = state.loader;

      return {
        ...state,
        loader: rest,
      };
    default:
      return state;
  }
};