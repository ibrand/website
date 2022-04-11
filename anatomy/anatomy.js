const connections = document.getElementsByClassName("connection");

function executeConnection(e) {
    const poemToLinkToId = e.target.getAttribute("data-link-id");
    const targetElement = document.querySelector(`[data-id="${poemToLinkToId}"]`);
    adjustProximity(targetElement.dataset.proximity);
    // alternate way to do this with visibility which leaves the gaps as opposed to fadeToggle
    // which uses display:none so doesn't leave gaps:
    // targetElement.style.visibility == 'hidden' ? targetElement.style.visibility = 'visible' : targetElement.style.visibility = 'hidden';
    $(targetElement).fadeToggle('2s')
};

function adjustProximity(proximity) {
    const isMobile = window.matchMedia("(max-width: 500px)").matches;
    if (isMobile) {
        switch(proximity) {
            case 'far':
                $('body').css('background-size', '180%');
              break;
            case 'close':
                $('body').css('background-size', '200%');
              break;
            case 'intimate':
                $('body').css('background-size', '230%');
            default:
                $('body').css('background-size', '180%');
          }
    } else {
        switch(proximity) {
            case 'far':
                $('body').css('background-size', '100%');
              break;
            case 'close':
                $('body').css('background-size', '120%');
              break;
            case 'intimate':
                $('body').css('background-size', '150%');
            default:
                $('body').css('background-size', '100%');
          }
    }
}

Array.from(connections).forEach((element) => {
    element.addEventListener('click', executeConnection);
});