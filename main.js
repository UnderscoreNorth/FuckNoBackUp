addHeight();
addWidth();
addReset();
addSpin();
var smugCounter=getCookie("Smugs");
var spinTog = false;
if (smugCounter<0){
          smugCounter = 0;
}
var maxh=getCookie("maxh");
if (maxh<0){
          maxh = 200;
}
var maxw=getCookie("maxw");
if (maxw<0){
          maxw = 500;
}
var smugTog = false;

function getCookie(cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for(var i=0; i<ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
          }
          return "";
} 
function addHeight() {
          var objTo = document.getElementById('chatheader')
          var modspan = document.createElement("span");
          modspan.innerHTML = "<button id='hech'>  Change Height</button>"
          objTo.appendChild(modspan);
  }  
function addReset() {
          var objTo = document.getElementById('chatheader')
          var modspan = document.createElement("span");
          modspan.innerHTML = "<button id='rese'>  Reset</button>"
          objTo.appendChild(modspan);
  }  
function addWidth() {
          var objTo = document.getElementById('chatheader')
          var modspan = document.createElement("span");
          modspan.innerHTML = "<button id='wich'>  Change Width</button>"
          objTo.appendChild(modspan);
  }
function addSpin() {
          var objTo = document.getElementById('chatheader')
          var modspan = document.createElement("span");
          modspan.innerHTML = "<button id='sptg'>  Spin: Off</button>"
          objTo.appendChild(modspan);
  }  
$("#hech").click(function() {
          var tempvar = $("#chatline").val();
          if (tempvar > 0) {
                  maxh = tempvar;
                  document.cookie = "maxh =" + tempvar;
                  $("#messagebuffer.linewrap img").css("max-height", maxh+"px");
                  $("#chatline").val("");
          }
});
$("#wich").click(function() {
          var tempvar = $("#chatline").val();
          if (tempvar > 0) {
                  maxw = tempvar;
                  document.cookie = "maxw =" + tempvar;
                  $("#messagebuffer.linewrap img").css("max-width", maxw+"px");
                  $("#chatline").val("");
          }
});
$("#sptg").click(function() {
          if (spinTog == false) {
                  spinTog = true;
                  $("span.spin img").css("-webkit-animation", "spin 10s linear infinite");
                  $("span.spin img").css("-moz-animation", "spin 10s linear infinite");
                  $("span.spin img").css("animation", "spin 10s linear infinite");
                  $(this).text("Spin: On");
          } else {
          	spinTog = false;
               	$("span.spin img").css("-webkit-animation", "spin 0s linear infinite");
                $("span.spin img").css("-moz-animation", "spin 0s linear infinite");
               	$("span.spin img").css("animation", "spin 0s linear infinite");
                $(this).text("Spin: Off");
          }
});
$("#rese").click(function() {   
          maxw = 500;
          maxh = 200;
          smugCounter = 0;
          document.cookie = "Smugs =" + smugCounter;
          document.cookie = "maxw =" + maxw;
          document.cookie = "maxh =" + maxh;
          $("DIV#smugBox").text("0 Smugs");
          $("#messagebuffer.linewrap img").css("max-height", maxh+"px");
          $("#messagebuffer.linewrap img").css("max-width", maxw+"px");
});

_chatBuffer=addChatMessage;
addChatMessage=function(data) {	
          if (data.msg.indexOf("smug")!=-1 || data.msg.indexOf("mug4")!=-1) {
                    smugCounter ++;
                    document.cookie = "Smugs =" + smugCounter;
                    if (smugCounter == 1) {
                              $("DIV#smugBox").text("1 Smug");
                    } else {
                              $("DIV#smugBox").text(smugCounter + " Smugs");
                    }
          }
          _chatBuffer(data);
          $("#messagebuffer.linewrap img").css("max-height", maxh+"px");
          $("#messagebuffer.linewrap img").css("max-width", maxw+"px");
}
function loadSmug() {
	$("#messagebuffer.linewrap img").css("max-height", maxh+"px");
	$("#messagebuffer.linewrap img").css("max-width", maxw+"px");
	if (smugCounter == 1) {
                              $("DIV#smugBox").text("1 Smug");
                    } else {
                              $("DIV#smugBox").text(smugCounter + " Smugs");
                    }
}
setInterval(loadSmug(),3000);
