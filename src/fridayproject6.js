//BackEnd

function getMedicalInfo(doctor,sickness) {

  let answer;
  let request = new XMLHttpRequest();
  const url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=' + doctor + '&query=' + sickness + '&location=45.5155,122.6793&skip=0&limit=10&user_key=3dafcc36df77a6c43a3df6522adae0f4';

  request.open("GET", url, true);

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      getElements(response);
    }
  }
  const getElements = function(response) {
    answer = response.meta.data_type;
  }
  request.send();
  return answer;
 }
 exports.medic = getMedicalInfo;
