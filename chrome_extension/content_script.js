var selectedString;
var port = chrome.extension.connect({name: 'niceofwonder'});

document.addEventListener('mouseup', function() {
    console.log(window.location.href);
    selectedString = window.getSelection() + '';
    port.postMessage({selectedString: selectedString, url: window.location.href,
                      title: document.title, status: 'start'});
});

