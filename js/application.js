// Wait till the browser is ready to render the tiles (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function toggleLabels() {
    if (document.getElementById('tiles').classList.contains('labels')) {
        document.getElementById('tiles').classList.remove('labels');
    } else {
        document.getElementById('tiles').classList.add('labels');
    }
}
