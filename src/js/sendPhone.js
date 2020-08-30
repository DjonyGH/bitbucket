const inputPhone = document.getElementById('tel');
const btnPhone = document.querySelector('.form__btn');
const infMessage = document.querySelector('.form__inf');
const infMessageError = document.querySelector('.form__inf--error');

const maskOptions = {
  mask: '+7 000 000 0000',
  lazy: false
};
const mask = IMask(inputPhone, maskOptions);

const errorPhoneNumber = ['0000000000', '1111111111', '2222222222', '3333333333', '4444444444', '5555555555', '6666666666', '7777777777', '8888888888', '9999999999']

btnPhone.addEventListener('click', () => {
      if (errorPhoneNumber.indexOf(inputPhone.value.replace(/[\s_%]/g, '').slice(2)) != -1 || inputPhone.value.replace(/[\s_%]/g, '').slice(2).length < 10) {
          inputPhone.classList.add('error');
          infMessage.classList.add('d-none');
          infMessageError.classList.remove('d-none');
      } else 
      {
          const form = document.querySelector('.form');
          const xhr = new XMLHttpRequest();
          xhr.open(form.method, form.action, true);
          xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
          const userPhone = {
              "phone": inputPhone.value,
          };
          xhr.send(JSON.stringify(userPhone));


          const modalWindow3 = document.querySelector('#mw-3');
          const btnMW3Close = document.querySelector('.mw-3__close');

          modalWindow3.classList.remove('d-none');
          modalWindow3.classList.add('d-flex');
          document.body.style.overflowY = 'hidden';

          btnMW3Close.addEventListener('click', () => {
              modalWindow3.classList.add('d-none');
              modalWindow3.classList.remove('d-flex');
              document.body.style.overflowY = '';
          });

          modalWindow3.addEventListener('click', (e) => {
              if (e.target === modalWindow3) {
                  modalWindow3.classList.add('d-none');
                  modalWindow3.classList.remove('d-flex');
                  document.body.style.overflowY = '';
              }
          });

          mask.value = '';
    };
});

inputPhone.addEventListener('keyup', () => {
  if (errorPhoneNumber.indexOf(inputPhone.value.replace(/[\s_%]/g, '').slice(2)) == -1 && inputPhone.value.replace(/[\s_%]/g, '').slice(2).length == 10) {
    inputPhone.classList.remove('error');
    infMessage.classList.remove('d-none');
    infMessageError.classList.add('d-none');
  }  
});

