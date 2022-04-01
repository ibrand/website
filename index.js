addEventListener('deviceorientation', event => {
  let current = parseInt($('body').css('background-position-x').slice(0, -2));
  const limit = 10;
  const distance = 60;
  let right = false;
  let left = false;
  let position = Math.round(event.gamma);
  if (position > limit) {
    right = true;
  }
  else if (position < limit) {
    left = true;
  }
  
  if (right) {
    $('body').css('background-position-x', -200 + distance + 'px')
  }
  if (left) {
    $('body').css('background-position-x', -200 - distance + 'px')
  }
});