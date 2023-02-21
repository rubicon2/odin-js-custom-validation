function listenForValidityOnFocusOut(inputField, checkValidity) {
  inputField.addEventListener('focusout', () => {
    if (!checkValidity()) {
      inputField.addEventListener('input', checkValidity);
      inputField.addEventListener('input', removeListenerOnValid);
      function removeListenerOnValid() {
        if (checkValidity()) {
          inputField.removeEventListener('input', checkValidity);
          inputField.removeEventListener('input', removeListenerOnValid);
        }
      }
    }
  });
}

export { listenForValidityOnFocusOut };
