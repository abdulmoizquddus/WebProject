// $("#leftsection  ul li:nth-child(1)").on("click", function () {
//   $.get("/", function (data) {
//     $("html").html(data);
//   });
// });
// $("#leftsection  ul li:nth-child(2)").on("click", function () {
//   $.post("/profile", function (data) {
//     $("#middlesection").html(data);
//   });
// });
// $("#leftsection  ul li:nth-child(3)").on("click", function () {
//   $.post("/results", function (data) {
//     $("#middlesection").html(data);
//   });
// });
// $("#leftsection  ul li:nth-child(4)").on("click", function () {
//   $.post("/courses", function (data) {
//     $("#middlesection").html(data);
//   });
// });
// $("#leftsection  ul li:nth-child(5)").on("click", function () {
//   $.post("/attendance", function (data) {
//     $("#middlesection").html(data);
//   });
// });
console.log($(".result"));
console.log(document.getElementsByClassName(".result")[0]);

$(".result").on("click", function () {
  $.get("/results/details", function (data) {
    console.log("ajax/results/details");
    $("#middlesection").html(data);
  });
});
