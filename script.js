const letras = document.querySelectorAll('.letra');
const texto = document.getElementById('texto');

letras.forEach(boton => {
  boton.addEventListener('click', () => {
    const letra = boton.getAttribute('data-letra');
    
    texto.textContent = letra;  // Mostrar solo la letra seleccionada

    // Crear una instancia de SpeechSynthesisUtterance con solo la letra
    const voz = new SpeechSynthesisUtterance(letra);
    voz.lang = 'es-MX';  // Puedes cambiar a 'es-MX', 'es-US', etc.
    
    // Ajuste del tono (pitch) - valores entre 0 (bajo) y 2 (alto)
    voz.pitch = 2;  // Aumenta el tono (más agudo)
    // voz.pitch = 0.5;  // Baja el tono (más grave)
    
    speechSynthesis.speak(voz);  // Hablar solo la letra con el tono ajustado
  });
});

