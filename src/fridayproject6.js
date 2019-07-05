//BackEnd

function getMedicalInfo(doctor,sickness) {

  var answer = [];
  let request = new XMLHttpRequest();
  const url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + doctor + '&query=' + sickness + '&location=or-portland&skip=0&limit=10&user_key=3dafcc36df77a6c43a3df6522adae0f4';

  request.open("GET", url, true);
  // console.log(doctor);
  // console.log(sickness);
  // console.log(url);
  try {
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      // answer = getElements(response);
      for (let i = 0; i < response.meta.count; i++){
        answer.push(response.data[i].practices[0].name);
      }
      return answer;
    }
  };
} catch(error) {
console.error('Error: ${error.message}')
}
  // // const getElements = function(response) {
  //   console.log(answer);
  //   return answer;
  // // };
  request.send();
  console.log(answer);
  return answer;

 }

 exports.medic = getMedicalInfo;
