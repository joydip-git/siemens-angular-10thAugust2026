function clicked() {
    window.alert('welcome to JS')
}
window.addEventListener('DOMContentLoaded',
    function () {
        var button = document.getElementById('btnClick')
        button.addEventListener('click', clicked)
    }
)