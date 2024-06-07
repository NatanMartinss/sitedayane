
    document.addEventListener('DOMContentLoaded', function() {
        var img = document.getElementById('geladeira-img');
        var audio = document.getElementById('geladeira-audio');
        var audio2 = document.getElementById('geladeira-audio2');
        var newImg = document.getElementById('new-img');
        var message = document.getElementById('message');
        var clicked = 0;

        img.addEventListener('click', function() {
            if (clicked === 0) {
                // Tocar o áudio
                audio.play();
                
                // Adicionar a classe de animação
                img.classList.add('shake');

                // Remover a classe de animação após a duração da animação
                setTimeout(function() {
                    img.classList.remove('shake');
                }, 500); // A duração deve coincidir com a duração da animação CSS
            } else if (clicked === 1) {
                // Mostrar e animar a nova imagem
                newImg.style.display = 'block';
                newImg.classList.add('grow');

                // Mostrar a mensagem após a animação
                setTimeout(function() {
                    message.style.display = 'block';
                }, 1000); 
                
                audio2.play()// A duração deve coincidir com a duração da animação grow
            }
            clicked++;
        });
    });