export const markersGet = async (token, x, y, r) => {
  try {
    const response = await fetch('http://192.168.41.29:15648' + `/box/${x}/${y}/${r}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
       // 'Authorization': 'Bearer ' + token,
      }
    });
    const res = await response.json();
    return res;


  } catch (e) {
    throw e;
  }
}