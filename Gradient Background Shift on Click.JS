    function randomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    document.body.addEventListener('click', () => {
        const color1 = randomColor();
        const color2 = randomColor();
        document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    });
