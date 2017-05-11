function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*60*60*1000));//exdays= number of hours for cookie to be expires
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) { 
  var name = cname + "="; 
  var decodedCookie =decodeURIComponent(document.cookie); 
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) { 
    var c = ca[i]; 
    while (c.charAt(0) ==' ') { 
      c = c.substring(1); 
    } 
    if (c.indexOf(name) == 0) { 
      return c.substring(name.length, c.length); 
    } 
  } 
  return ""; 
}

function session1(){
	setCookie('section1','',0.5);
	var cookies = getCookie('section1');
	for (var i = 0; i < 7; i++) {
		if(document.getElementsByName('section1')[i].checked){
			cookies = cookies + '1';
			setCookie('section1',cookies,0.5);
		}
		else{
			cookies = cookies + '0';
			setCookie('section1',cookies,0.5);
		}
	}
}

function session2(){
	setCookie('section2','',0.5);
	var cookies = getCookie('section2');
	for (var i = 0; i < 7; i=i+2) {
		if(document.getElementsByName('section2')[i].checked){
			cookies = cookies + '1';
			setCookie('section2',cookies,0.5);
		}
		else{
			cookies = cookies + '0';
			setCookie('section2',cookies,0.5);
		}
	}
}