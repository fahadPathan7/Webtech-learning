
var locationDiv = document.querySelector(".location-div");

var p1 = locationDiv.children[0];
p1.textContent = "href: " + location.href;

var p2 = locationDiv.children[1];
p2.textContent = "protocol: " + location.protocol;

var p3 = locationDiv.children[2];
p3.textContent = "host: " + location.host;

var p4 = locationDiv.children[3];
p4.textContent = "hostname: " + location.hostname;

var p5 = locationDiv.children[4];
p5.textContent = "port: " + location.port;

var p6 = locationDiv.children[5];
p6.textContent = "pathname: " + location.pathname;

