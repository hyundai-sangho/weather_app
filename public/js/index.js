const GoButton = document.querySelector('#GoButton')

GoButton.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    form.submit()
  }
})
