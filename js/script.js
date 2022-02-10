document.addEventListener('DOMContentLoaded', (event) => {
    
    slider01();
    function slider01() {

        
        let imgs, totalImgs, bullets, bulletsToggle, indexAtual;

        imgs = document.querySelectorAll(' .box1 .slider_img img'); // imagens
        totalImgs = document.querySelectorAll(' .box1 .slider_img img').length; // Total imagens
        bullets = document.querySelector(' .box1 .slider_bullets '); // bullets toggle
        indexAtual = 0; // interagindo com os indices das imagens

         


        /*
         * -----------------------------------------
         * Slider Automatico com SEGUNDOS....
         * ---------------------------------------
        */

        sliderAutomatico();
        function sliderAutomatico() {
            imgs[indexAtual].style.opacity = 1;
            
            for(var i = 0; i < totalImgs; i++) {
                if( i == 0 ) {
                    bullets.innerHTML += `<span class="bullets_toggle" style="background: #000000"> </span>`;
                }else {
                    bullets.innerHTML += `<span class="bullets_toggle" > </span>`;
                }
            }

            setInterval( ()=> {
                bulletsToggle = document.querySelectorAll(' .box1 .slider_bullets .bullets_toggle '); // bullets toggle ou os <span> </span>

                imgs[indexAtual].style.opacity = 0;
                bulletsToggle[indexAtual].style.backgroundColor = '#ffffff';

                indexAtual++;

                if(indexAtual == totalImgs) {
                    indexAtual = 0;
                }

                imgs[indexAtual].style.opacity = 1;
                bulletsToggle[indexAtual].style.backgroundColor = '#000000';

            }, 5000);
        }// * Slider Automatico com SEGUNDOS....

        // ----------------------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------------------



        /*
         * -----------------------------------------
         * Slider Interagindo com os BULLETS....
         * ---------------------------------------
        */

        interacaoBullets();
        function interacaoBullets() {
            bulletsToggle = document.querySelectorAll(' .box1 .slider_bullets .bullets_toggle '); // bullets toggle ou os <span> </span>
            
            bulletsToggle.forEach( (value, index) => {
                bulletsToggle[index].addEventListener('click', ()=> {
                    imgs[indexAtual].style.opacity = 0;
                    bulletsToggle[indexAtual].style.backgroundColor = '#ffffff';

                    imgs[index].style.opacity = 1;
                    bulletsToggle[index].style.backgroundColor = '#000000';

                    indexAtual = index;

                })
            })

        }// * Slider Interagindo com os BULLETS....

        // ----------------------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------------------




        /*
         * -----------------------------------------
         * Slider Interagindo com ARROWS ou BOTÕES....
         * ---------------------------------------
        */

        botaoArrow();
        function botaoArrow() {
            buttonDireita();
            function buttonDireita() {
                let buttonDireita = document.querySelectorAll('.box1 .slider_button .button_direita'); // Botão Direita

                buttonDireita[indexAtual].addEventListener('click', ()=> {
                    imgs[indexAtual].style.opacity = 0;
                    bulletsToggle[indexAtual].style.backgroundColor = '#ffffff';

                    if(indexAtual == 0) {
                        indexAtual = totalImgs;
                    }

                    indexAtual--;

                    imgs[indexAtual].style.opacity = 1;
                    bulletsToggle[indexAtual].style.backgroundColor = '#000000';
                
                });

            }// * Botão clique Direita.....

            buttonEsquerda();
            function buttonEsquerda() {
                let buttonEsquerda = document.querySelectorAll('.box1 .slider_button .button_esquerda'); // Botão Esquerda

                buttonEsquerda[indexAtual].addEventListener('click', ()=> {
                    imgs[indexAtual].style.opacity = 0;
                    bulletsToggle[indexAtual].style.backgroundColor = '#ffffff';

                    indexAtual++;

                    if(indexAtual == totalImgs) {
                        indexAtual = 0;
                    }

                    imgs[indexAtual].style.opacity = 1;
                    bulletsToggle[indexAtual].style.backgroundColor = '#000000';
                
                });

            }// * Botão clique Esquerda.....

        }// * function botão ARROW()

        // ----------------------------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------------------------



        
 

    }
    
})