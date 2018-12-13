export default function createReducer(handlers, initialState) {
  return (state = initialState, action) => {
    const reducer = handlers[action.type];
    if (reducer) {
      return reducer(state, action);
    }

    return state;
  };
}
