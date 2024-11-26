const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input');
const messageTextarea = form.querySelector('textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
});

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
