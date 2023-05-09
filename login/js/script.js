const passwordInput = document.querySelector('#password');

passwordInput.addEventListener('input', () => {
  const passwordLength = passwordInput.value.length;

  if (passwordLength >= 8) {
    passwordInput.classList.add('valid');
  } else {
    passwordInput.classList.remove('valid');
  }
})

const usernameInput = document.querySelector('#username');

usernameInput.addEventListener('input', ()=>
{
    const usernameValue = usernameInput.value
    if (usernameValue === "andreas")
    {
      usernameInput.classList.add('valid');
  } else {
    usernameInput.classList.remove('valid');
  }
    
})


