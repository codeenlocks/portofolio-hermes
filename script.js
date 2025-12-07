// script.js

// Lancer l'animation une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, // Nombre de particules
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#11bdb4" // VOTRE COULEUR PRIMAIRE !
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#11bdb4", // VOTRE COULEUR PRIMAIRE !
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5, // Vitesse de déplacement
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Les particules réagissent quand vous passez la souris
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
        },
        "retina_detect": true
    });
});