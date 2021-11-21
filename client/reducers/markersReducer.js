const markers = (state = null, action) => {
  switch (action.type) {
    case "GET_MARKERS_SUCCESS":
      console.log(action.payload.markers);
      return action.payload.markers;


    default:
      return state;
  }
}


export default markers;