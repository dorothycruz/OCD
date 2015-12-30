//stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
var baseNumberA = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var baseNumberB = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    var n = ('000000' + num).substr(-6).match(/^(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (baseNumberA[Number(n[1])] + ' ' || baseNumberB[n[1][0]] + ' ' + baseNumberA[n[1][1]]) + 'hundred ' : '';
    if(str !== '' && n[2] == 0){
        str += 'thousand ';
    }
    str += (n[2] != 0) ? (baseNumberA[Number(n[2])] + ' ' || baseNumberB[n[2][0]] + ' ' + baseNumberA[n[2][1]]) + 'thousand ' : '';
    str += (n[3] != 0) ? (baseNumberA[Number(n[3])] + ' ' || baseNumberB[n[3][0]] + ' ' + baseNumberA[n[3][1]]) + 'hundred ' : '';

    str += (n[4] != 0) ? ((str != '') ? 'and ' : '') + (baseNumberA[Number(n[4])] || baseNumberB[n[4][0]] + ' ' + baseNumberA[n[4][1]]) : '';
    return str;
}


$(function () {
  var stop = 0;
  var stop2 = 0;

  $("#sq").mouseenter(function () {
    if (!stop) {
      stop = 1;

      $(this).addClass('square2');
    }
    else {

    }
  });

  $('#sq').click(function () {
    if (!stop2) {
      stop2 = 1;

      $(this).html("&#9733;");
      $(this).removeClass("square");
      $(this).removeClass("square2");
      $(this).addClass("star");

      $("drag1").addClass("trans");
      $("drag2").addClass("trans");
      $("drag3").addClass("trans");

      $(this).animate({
        opacity: 1,
      }, 2500);
      $("#crowd").html("<source src=\"audio/crowdt.mp3\">");

      $(".hide").addClass("show");
      $(".show").removeClass("hide");

      $("body").addClass('colorful');

    }
    else {

    }

  });

  $(".drag").draggable({ revert: true });

  $("#sq").droppable({
    accept: "#drag1, #drag2, #drag3",
    activeClass: 'star2',
    drop: function (event, ui) {
      ui.draggable.remove();

      if ($('#drag1, #drag2, #drag3').length === 0) {
        $('body').addClass('rosado');
        $('body').removeClass('colorful');
        $('#crowd').remove();
        $('#sq').remove();
        $("body").on('keypress', function (e) {
            if($.inArray(e.keyCode, [13]) !== -1){
          $('.first').remove();
          $('#ticks').show();

          $("#cambiar").typed({
            strings: ["All the ticks, all the constanly refreshing images just", "DISAPPEARED"],
            typeSpeed: 20
          });

      $('#audiot').html("<source src=\"audio/ticks.mp3\">");//Dorothy
    }
        });
      }
    }
  });

  $('.gone').mouseenter(function (event) {
    $(this).removeClass('gone');
    $(this).addClass('appear');
    $('#cambiar').addClass('disappear');
    $(this).off(event);
  });
  $('#cambiar').mouseenter(function () {
  if ($(this).text() === ("DISAPPEARED")) {
    $(this).css("color", "#FF6A8D");
    $(this).css("cursor", "pointer");
  }

  else {
  }

  });

  // function change() {
  // if ($("#cambiar").text() === ("DISAPPEARED")) {
  //   $('#audiot').remove();
  // }
  //
  // else {
  // }
  // };
  //
  // change();  Fade out audio / Dorothy

  $('#cambiar').click(function () {
  if ($(this).text() === ("DISAPPEARED")) {

    $("#ticks").remove();
    $('#bed').show();
    $('#audiot').remove();
  }

  else {
  }


  });


  //deletes the radio button if no and the div if yes
  //if al the questions are answered then shows the next page
  $('[name="questions"]').click(function (event) {
    var valor = event.target.value;
    if(valor === 'yes'){

      var divPadre = $(event.target).closest('div');
      divPadre.remove();

      //if empty, removes the bed div
      if($('[name="questions"]').length === 0){
        $("#bed").remove();
        $("#asking").show();
        $("#invitations").focus();
      }
    }
    else{
      if($(this).attr('id') === 'door'){
        // alert("*LOCKING DOORS*")
        $("#door2").html("<source src=\"audio/lock.m4a\">");
      }
      else{
        // alert("*WASHING HANDS*");
        $("#hands").html("<source src=\"audio/wash.mp3\">");
        // DOROTHY CRUZ
      }
      $(this).parent().remove();
    }
  });

  $("#invitations").keypress(function (e) {

    //Enter
    if($.inArray(e.keyCode, [13]) !== -1){
      var numero = this.textContent * 1;

      if(numero < 4){
        alert('*I TRIED HARDER*');
      }else{
        $("#invitations").hide();
        $("#saidyes").show();
        $("#numberText").text(inWords(numero));
      }
    }

    //stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery
    //i tried harder
    // Allow: backspace, delete, escape
    if (($.inArray(e.keyCode, [8, 9, 27, 190]) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)
      ) && e.keyCode !== 39) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) || e.keyCode === 39) {
      e.preventDefault();
    }
  });

  $('.going').click(function(event){
    $('#ask').hide();
    $('#colors').show();
  });

  $(".colordrag").draggable({ revert: true });

  $("#plate").droppable({
    accept: "#oranges, #blues, #greens, #purples",
    activeClass: 'plate2',
    drop: function (event, ui) {
      ui.draggable.remove();
      $('body').removeClass();
      if($(ui.helper).hasClass('orange')) {
        $('body').addClass('orangebg');
        $('#colors').removeClass('azul');
        $("#colors").addClass('blanco')
      }

      if($(ui.helper).hasClass('blue')) {
        $('body').addClass('bluebg');
        $('#colors').removeClass('azul');
        $("#colors").addClass('blanco')
      }

      if($(ui.helper).hasClass('green')) {
        $('body').addClass('greenbg');
        $('#colors').removeClass('azul');
        $("#colors").addClass('blanco')
      }

      if($(ui.helper).hasClass('purple')) {
        $('body').addClass('purplebg');
        $('#colors').removeClass('azul');
        $("#colors").addClass('blanco')
      }

      if ($('.orange, .blue, .green, .purple').length === 0) {
        $('#colors').hide();
        $('#love').show();
      }

    }
  });

  $('#heart').click(function(){
    $('#link').attr("src","video/ocd.mov");
    $("#video2")[0].load();
    $('#love').hide();
    $('#heart').hide();
  });
});
