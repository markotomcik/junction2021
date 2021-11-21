const markers = (state = [], action) {
  switch (action.type) {
    case "MARKERS_SUCCESS":
      return action.payload.markers;


    default:
      return state;
  }
}


export default markers;