const connections = document.getElementsByClassName("connection");

const executeConnection = (e) => {
    const poemToLinkToId = e.target.getAttribute("data-link-id");
    const targetElement = document.querySelector(`[data-id="${poemToLinkToId}"]`);
    // alternate way to do this with visibility which leaves the gaps as opposed to fadeToggle
    // which uses display:none so doesn't leave gaps:
    // targetElement.style.visibility == 'hidden' ? targetElement.style.visibility = 'visible' : targetElement.style.visibility = 'hidden';
    $(targetElement).fadeToggle('2s')
};

Array.from(connections).forEach((element) => {
    element.addEventListener('click', executeConnection);
});