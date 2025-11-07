function Selector(el) {
            return document.querySelector(el);
        }

        let count = 0;

        Selector('.next').addEventListener('click', function () {
            if (count < 2) {
                count++;
                Selector('.pizza-banner').style.transform = `translateX(-${count * 100}vw)`;
            }
        })

        Selector('.prev').addEventListener('click', function () {
            if (count > 0) {
                count--;
                Selector('.pizza-banner').style.transform = `translateX(-${count * 100}vw)`;
            }
        })