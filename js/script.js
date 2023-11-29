function mostrarElementoSegunDispositivo() {
    var userAgent = navigator.userAgent;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        document.getElementById("elementoMovil").style.display = "block";
    } else {
        document.getElementById("elementoEscritorio").style.display = "block";
    }
}

mostrarElementoSegunDispositivo();