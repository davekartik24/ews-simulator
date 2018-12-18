$(document).ready(function () {
    $("#input-btn").click(function () {
        processInputPan();
        processInputToken();
    })

})

function processInputPan () {
    var pan = $("#input-pan").val();
    var first6 = pan.substr(0, 6);
    var last4 = pan.substr(pan.length - 4, pan.length);
    var mid = pan.substr(6, pan.length - 10);
    var regId = '999999999' - mid;
    var output_mid = mid.split("").reverse().join("");
    var isTokenNew = pan.substr(pan.length-4, 3);
    $("#output-token").val(first6 + output_mid + last4);
    if (isTokenNew == '000') {
        $("#output-tokennewlygen").val("true");
    } else {
        $("#output-tokennewlygen").val("false");
    }
    $("#output-regid").val(first6.split("").reverse().join("") + regId + last4.split("").reverse().join(""));

}

function processInputToken () {
    var token = $("#input-token").val();
    var first6 = token.substr(0, 6);
    var last4 = token.substr(token.length - 4, token.length);
    var mid = token.substr(6, token.length - 10);
    mid = mid.split("").reverse().join("");
    var cvv = token.substr(token.length-4, 3);
    $("#output-pan").val(first6 + mid + last4);
    $("#output-cvv").val(cvv);
    $("#output-expdate").val("5001");

}