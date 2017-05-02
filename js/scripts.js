$(document).ready(function() {
  $("#mainform").submit(function(event) {
    event.preventDefault();
    var countBy = parseInt($("input#countBy").val());
    var countTo = parseInt($("input#countTo").val());
    var iterations = []

    if (isNaN(countBy) || isNaN(countTo)) {
      alert("Please submit numbers only.")
    } else if (countBy < 0 || countTo < 0) {
      alert("Please submit positibe numbers only")
    } else {
      for (var index = 0; index <= countTo; index += countBy) {
        iterations.push(index);
      }
      };
    $("#output").append(iterations.join(", "));
  });
});
