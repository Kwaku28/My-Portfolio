const vectors = document.querySelector('.vectors');
const navLink = document.querySelector('.nav-links');

vectors.addEventListener('click', () => {
  vectors.classList.toggle('active');
  navLink.classList.toggle('active');
});

document.querySelectorAll('ul.nav-links > li').forEach((n) => n
  .addEventListener('click', () => {
    vectors.classList.remove('active');
    navLink.classList.remove('active');
  }));

const openModelButtons = document.querySelectorAll('[data-model-target]');
const closeModelButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModelButtons.forEach(button => {
  button.addEventListener('click', () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(model);
  })
})

overlay.addEventListener('click', () => {
  const models = document.querySelectorAll('.model.active')
  models.forEach(model => {
    closeModel(model);
  })
})

closeModelButtons.forEach(button => {
  button.addEventListener('click', () => {
    const model = button.closest('.model');
    closeModel(model);
  })
})

function openModel(model) {
  if (model == null) return;
  model.classList.add('active');
  overlay.classList.add('active');
}

function closeModel(model) {
  if (model == null) return;
  model.classList.remove('active');
  overlay.classList.remove('active');
}

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const emailEl = document.getElementById('email');
const textArea = document.getElementById('type');
const form = document.getElementById('form');

const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let messages = [];

  const isRequired = value => value === '' ? false : true;

  function checkEmail() {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
      showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
      showError(emailEl, 'Email is not valid.');
    } else {
      showSuccess(emailEl);
      valid = true;
    }
    return valid;
  }

  const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return re.test(email);
  };

  if (messages,length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ');
  }
})
