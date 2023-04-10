// Import stylesheets
import './style.css';
import jQuery from 'jquery';
import summernote from 'jquery';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

jQuery(document).ready(function () {
  console.log('jQuery');

  console.log('eee');
  var SUMMER_CONFIG = {
    // ? https://summernote.org/deep-dive/#callbacks
    toolbar: [['style', ['bold', 'italic', 'subscript', 'superscript']]],
    callbacks: {
      onInit: function () {
        console.log('Summernote is launched');
      },
      onBlur: function (e) {
        var p = e.target.parentNode.parentNode;
        if (!(e.relatedTarget && $.contains(p, e.relatedTarget))) {
          // $(this).parent().children('.note-editor').children('.note-toolbar').css("display", "none");
        }
        $('#' + this.id).summernote({
          airMode: true,
        });
      },
      onFocus: function (e) {
        // $(this).parent().children('.note-editor').children('.note-toolbar').css("display", "block");
        $('#' + this.id).summernote({
          airMode: false,
        });
      },
      onEnter: function (e) {
        // cw("CANCEL FROM" + e.type);
        // e.preventDefault();
        // return false;
      },
      onKeyup: function (e) {
        if (e.keyCode == 13) {
          // cw("CANCEL FROM" + e.type);
          // e.preventDefault();
          // return false;
        }
        //setTimeout(function(){},200);
      },
    },
  };
  console.log(SUMMER_CONFIG);
  jQuery('#summernote_1').summernote();
});
