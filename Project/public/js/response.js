$("#leftsection  ul li:nth-child(1)").on("click", function () {
  $.post("/home", function (data) {
    $("#middlesection").html(data);
  });
});
$("#leftsection  ul li:nth-child(2)").on("click", function () {
  $.post("/profile", function (data) {
    $("#middlesection").html(data);
  });
});
$("#leftsection  ul li:nth-child(3)").on("click", function () {
  $.post("/results", function (data) {
    $("#middlesection").html(data);
  });
});
$("#leftsection  ul li:nth-child(4)").on("click", function () {
  $.post("/courses", function (data) {
    $("#middlesection").html(data);
  });
});
$("#leftsection  ul li:nth-child(5)").on("click", function () {
  $.post("/attendance", function (data) {
    $("#middlesection").html(data);
  });
});

$("#resultsection a").on("click", function (e) {
  e.preventDefault(); // cancel the link itself
  $.post(this.href, function (data) {
    console.log("ajax/results/details");
    $("#middlesection").html(data);
  });
});
$(".coursewiseattendance .course").on("click", function () {
  $.post("/attendance/details", function (data) {
    console.log("ajax/attendance/details");
    $("#middlesection").html(data);
  });
});

$(".faculty_attendance tbody tr").on("click", function (e) {
  e.preventDefault();
  $.post("/attendance/details?userid=" + this.id, function (data) {
    console.log("ajax/attendance/details");
    $("#middlesection").html(data);
  });
});
$(".faculty_attendance2 tbody tr").on("click", function (e) {
  e.preventDefault();
  $.post("/attendance/details?userid=" + this.id, function (data) {
    console.log("ajax/attendance/details");
    $("#middlesection").html(data);
  });
});
$(".faculty_attendance3 tbody tr").on("click", function (e) {
  e.preventDefault();
  $.post("/attendance/details?courseid=" + this.id, function (data) {
    console.log("ajax/attendance/details");
    $("#middlesection").html(data);
  });
});
$(".coursewiseattendance .course").on("click", function (e) {
  e.preventDefault();
  $.post("/attendance/details", function (data) {
    console.log("ajax/attendance/details");
    $("#middlesection").html(data);
  });
});
