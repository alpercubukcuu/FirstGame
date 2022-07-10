// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
   
    var beepOne1 = $("#epic")[0];
    beepOne1.play();

   
  

    var ilkRakam = 40;
    $.saymayaBasla = function () {
        if (ilkRakam >= 0) {
            ilkRakam--;
            $("#count").val("");
            $("#count").val(ilkRakam);
            if (ilkRakam <= 10) {
                $("#count").css("color", "red");
            }
            if (ilkRakam == 0) {
                var deger = $("#scoretable").val();

                $("#scoretable").val("");
                $("#scoretable").val(deger);

                $(".soldiars").addClass("d-none");
                $(".modal-set").removeClass("d-none");
            }
        }

    }
    setInterval("$.saymayaBasla()", 1000);
});

$(".start-btn").click(function () {
    var clickone = $("#click")[0];
    clickone.play();

    

    setTimeout(function () {
        window.location.href = 'https://localhost:44329/Home/SecondPage';
    }, 500);

});



$(".pahulje").on("click", function () {

    var beepOne = $("#mySoundClip")[0];
    beepOne.pause();
    beepOne.play();


    $(this).addClass("d-none");
    setTimeout(function () {
        $(".pahulje").removeClass("d-none");
    }, 2000);


    var deger = $("#scoretable").val();
    deger++;
    $("#scoretable").val("");
    $("#scoretable").val(deger);
    $("#score2").val(deger);


});

$(".setting-btn").on("click", function () {

    var clickone = $("#click")[0];
    clickone.play();


    $(".modal-set-2").removeClass("d-none");
    $(".start-btn").addClass("d-none");
    $(".setting-btn").addClass("d-none");

});

$(".close-1").on("click", function () {

    var clickone = $("#click")[0];
    clickone.play();

    $(".modal-set-2").addClass("d-none");
    $(".start-btn").removeClass("d-none")
    $(".setting-btn").removeClass("d-none")

});

