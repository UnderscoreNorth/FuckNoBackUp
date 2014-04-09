addAdjust();
addSpin();
addEmote();
addKek();
addReset();
var smugCounter = getCookie("Smugs");
var spinTog = true;
var kekTog = false;
var emoTog = true;
if (smugCounter < 0) {
    smugCounter = 0;
}
var maxh = getCookie("maxh");
if (maxh < 0) {
    maxh = 200;
}
var maxw = getCookie("maxw");
if (maxw < 0) {
    maxw = 500;
}

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

function addEmote() {
    var objTo = document.getElementById('chatheader')
    var modspan = document.createElement("span");
    modspan.innerHTML = "<button id='emte'> Emotes: On</button>"
    objTo.appendChild(modspan);
}

function addKek() {
    var objTo = document.getElementById('chatheader')
    var modspan = document.createElement("span");
    modspan.innerHTML = "<button id='kekb'>:^)</button>"
    objTo.appendChild(modspan);
}

function addSpin() {
    var objTo = document.getElementById('chatheader')
    var modspan = document.createElement("span");
    modspan.innerHTML = "<button id='sptg'> Spin: On</button>"
    objTo.appendChild(modspan);
}

function addReset() {
    var objTo = document.getElementById('chatheader')
    var modspan = document.createElement("span");
    modspan.innerHTML = "<button id='rese'> Reset</button>"
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
$("#rese").click(function () {
    maxw = 500;
    maxh = 200;
    smugCounter = 0;
    document.cookie = "Smugs =" + smugCounter;
    document.cookie = "maxw =" + maxw;
    document.cookie = "maxh =" + maxh;
    $("DIV#smugBox").text("0 Smugs");
    $("#messagebuffer.linewrap img").css("max-height", maxh + "px");
    $("#messagebuffer.linewrap img").css("max-width", maxw + "px");
});
$("#kekb").click(function (){
    if (kekTog == false){
        $("#messagebuffer.linewrap div").css("-webkit-animation", "spin 500s linear infinite");
        $("#messagebuffer.linewrap div").css("-moz-animation", "spin 500s linear infinite");
        $("#messagebuffer.linewrap div").css("animation: spin 500s linear infinite");
        kekTog = true;
    } else {
        $("#messagebuffer.linewrap div").css("-webkit-animation", "spin 0s linear infinite");
        $("#messagebuffer.linewrap div").css("-moz-animation", "spin 0s linear infinite");
        $("#messagebuffer.linewrap div").css("animation", "spin 0s linear infinite");
        kekTog = false;
    }
});
$("#emte").click(function (){
    if (emoTog == false) {
        emoTog = true;
        $(this).text("Emotes: On");
        $("#messagebuffer.linewrap img").css("display", "inline");
    } else {
        emoTog = false;
        $(this).text("Emotes: Off");
        $("#messagebuffer.linewrap img").css("display", "none");
    }
});

function updateBanner() {
  var pixelFags = new Array("_North","Achilles","DragonSlayer","FuckNo","Happy","Kirakira_Tsundere","Kolt","MassiveFaggot","Mikanrin","Mioo-chi","NikolainnDuke","PingPongYeti","Pyro","shake_it","Shizuruanon","SilentHonorArk","SoupySauce","SuperSassy","thuglyfegg","ToradoraFag","tsukari","Verty");
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
    if (data.msg.indexOf("smug") != -1 || data.msg.indexOf("mug4") != -1) {
        smugCounter++;
        document.cookie = "Smugs =" + smugCounter;
        if (smugCounter == 1) {
            $("DIV#smugBox").text("1 Smug");
        } else {
            $("DIV#smugBox").text(smugCounter + " Smugs");
        }
    }
    _chatBuffer(data);
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
    if (emoTog == true) {
        $("#messagebuffer.linewrap img").css("display", "inline");
    } else {
        $("#messagebuffer.linewrap img").css("display", "none");
    }
    if (kekTog == true){
        $("#messagebuffer.linewrap div").css("-webkit-animation", "spin 500s linear infinite");
        $("#messagebuffer.linewrap div").css("-moz-animation", "spin 500s linear infinite");
        $("#messagebuffer.linewrap div").css("animation: spin 500s linear infinite");
    } else {
        $("#messagebuffer.linewrap div").css("-webkit-animation", "spin 0s linear infinite");
        $("#messagebuffer.linewrap div").css("-moz-animation", "spin 0s linear infinite");
        $("#messagebuffer.linewrap div").css("animation", "spin 0s linear infinite");
    }
}

function loadSmug() {
    $("#messagebuffer.linewrap img").css("max-height", maxh + "px");
    $("#messagebuffer.linewrap img").css("max-width", maxw + "px");
    if (smugCounter == 1) {
        $("DIV#smugBox").text("1 Smug");
    } else {
        $("DIV#smugBox").text(smugCounter + " Smugs");
    }
    $("span.spin img").css("-webkit-animation", "spin 10s linear infinite");
    $("span.spin img").css("-moz-animation", "spin 10s linear infinite");
    $("span.spin img").css("animation", "spin 10s linear infinite");
    updateBanner;
}
setInterval(loadSmug(), 3000);
