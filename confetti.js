// Ambient confetti drift — a handful of pieces, slow, low-opacity.
(function(){
  var host = document.querySelector('.confetti');
  if(!host) return;
  var colors = ['#C1707E', '#AE8A4E', '#6E8B5E', '#8A6389'];
  var count = 16;
  for(var i=0;i<count;i++){
    var s = document.createElement('span');
    s.style.left = (Math.random()*100) + 'vw';
    s.style.background = colors[i % colors.length];
    s.style.animationDuration = (14 + Math.random()*10) + 's';
    s.style.animationDelay = (Math.random()*-20) + 's';
    s.style.width = (5 + Math.random()*4) + 'px';
    s.style.height = (8 + Math.random()*6) + 'px';
    host.appendChild(s);
  }
})();
