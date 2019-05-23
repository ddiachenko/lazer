$(window).load(function() {
    particlesJS('particles-js', {
        'particles': {
            'number': {
                'value': 180,
                'density': {
                    'enable': true,
                    'value_area': 1600
                }
            },
            'color': {
                'value': '#ffffff'
            },
            'shape': {
                'type': 'circle',
                'stroke': {
                    'width': 0,
                    'color': '#000000'
                },
                'polygon': {
                    'nb_sides': 5
                },
                'image': {
                    'src': 'img/github.svg',
                    'width': 100,
                    'height': 100
                }
            },
            'opacity': {
                'value': 0.5,
                'random': false,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0.1,
                    'sync': false
                }
            },
            'size': {
                'value': 3,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 40,
                    'size_min': 0.1,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': true,
                'distance': 150,
                'color': '#ffffff',
                'opacity': 0.4,
                'width': 1
            },
            'move': {
                'enable': true,
                'speed': 6,
                'direction': 'none',
                'random': false,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'grab'
                },
                'onclick': {
                    'enable': true,
                    'mode': 'push'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 140,
                        'line_linked': {
                        'opacity': 1
                    }
                },
                'bubble': {
                    'distance': 400,
                    'size': 40,
                    'duration': 2,
                    'opacity': 8,
                    'speed': 3
                },
                'repulse': {
                    'distance': 200,
                    'duration': 0.4
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    });

    var logo1 = $('.decoration-logo-1');
    var logo2 = $('.decoration-logo-2');
    var logo3 = $('.decoration-logo-3');
    var logo4 = $('.decoration-logo-4');
    var logo5 = $('.decoration-logo-5');
    var logo6 = $('.decoration-logo-6');

    $(window).mousemove(function(e) {
        var change;
        var xpos = e.clientX;
        var ypos = e.clientY;
        var left = change * 20;

        xpos = xpos * 2;
        ypos = ypos * 2;

        logo1.css('top', 'calc(25% + ' + (ypos / 50) + 'px)');
        logo1.css('left', 'calc(-15% + ' + (xpos / 80) + 'px)');

        logo2.css('bottom', 'calc(10% + ' + (ypos / 80) + 'px)');
        logo2.css('left', 'calc(-15% - ' + (xpos / 50) + 'px)');

        logo3.css('top', 'calc(45% - ' + (ypos / 40) + 'px)');
        logo3.css('left', 'calc(15% + ' + (xpos / 140) + 'px)');

        logo4.css('top', 'calc(17% - ' + (ypos / 80) + 'px)');
        logo4.css('right', 'calc(-10% - ' + (xpos / 30) + 'px)');

        logo5.css('top', 'calc(50%; + ' + (ypos / 70) + 'px)');
        logo5.css('right', 'calc(-5% + ' + (xpos / 60) + 'px)');

        logo6.css('top', 'calc(60% - ' + (ypos / 30) + 'px)');
        logo6.css('right', 'calc(15% + ' + (xpos / 60) + 'px)');

    });
});
