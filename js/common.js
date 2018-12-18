$(document).ready(function () {
    $("#input-btn").click(function () {
        processInputPan();
        processInputToken();
        processInputRegId();
    });

    $("#input-reset-btn").click(function () {
        $("input[id^=input]").val('');
    });

    $("#output-reset-btn").click(function () {
        $("input[id^=output]").val('');
    });

})

function processInputRegId() {
    let regId = $("#input-regid").val();
    let first6 = regId.substr(0, 6);
    let last4 = regId.substr(regId.length - 4, regId.length);
    let mid = regId.substr(6, regId.length - 10);
    let panMid = '999999999' - mid + '';
    let tokenMid = panMid.split("").reverse().join("");
    let pan = first6.split("").reverse().join("") + panMid + last4.split("").reverse().join("");
    let token = first6.split("").reverse().join("") + tokenMid + last4.split("").reverse().join("");
    $("#output-expdate").val("5001");
    $("#output-pan").val(pan);
    $("#output-token").val(token);
    let secondToLastDigit = regId.substr(regId.length - 2, 1);
    secondToLastDigit = secondToLastDigit % 4 + '';
    let walletType = '', eci = '';
    switch (secondToLastDigit) {
        case "1": walletType = "ANDROID"; eci = "07"; break;
        case "2": walletType = "APPLE"; eci = "05"; break;
        case "3": walletType = "SAMSUNG"; eci = "07"; break;

    }
    $("#output-wallet").val(walletType);
    $("#output-eci").val(eci);
}

function processInputPan () {
    let pan = $("#input-pan").val();
    let first6 = pan.substr(0, 6);
    let last4 = pan.substr(pan.length - 4, pan.length);
    let mid = pan.substr(6, pan.length - 10);
    let regId = '999999999' - mid;
    let output_mid = mid.split("").reverse().join("");
    let isTokenNew = pan.substr(pan.length-4, 3);
    $("#output-token").val(first6 + output_mid + last4);
    if (isTokenNew == '000') {
        $("#output-tokennewlygen").val("true");
    } else {
        $("#output-tokennewlygen").val("false");
    }
    $("#output-regid").val(first6.split("").reverse().join("") + regId + last4.split("").reverse().join(""));

}

function processInputToken () {
    let token = $("#input-token").val();
    let first6 = token.substr(0, 6);
    let last4 = token.substr(token.length - 4, token.length);
    let mid = token.substr(6, token.length - 10);
    mid = mid.split("").reverse().join("");
    let cvv = token.substr(token.length-4, 3);
    $("#output-pan").val(first6 + mid + last4);
    $("#output-cvv").val(cvv);
    $("#output-expdate").val("5001");

}