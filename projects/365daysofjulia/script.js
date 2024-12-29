// using d3 for convenience, and storing a selected elements
var $container = d3.select('#scroll');
var $graphic = $container.select('.scroll__graphic');
var $background = $graphic.select('.scroll__graphic img');
var $text = $container.select('.scroll__text');
var textContainer = document.querySelector('.scroll__text');
var $step = $text.selectAll('.step');
var $innerText = $step.selectAll('p')
var $dayCount = d3.select('.dayCount');

function initImgs() {
  for (var x = 1; x <= 364; x++) {
      (new Image).src = './imgs/julia_set_' + x + '.png';
  }
  return true;
}

function initSteps(data) {
  for(let i = 1; i <= 365; i++) {
    textContainer.innerHTML = textContainer.innerHTML + `
    <div
      class="step ${data[i] ? 'focus' : ''}"
      data-step="${i}"
    >
      ${data[i] ? `<p>${data[i]}</p>` : ''}
    </div>
    `;
  }
}

// initialize the scrollama
var scroller = scrollama();

function handleStepEnter(response) {
  const progress = response.index + 1;
  const bgImg = "./imgs/julia_set_" + progress + ".png";
  $background.attr("src", bgImg);
  $dayCount.text(`Day ${progress}`);
}

function renderMobileDisclaimer() {
  var $mobileDisclaimer = d3.select('#mobileDisclaimer');
  $mobileDisclaimer.style("display", "block");
}

function stopLoader() {
  let loaderContainer = document.getElementById('loader');
  loaderContainer.style.display = "none";
}

export default function init(steps, loader) {
  if (window.matchMedia("(max-width: 800px)").matches) {
    stopLoader();
    renderMobileDisclaimer();
    return;
  }

  window.onload = (event) => {
    stopLoader();
  };
  initSteps(steps);
  initImgs();

  scroller
    .setup({
      container: '#scroll', // our outermost scrollytelling element
      graphic: '.scroll__graphic', // the graphic
      text: '.scroll__text', // the step container
      step: '.scroll__text .step', // the step elements
    })
    .onStepEnter(handleStepEnter)
}