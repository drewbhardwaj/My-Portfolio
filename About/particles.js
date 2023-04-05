let container = document.querySelector('.container')
        // Particle setting
        const particle_count = 1000;
        const particle_size = '1rem';
        const particle_distance = '100vh';
        const particle_minSpeed = 1000;  // ms
        const particle_maxSpeed = 5500; // ms
        const particle_maxDelay = 12000; // ms
        // Randomize bubles
        for (let i = 1; i < particle_count; i++) {
            // random animation speed
            let speed = getRndInteger(particle_minSpeed,particle_maxSpeed) + '0ms';
            // if (speed < particle_maxSpeed) {
            //     speed = particle_minSpeed + '0ms';
            // }

            left = Math.floor(Math.random() * 100) + '%';
            animationDelay = Math.floor(Math.random() * particle_maxDelay) + 'ms';
            animation = `animate ${speed} infinite ${animationDelay}`;

            let particle = document.createElement('div');
            particle.setAttribute('class', 'particle');
            particle.style.width = Math.floor(Math.random() * 6) + 'px';
            particle.style.left = left;
            particle.style.animation = animation;

            container.appendChild(particle);
        }
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }