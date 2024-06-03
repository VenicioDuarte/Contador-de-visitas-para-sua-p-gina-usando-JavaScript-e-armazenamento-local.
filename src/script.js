document.addEventListener('DOMContentLoaded', () => {
    const elementoContadorVisitas = document.getElementById('visit-count');
    const chaveContadorVisitas = 'contadorVisitas';
    const chaveSessao = 'tempoUltimaSessao';

    
    let tempoUltimaSessao = sessionStorage.getItem(chaveSessao);
    const tempoAtual = new Date().getTime();

    if (!tempoUltimaSessao) {
        
        sessionStorage.setItem(chaveSessao, tempoAtual);

        
        let contadorVisitas = localStorage.getItem(chaveContadorVisitas);

        if (contadorVisitas) {
            
            contadorVisitas = parseInt(contadorVisitas, 10) + 1;
        } else {
            
            contadorVisitas = 1;
        }

        
        localStorage.setItem(chaveContadorVisitas, contadorVisitas);
        elementoContadorVisitas.textContent = contadorVisitas;
    } else {
        
        sessionStorage.setItem(chaveSessao, tempoAtual);

        
        let contadorVisitas = localStorage.getItem(chaveContadorVisitas);

        if (contadorVisitas) {
            
            contadorVisitas = parseInt(contadorVisitas, 10) + 1;
        } else {
            
            contadorVisitas = 1;
        }

        
        localStorage.setItem(chaveContadorVisitas, contadorVisitas);
        elementoContadorVisitas.textContent = contadorVisitas;
    }
});