
export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.439451',
    bl_lng: '28.51604',
    tr_lat: '43.153829',
    tr_lng: '42.842211',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': '664ccf6e18msh54bd607bc872cc2p10e69ajsn6be2508c5987',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};

export const options2 = {
  headers: {
    'X-RapidAPI-Key': '664ccf6e18msh54bd607bc872cc2p10e69ajsn6be2508c5987',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};

