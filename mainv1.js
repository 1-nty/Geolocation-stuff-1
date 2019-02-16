von https://alligator.io/js/geolocation-api/
// check if available
if (navigator.geolocation) {
  // 🗺️ yep, we can proceed!
  console.log('yep')
} else {
  // no can do
  console.log('no')
}

//design an example sucess Function
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(displayLocationInfo);
}


function displayLocationInfo(position){
  const pc = position.coords;
  const lng = pc.longitude;
  const lat = pc.latitude;
  const accuracy = pc.accuracy;
  const altitude = pc.altitude;
  const altitudeAccuracy = pc.altitudeAccuracy;
  const heading = pc.heading;
  const speed = pc.speed;
  // timestamp
  const time = position.timestamp;

  console.log(`{longitude: ${ lng }, latitude: ${ lat }}`);
}
