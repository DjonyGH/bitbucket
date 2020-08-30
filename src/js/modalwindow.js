(() => {
    const callModalWindow = (trigger, modal, close) => {
        trigger.addEventListener('click', () => {
            modal.classList.remove('d-none');
            modal.classList.add('d-flex');
            document.body.style.overflowY = 'hidden';
            modal.style.overflowY = 'scroll';
        });
        close.addEventListener('click', () => {
            modal.classList.add('d-none');
            modal.classList.remove('d-flex');
            document.body.style.overflowY = '';
            modal.style.overflowY = '';
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('d-none');
                modal.classList.remove('d-flex');
                document.body.style.overflowY = '';
                modal.style.overflowY = '';
            }
        })
    };

    const modalWindow1 = document.querySelector('#mw-1');
    const btnMW1Close = document.querySelector('.mw-1__close');
    const btnMW1Open = document.querySelector('#btn-left');
    const btnMW11Open = document.querySelector('#device-1');


    const modalWindow2 = document.querySelector('#mw-2');
    const btnMW2Close = document.querySelector('.mw-2__close');
    const btnMW2Open = document.querySelector('#btn-right');
    const btnMW21Open = document.querySelector('#device-2');

    callModalWindow(btnMW1Open, modalWindow1, btnMW1Close);
    callModalWindow(btnMW2Open, modalWindow2, btnMW2Close);
    callModalWindow(btnMW11Open, modalWindow1, btnMW1Close);
    callModalWindow(btnMW21Open, modalWindow2, btnMW2Close);


})();