const elementos = document.querySelectorAll(".animar-texto");

elementos.forEach((elemento) => {
    const texto = elemento.textContent;
    elemento.textContent = "";

    let i = 0;
    let timeoutId;

    function escrever() {
        if (i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
            timeoutId = setTimeout(escrever, 40);
        }
    }

    function apagar() {
        if (i > 0) {
            elemento.textContent = texto.substring(0, i - 1);
            i--;
            timeoutId = setTimeout(apagar, 20);
        }
    }

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                clearTimeout(timeoutId);
                escrever();
            } else {
                clearTimeout(timeoutId);
                apagar();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
    });

    observer.observe(elemento);
});





        function rolarparamain_segundo() {
        document.getElementById("main_segundo").scrollIntoView({
            behavior: "smooth"
        });
        }
    

    
        function rolarparamain_terceiro() {
            document.getElementById("main_terceiro").scrollIntoView({
                behavior: "smooth"
            });
        }
    
        function rolarparamain_quarto() {
            document.getElementById("main_quarto").scrollIntoView({
                behavior: "smooth"
            });
        }