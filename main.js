addAdjust();
addSpin();
var spinTog = true;
var maxh = getCookie("maxh");
if (maxh < 0) {
    maxh = 200;
}
var maxw = getCookie("maxw");
if (maxw < 0) {
    maxw = 500;
}
$('#us-theme').append('<option value="' + "http://puu.sh/84HyF.css" + '">' + "No Background" + '</option>');

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function addAdjust() {
    var objTo = document.getElementById('chatheader')
    var modspan = document.createElement("span");
    modspan.innerHTML = "<button id='adju'> Adjust Size</button>"
    objTo.appendChild(modspan);
}

function addSpin() {
    var objTo = document.getElementById('chatheader')
    var modspan = document.createElement("span");
    modspan.innerHTML = "<button id='sptg'> Spin: On</button>"
    objTo.appendChild(modspan);
}
$("#adju").click(function () {
    var tempvar = $("#chatline").val();
    var tempvar2 = tempvar.split(" ");
    if (tempvar2[0] > 0 && tempvar2[1] > 0) {
        maxh = tempvar2[0];
        document.cookie = "maxh =" + tempvar2[0];
        $("#messagebuffer.linewrap img").css("max-height", maxh + "px");
        maxw = tempvar2[1];
        document.cookie = "maxw =" + tempvar2[1];
        $("#messagebuffer.linewrap img").css("max-width", maxw + "px");
        $("#chatline").val("");
    } else {
        $("#chatline").val("Invalid input, enter in the max height followed by the max width seperated by a space.");
    }
});
$("#sptg").click(function () {
    if (spinTog == false) {
        spinTog = true;
        $(this).text("Spin: On");
        $("span.spin img").css("-webkit-animation", "spin 10s linear infinite");
        $("span.spin img").css("-moz-animation", "spin 10s linear infinite");
        $("span.spin img").css("animation", "spin 10s linear infinite");
    } else {
        spinTog = false;
        $(this).text("Spin: Off");
        $("span.spin img").css("-webkit-animation", "spin 0s linear infinite");
        $("span.spin img").css("-moz-animation", "spin 0s linear infinite");
        $("span.spin img").css("animation", "spin 0s linear infinite");
    }
});
function updateBanner() {
  var pixelFags = new Array("_North","Achilles","dragonslayer","FuckNo","Happy","Kirakira_Tsundere","Kolt","MassiveFaggot","Mikanrin","Mioo-chi","NikolainnDuke","PingPongYeti","Pyro","Shake_it","ShizuruAnon","SilentHonorArk","soupysauce","SuperSassy","thuglyfegg","ToradoraFag","tsukari","Verty", "ChinatsuKougou");
  for (var i = 0; i < pixelFags.length; i++) {
$("span."+pixelFags[i]).css("display","none");
    if ($("DIV.userlist_item").text().indexOf(pixelFags[i]) > -1) {
      $("span."+pixelFags[i]).css("display","inline");
}
}
}
socket.on("addUser", updateBanner);
socket.on("userLeave", updateBanner);

_chatBuffer = addChatMessage;
addChatMessage = function (data) {
    _chatBuffer(data);
    $("span#currentlyStreaming").load("https://docs.google.com/spreadsheet/pub?key=0AiZgrUw4okC-dGhiZ1VaM2VmWHMxZDZ0ekY0NHdrSEE&single=true&gid=2&range=A1&output=html&ts= .s0")+ $.now();
    $("#messagebuffer.linewrap img").css("max-height", maxh + "px");
    $("#messagebuffer.linewrap img").css("max-width", maxw + "px");
    if (spinTog == true) {
        $("span.spin img").css("-webkit-animation", "spin 10s linear infinite");
        $("span.spin img").css("-moz-animation", "spin 10s linear infinite");
        $("span.spin img").css("animation", "spin 10s linear infinite");
    } else {
        $("span.spin img").css("-webkit-animation", "spin 0s linear infinite");
        $("span.spin img").css("-moz-animation", "spin 0s linear infinite");
        $("span.spin img").css("animation", "spin 0s linear infinite");
    }
}

function loadSmug() {
    $("#messagebuffer.linewrap img").css("max-height", maxh + "px");
    $("#messagebuffer.linewrap img").css("max-width", maxw + "px");
    $("span.spin img").css("-webkit-animation", "spin 10s linear infinite");
    $("span.spin img").css("-moz-animation", "spin 10s linear infinite");
    $("span.spin img").css("animation", "spin 10s linear infinite");
    updateBanner();
    $("span#currentlyStreaming").load("https://docs.google.com/spreadsheet/pub?key=0AiZgrUw4okC-dGhiZ1VaM2VmWHMxZDZ0ekY0NHdrSEE&single=true&gid=2&range=A1&output=html&ts= .s0")+ $.now();
}
setInterval(loadSmug(), 10000);


//test2
