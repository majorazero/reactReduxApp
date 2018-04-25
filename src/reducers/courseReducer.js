export default function courseReducer(state = [], action) { //if you pass initialState it will override your [] state
  switch(action.type) {
    case "CREATE_COURSE":
      return [...state, //...state is a spread operator it converts it all into inline values
        Object.assign({}, action.course)];
    default:
      return state;
  }
}