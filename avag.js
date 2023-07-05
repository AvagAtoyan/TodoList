$(".submit").click(function () {
  let inpValue = $(".inp").val();
  if (inpValue && inpValue != "") {
    let content =
      "<div class=' cont1 d-flex align-items-center  d-flex  justify-content-between data-mdb-attribute.' style='height: 50px;border-bottom: 0.5px solid black;'> " +
      
      "<div class='cont2 ', style=' margin-left:20px;'>" +"<i class='icon'>" +
      "</i>"+"<span class='con ' style='color:black'>"+inpValue+"</span>" +
      "</div> " +
      "<div class='close d-flex justify-content-center   d-flex align-items-center ' style='width: 50px;height: 50px;cursor: pointer: '>" +
      "x" +
      "</div>"
    "</div>";
    $(".inp").val("");

    $(".todo-parent").append(content);
  } else {
    alert("");
  }
});
$(document).on("click", ".close", function () {
  console.log("element - ", $(this).parent());
  $(this).parent().attr("style", "display:none !important");
});

let x = false;
$(document).on("click", ".cont2", function () {
  if (x === false) {
    $(this).addClass("bi bi-check ")
    $(this).addClass(" text-decoration-line-through")
    
    x = true;
  } else if (x === true) {
    $(this).removeClass("bi bi-check")
    $(this).removeClass(" text-decoration-line-through")
    x = false;
  }
});