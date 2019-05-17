var urlParams = new URLSearchParams(window.location.search);

var codeText = document.getElementById('authCode');
var copyButton = document.getElementById('copy-button');
var clipboard = new ClipboardJS(copyButton);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

if (urlParams.has('code')){
    console.log('Query param for code present')
    var authCode = urlParams.get('code')
    if (authCode !== null && authCode.length > 0) {
        codeText.textContent = authCode;
    }
    else {
        codeText.textContent = 'Invalid Auth Code';
    }
}
else {
    codeText.textContent = 'No authorization code present.';
}

function copyText() {

    /* Get the text field */
    var copyText = document.getElementById('authCode').textContent;

    new ClipboardJS('.btn', {
        text: function(trigger) {
            return copyText;
        }
    });

    options = {
        title: 'Copied!',
        trigger: 'manual'
    }

    $('#copy-button').tooltip(options)
    $('#copy-button').tooltip('show')

    setTimeout(() => {
        $('#copy-button').tooltip('hide')
    }, 1000);
  
    /* Select the text field */
    // copyText.select();
  
    /* Copy the text inside the text field */
    // document.execCommand("copy");
  
    /* Alert the copied text */
    // alert("Code has been copied to your clipboard.");
  }