//I changed the map view to satellite and zoomed out by changing the zoom property to a value of 4.
GoogleMap1.onresize=function(){
  console.log("You are going to Google Maps now")
}


// I resized the button size to large and changed the api from follow to widget.
Twitter1.onresize=function(){
  console.log("You are being redirected to Twitter.com")
}


//I changed the colorScheme property to dark and also changed the caption to recommend instead of like!
Facebook1.onresize=function(){
  console.log("You are being redirected to Facebook.com")
}

//I changed the border color to bright blue and the value of the QR code to say "QR Codes Are Cool!" so when you go to scan it on your phone this new value pops up!
QRCode1.onclick=function(){
  console.log("Scan the QR code for a cool message!")
}
