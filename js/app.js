var index_x = 0;
var index_y = 0;
document.getElementById("myTable").rows[0].cells[0].style.border = "2px solid red";
function myFunction() {
    index_x = 0;
    index_y = 0;
    var x = document.getElementById("myTable").rows;
    for (var i = 0; i < x.length; i++) {
      for (var j = 0; j < x[i].cells.length; j++) {
          x[i].cells[j].innerText = Math.floor(Math.random() * 2);
          x[i].cells[j].style.border = "";
      }
    }
    x[0].cells[0].innerText = 1;
    x[0].cells[0].style.border = "2px solid red";
}
function iswon() {
  var x = document.getElementById("myTable").rows;
  var check = x[0].cells[0].innerText;
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < x[i].cells.length; j++) {
        if(x[i].cells[j].innerText != check){
          return false;
        }
    }
  }
  return true;
}
document.addEventListener("keydown", function(event) {
  var x = document.getElementById("myTable").rows;
  if(event.which == 38){
    if(index_x == 0){
      document.getElementById("myModal").querySelectorAll(".modal-body")[0].innerText = "Key Up will not work";
      $("#myModal").modal();
    }else {
      x[index_x - 1].cells[index_y].innerText = parseInt(x[index_x - 1].cells[index_y].innerText) + 1;
      x[index_x].cells[index_y].style.border = "";
      x[index_x - 1].cells[index_y].style.border = "2px solid red";
      index_x--;
    }
    //console.log("Key Up");
  }else if (event.which == 37){
    if(index_y == 0){
      document.getElementById("myModal").querySelectorAll(".modal-body")[0].innerText = "Key Left will not work";
      $("#myModal").modal();
    }else {
      x[index_x].cells[index_y - 1].innerText = parseInt(x[index_x].cells[index_y - 1].innerText) + 1;
      x[index_x].cells[index_y].style.border = "";
      x[index_x].cells[index_y - 1].style.border = "2px solid red";
      index_y--;
    }
    //console.log("key left");
  }else if (event.which == 39) {
    if(index_y == 2){
      document.getElementById("myModal").querySelectorAll(".modal-body")[0].innerText = "Key Right will not work";
      $("#myModal").modal();
    }else {
      x[index_x].cells[index_y + 1].innerText = parseInt(x[index_x].cells[index_y + 1].innerText) + 1;
      x[index_x].cells[index_y].style.border = "";
      x[index_x].cells[index_y + 1].style.border = "2px solid red";
      index_y++;
    }
    //console.log("key Right");
  }else if (event.which == 40) {
    if(index_x == 2){
      document.getElementById("myModal").querySelectorAll(".modal-body")[0].innerText = "Key down will not work";
      $("#myModal").modal();
    }else {
      x[index_x + 1].cells[index_y].innerText = parseInt(x[index_x + 1].cells[index_y].innerText) + 1;
      x[index_x].cells[index_y].style.border = "";
      x[index_x + 1].cells[index_y].style.border = "2px solid red";
      index_x++;
    }
    //console.log("keydown");
  }
  if(iswon() == true){
    $("#myModal").modal();
    document.getElementById("myModal").querySelectorAll(".modal-body")[0].innerText = "Congratulations You Won the Game!! Are you want to play again ?";
    // if (confirm('Congratulations You Won the Game!! Are you want to play again')) {

    //   location.reload();
    // } else {
    //   return;
    // }
  }
})