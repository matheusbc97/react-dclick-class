export function setUserAction(user) {
  return (dispatch) => {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  };
}
