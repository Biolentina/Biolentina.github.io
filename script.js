// Arreglo de imágenes con fondo transparente
    const images = [
      'https://drive.google.com/file/d/115SsceUAQjokcLVk0BN0AYpyG9CwxxPU/view?usp=share_link',
      'https://drive.google.com/file/d/1c8GI16c-1oOUiClG-HjYEPCwXCH-u1c6/view?usp=sharing',
      'https://drive.google.com/file/d/1c8GI16c-1oOUiClG-HjYEPCwXCH-u1c6/view?usp=sharing',
      'https://drive.google.com/file/d/1c8GI16c-1oOUiClG-HjYEPCwXCH-u1c6/view?usp=sharing',
      'https://drive.google.com/file/d/1GbLkJ2zLejwfgAZBDVBKZWXAEZSLTfBR/view?usp=share_link', 
      'https://drive.google.com/file/d/1GbLkJ2zLejwfgAZBDVBKZWXAEZSLTfBR/view?usp=share_link',
      'https://drive.google.com/file/d/1GbLkJ2zLejwfgAZBDVBKZWXAEZSLTfBR/view?usp=share_link',
      'https://drive.google.com/file/d/1GbLkJ2zLejwfgAZBDVBKZWXAEZSLTfBR/view?usp=share_link',
      'https://drive.google.com/file/d/1GbLkJ2zLejwfgAZBDVBKZWXAEZSLTfBR/view?usp=share_link',
      'https://drive.google.com/file/d/1esJR_bvVaLV_-SjMnNAKON7kk7nzq_Pd/view?usp=share_link',

    ];

    // Función para crear y posicionar imágenes aleatoriamente
    function createImage(x, y) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const imgSrc = images[randomIndex];
      const img = new Image();
      img.src = imgSrc;
      img.classList.add('transparent-image');
      img.style.left = x + 'px';
      img.style.top = y + 'px';
      document.getElementById('container').appendChild(img);
      setTimeout(() => img.remove(), 5000); // Eliminar la imagen después de 5 segundos
    }

    // Crear una imagen al hacer clic en el contenedor
    document.getElementById('container').addEventListener('click', (event) => {
      createImage(event.clientX, event.clientY);
    });

    // Controlar el avance y retroceso del video con el scroll del mouse
    const video = document.getElementById('videoPlayer');
    document.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        video.currentTime += 5; // avanza el video 5 segundos hacia adelante
      } else {
        video.currentTime -= 5; // retrocede el video 5 segundos hacia atrás
      }
    });

    // Iniciar el video en un momento aleatorio
    video.currentTime = Math.floor(Math.random() * video.duration);
