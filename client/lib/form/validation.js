const inputs = document.querySelectorAll('input')

export default () => {
  inputs.forEach((input) => {
    input.addEventListener('blur', (event) => {
      const currentInput = event.target
      const regex = new RegExp(currentInput.pattern)

      if (
        !regex.test(currentInput.value.toUpperCase()) ||
        !currentInput.value
      ) {
        currentInput.classList.replace('is-success', 'is-error') ||
          currentInput.classList.add('is-error')
      } else {
        currentInput.classList.replace('is-error', 'is-success') ||
          currentInput.classList.add('is-success')
      }
    })
  })
}
