months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
var theDate = new Date(document.lastModified); 
theDate.setTime((theDate.getTime()+(60*60)) ) 
with (theDate) { 
	document.write("<i>Last updated "+getDate()+' '+months[getMonth()]+' '+getFullYear()+"</i>");
} 
