document.addEventListener("DOMContentLoaded", function () {

    const secciones = document.querySelectorAll("section[id], header[id]");
    const linksNav = document.querySelectorAll(".navbar-nav .nav-link");
    const btnSubir = document.getElementById("btnSubir");

    function marcarLinkActivo() {
        let actual = "";

        secciones.forEach(function (seccion) {
            const topeSeccion = seccion.offsetTop - 90;
            if (window.scrollY >= topeSeccion) {
                actual = seccion.getAttribute("id");
            }
        });

        linksNav.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + actual) {
                link.classList.add("active");
            }
        });
    }

    function mostrarBotonSubir() {
        if (window.scrollY > 300) {
            btnSubir.classList.add("mostrar");
        } else {
            btnSubir.classList.remove("mostrar");
        }
    }

    window.addEventListener("scroll", function () {
        marcarLinkActivo();
        mostrarBotonSubir();
    });

    btnSubir.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    linksNav.forEach(function (link) {
        link.addEventListener("click", function () {
            const menu = document.getElementById("menuNav");
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            }
        });
    });

    marcarLinkActivo();
});
