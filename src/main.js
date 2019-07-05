// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#searchDoctor').click(function() {
     let city = $('#dataDoctorInput').val();
     let city2 = $('#dataSicknessInput').val();

     console.log(city);
     console.log(city2);

      let request = new XMLHttpRequest();
      const url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=mame&query=wuery&location=Portland&skip=0&limit=10&user_key=3dafcc36df77a6c43a3df6522adae0f4';

      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);

  request.open("GET", url, true);
  request.send();
   }
 }
});

// $('#searchSickness').click(function() {
//    const city = $('#dataSickness').val();
//    $('#dataSickness').val("");
//
//    let request = new XMLHttpRequest();
//    const url = 'https://api.betterdoctor.com/2016-03-01/doctors?name=mame&query=wuery&location=Portland&skip=0&limit=10&user_key=3dafcc36df77a6c43a3df6522adae0f4';
//
//    request.onreadystatechange = function() {
//      if (this.readyState === 4 && this.status === 200) {
//        const response = JSON.parse(this.responseText);
//        getElements(response);
//
// request.open("GET", url, true);
// request.send();
// }
// }
});
