//BackEnd

function getMedicalInfo(doctor,sickness, callback) {

  var answer = [];
  let request = new XMLHttpRequest();
  require('dotenv').config();
  const API_KEY=process.env.API_KEY;
  const url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + doctor + '&query=' + sickness + '&location=or-portland&skip=0&limit=10&user_key=' + API_KEY;

  try {
  request.open("GET", url, true);
  } catch(requestError) {
      console.log(requestError);
    }
    try {
  request.onreadystatechange = function() {
    if (this.status !== 200) {
      answer = ["SOMETHING WENT WRONG STATUS CODE NOT 200!!!"];
    } else if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      for (let i = 0; i < response.meta.count; i++){
        answer.push(response.data[i].practices[0].name);
      }
      if (typeof callback === "function") {
        callback.apply(this);
      }
    }
  };
} catch(parseError) {
console.error(parseError);
}
console.log("qwewqeqw");
try {
  request.send();
} catch(requestSend) {
  console.log(requestSend);
}
// setTimeout(function(){  if (answer == undefined || answer == 0) {
//    answer = ["No results"];
// }  }, 3000);
console.log(answer);
  return answer;
}
 exports.medic = getMedicalInfo;
