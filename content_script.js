var selectedString;
var port = chrome.extension.connect({name: 'niceofwonder'});

document.addEventListener('mouseup', function() {
    selectedString = window.getSelection() + '';
    port.postMessage({selectedString: selectedString, status: 'start'});
});

