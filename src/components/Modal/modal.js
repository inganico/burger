const modalBtns = document.querySelectorAll('.modal-open');
const modals = document.querySelectorAll('.modal');
const body = document.body;

function openModal (elem) {
  elem.classList.add('active')
  body.classList.add('locked')
}

function closeModal(event) {
  if (event.target.classList.contains('modal-close')|| event.target.closest('.modal-close') || event.target.classList.contains('modal-bg')) {
    event.target.closest('.modal').classList.remove('active')
    body.classList.remove('locked')
  }
}

modalBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    let data = event.target.dataset.modalOpen
    
    modals.forEach(modal => {
      if (modal.dataset.modal == data || modal.dataset.modal == event.target.closest('.modal-open').dataset.modalOpen) {
        openModal(modal)
      }
    })
  })
})

modals.forEach(modal => {
  modal.addEventListener('click', event => closeModal(event))
}) 

window.addEventListener('keydown', event => {
  modals.forEach(modal => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      body.classList.remove('locked');
    }
  })
})