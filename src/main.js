// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { FuckThisBullShit } from './fridayproject6.js';
var medic = require('./fridayproject6.js').medic;


$(document).ready(function() {

  $('#searchDoctor').click(function() {
     let doctor = $('#dataDoctorInput').val();
     let sickness = $('#dataSicknessInput').val();
    let data;
    data = medic(doctor,sickness,

      function () {
        let doctorInfo = data.toString();
        if (doctorInfo.length < 1 || doctorInfo == []) { doctorInfo = ["No Results"]; }
      document.getElementById("showInfo").innerHTML = doctorInfo;
      // document.getElementById("showInfo2").innerHTML = data[1];
      });
   });

});
