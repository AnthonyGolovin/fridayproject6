// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $('#search').click(function() {
     const city = $('#data').val();
     $('#data').val("");

      let request = new XMLHttpRequest();
      const url =;
});
