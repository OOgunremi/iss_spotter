//
//const { fetchMyIP } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
//const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
//fetchMyIP((error, ip) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//
//  console.log('It worked! Returned IP:' , ip);
//});
//
//fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//
//  console.log('It worked! Returned coordinates:' , coordinates);
//});
//fetchISSFlyOverTimes({ latitude: '51.049999', longitude: '-114.066666' }, (error, issTimes) => {
//  if (error) {
//    console.log("It didn't work!" , error);
//    return;
//  }
//
//  console.log('It worked! Returned coordinates:' , issTimes);
//});

const printPassTimes = function(issTimes) {
  for (const pass of issTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, issTimes) => {
  if (error) {
    return;
  }
  printPassTimes(issTimes);
});