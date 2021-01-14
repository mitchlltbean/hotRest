console.log("I hath been linked");

const username = $("#name");
const userPhone = $("#userPhone");
const userTable = $("#userTable");
const userEstTime = $("#usertime");

$("#reservation").hide();

$("#resBtn").on("click", function () {
  $("#reservation").show();
});

$("#viewBtn").on("click", function () {});
$("#submitForm").on("click", function (event) {
  event.preventDefault();
  var newCharacter = {
    name: username.val().trim(),
    phone: userPhone.val().trim(),
    table: userTable.val().trim(),
    time: userEstTime.val().trim(),
  };

  $.post("/api/reservations", userreserve).then(function (data) {
    console.log("reservation", data);
    alert("Adding character...");
  });
});
