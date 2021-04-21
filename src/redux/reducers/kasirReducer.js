const initState = {
  list: []
}

const kasirReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state;
  }
}

export default kasirReducer;