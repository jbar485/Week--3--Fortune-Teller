$(document).ready(function(){
  $("form").submit(function(event){
      event.preventDefault();
      var myArray = [];
      var myArray1 = [];
      var myArray2 = [];
      // var total = myArray.length + myArray1.length + myArray2.length;

    $("input:checkbox[name=question1]:checked").each(function(){
      var input =  $(this).val();
      myArray.push(input);
    });

    $("input:checkbox[name=question2]:checked").each(function(){
      var input =  $(this).val();
      myArray1.push(input);
    });

    $("input:checkbox[name=question3]:checked").each(function(){
      var input = $(this).val();
      myArray2.push(input);
    });
    var total = myArray.length + myArray1.length + myArray2.length;
    if (total < 4) {
      $("#answer").text("You will be president of the United States before you turn 80");

    }else if (total > 8) {
      $("#answer").text("You will be alone forever because no one loves you. woof");
    }else {
      $("#answer").text("You have 15 days to live (ill make sure of that ;) )");
    }
    $("#result").show();
    $("#reset").show();
    $("button#reset").click(function(event){
    location.reload();
    });

    console.log(myArray, myArray1, myArray2, total);

  });

});
