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

     document.getElementById("#showInfo").innerHTML = medic(doctor,sickness);
     console.log(doctor);
     console.log(sickness);

     // $('.showInfo').(medic(doctor,sickness));
   });

});
