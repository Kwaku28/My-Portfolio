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

// Popup Window
const openModelButtons = document.querySelectorAll('[data-model-target]');
const closeModelButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModel(model);
  });
});

overlay.addEventListener('click', () => {
  const models = document.querySelectorAll('.model.active')
  models.forEach((model) => {
    closeModel(model);
  });
});

closeModelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const model = button.closest('.model');
    closeModel(model);
  });
});

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

// Form Validation
const email = document.querySelector('#E_mail');
const error = document.querySelector('#Feed_back');
const form = document.querySelector('#Form');
const emailValidation = (input) => {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
};
form.addEventListener('submit', (event) => {
  error.innerHTML = '';
  if (emailValidation(email.value)) {
    error.innerHTML = '';
  } else {
    event.preventDefault();
    error.innerHTML = 'oops! Email should be in lower case!';
  }
});
