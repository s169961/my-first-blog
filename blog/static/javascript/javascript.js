{% extends 'base.html' %}

$(document).ready(() => {
  $('.searchField').toggle();
  $('.input').toggle();

  var oldmoney = parseInt($('#mon').html());
  $('.add-button').on('click', () => {
    $('.searchField').toggle();
    $('.input').toggle();
  })

  $('#add-money').on('click', () => {
    var newm = parseInt($('#searchTxt').val());
    var newmoney = oldmoney + newm;
    if(!(isNaN(newm))){
    $('#mon').html(newmoney);
    $('.history').prepend("<br/>"+ "Old balance: "+ oldmoney+"," + " Added Money: " + newm +","+" New Balance: " + newmoney)
    oldmoney = newmoney;
    $('.searchField').toggle();
    $('.input').toggle();
  }
  else{
    alert(`Please enter a value`);
  }

  })

  $('.addBtn').on('click', () =>{
    var thegoal = $('#myInput').val();
    var goal = parseInt($('#myInput2').val());
    var goals = parseInt($('#myInput3').val());
    if ((isNaN(thegoal))&& !(isNaN(goal))&& !(isNaN(goals))){
      $('#myUL').prepend('<li>'+ thegoal);
      $('#myUL2').prepend('<li>' + goal+"/"+goals+"$");
      var newm =  parseInt($('#myInput2').val());
      var newmoney = oldmoney - newm;
      $('#mon').html(newmoney);
      $('.history').prepend("<br/>"+ "Old balance: "+ oldmoney+"," + " Removed Money: " + newm +","+" New Balance " + newmoney)
      oldmoney = newmoney;
    }
    else{
      alert(`Input incorrect, input a string, then number and number.`);
    }
  });
});
