import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./Actions";

export const initialState = {
  myFavorites: [],
  allCharactersF: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharactersF: payload };
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
    case FILTER:
      const allCharactersFiltered = state.allCharactersF.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharactersF]
            : allCharactersFiltered,
      };
    case ORDER:
      const allCharactersC = [...state.allCharactersF];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allCharactersC.sort((a, b) => a.id - b.id)
            : allCharactersC.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
