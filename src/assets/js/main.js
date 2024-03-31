document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('miVideo');

    // Intenta reproducir el video automáticamente al cargar
    var promise = video.play();

    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay iniciado
        }).catch(error => {
            // Autoplay fue bloqueado, intenta silenciar y reproducir
            video.muted = true;
            video.play();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('miVideo');
    video.muted = true;
    video.play().then(() => {
        // Una vez que el video comienza a reproducirse, intenta desactivar el silencio
        video.muted = false;
    }).catch(error => {
        console.error("La reproducción automática con sonido fue bloqueada por el navegador.");
        // Aquí podrías implementar una lógica alternativa, como mostrar un botón de reproducción
    });
});
