
// Hunter Doty, script.js, 5/9/2024

$(document).ready(function(){
    // Function to hide paragraph elements
    $("#hideBtn").click(function(){
        $("article p").hide();
    });

    // Function to show paragraph elements
    $("#showBtn").click(function(){
        $("article p").show();
    });
});
