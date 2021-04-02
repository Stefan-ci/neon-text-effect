// Showing animation after a delay

function showAnim(){
  document.querySelector('.first-div').style.display='block';
}
setTimeout('showAnim()', 5000);


// Removing animation after a delay
/*
 function hideAnim(){
   document.querySelector('.neon').style.visibility='visible';
}
setTimeout('hideAnim()', 10000);  */

setTimeout(function(){
 var parent = document.getElementsByClassName('text-effect');
 var child = document.getElementsByTagName('h2');
 parent.removeChild(child);
}, 10000)
