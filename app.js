function bold() {
    document.execCommand(
        'bold',
        false,
        ''
    )
}

function italic() {
    document.execCommand(
        'italic',
        false,
        ''
    )
}

function underline() {
    document.execCommand(
        'underline',
        false,
        ''
    )
}

function cut() {
    document.execCommand(
        'cut',
        false,
        ''
    )
}

function paste() {

}

function createLink() {
    var link = prompt("Enter link")
    document.execCommand(
        'createLink',
        false,
        link
    )
}

function changeFont(e) {

}
