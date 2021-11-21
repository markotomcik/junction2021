import { markersGet } from '../utils';


export const getMarkersAction = (x, y, r) => {
  return async (dispatch) => {
    try {
      dispatch(getMarkersRequest())
      let markers = await markersGet(null, x, y, r);
      dispatch(getMarkersSuccess(markers))
    } catch {}
  }
}

export const getMarkersRequest = () => ({
  type: "GET_MARKERS_REQUEST"
})

export const getMarkersSuccess = (markers) => ({
  type: "GET_MARKERS_SUCCESS",
  payload: { markers }
})