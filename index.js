addEventListener('deviceorientation', event => {
  // left and right tilt
  // const extraImgWidth = .8; // representing the extra 80% of the 180% that the img is taking up
  let browserWidth = $(window).width();
  // let extraSpace = browserWidth * extraImgWidth;
  // let roomOnEachSide = extraSpace/2;
  // let imageX = browserWidth * .6

  let current = parseInt($('body').css('background-position-x').slice(0, -2));
  const limit = 45;
  let position = Math.round(event.gamma);
  if (Math.abs(position) > limit) {
    if (position > limit) {
        position = limit;
    } else {
        position = -limit;
    }
  }
  // position = position / -100;
  
  $('body').css('background-position-x', current + position + 'px')
  $('h2').text(current - position + 'px')
});

function ofMap(value, min1, max1, min2, max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}
// window.addEventListener("deviceorientation", handleOrientation, true);

// function handleOrientation(event) {

// }