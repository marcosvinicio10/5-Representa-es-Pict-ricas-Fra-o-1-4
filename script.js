const mosaico = document.querySelector('.mosaico');
        const pixels4 = [
            17,27,37,47,57,67,77,87,97, 76,65,64,63,62,61,31,41,51,61,7,21,66,86,96,1,11
        ]; 

        for (let i = 0; i < 100; i++) {
            const quadrado = document.createElement('div');
            quadrado.classList.add('quadrado');
            if (pixels4.includes(i)) {
                quadrado.classList.add('pintado');
            }
            mosaico.appendChild(quadrado);
        }