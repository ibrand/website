addEventListener('deviceorientation', event => {
  // left and right tilt
  // const extraImgWidth = .8; // representing the extra 80% of the 180% that the img is taking up
  let browserWidth = $(window).width();
  // let extraSpace = browserWidth * extraImgWidth;
  // let roomOnEachSide = extraSpace/2;
  // let imageX = browserWidth * .6

  let current = parseInt($('body').css('background-position-x').slice(0, -2));
  const limit = 30;
  const distance = 40;
  let right = false;
  let left = false;
  let center = false;
  let position = Math.round(event.gamma);
  if (position > limit) {
    right = true;
  }
  else if (position < limit && position > 0) {
    center = true;
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
  if (center) {
    $('body').css('background-position-x', -200 + 'px')
  }
  // $('body').css('background-position-x', current + position + 'px')
  $('h2').text(position)
});

function ofMap(value, min1, max1, min2, max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}
// window.addEventListener("deviceorientation", handleOrientation, true);

// function handleOrientation(event) {

// }