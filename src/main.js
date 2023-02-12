import './style.css';
import createOverlay, {
  fadeIn,
  fadeOutAndRemove,
} from './components/centeredOverlay/script';
import createForm, {
  createCancelSubmitButtons,
  createFormItem,
  createInput,
  createButton,
  validateForm,
} from './components/form/script';

const body = document.querySelector('body');

let showMenuButton = createButton('Show Form', 'button');
body.appendChild(showMenuButton);
showMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  createDetailsForm(body);
});

function createDetailsForm(parent) {
  let overlay = createOverlay(parent);
  let form = createForm(overlay);

  createFormItem(form, 'Email', createInput('email'));
  createFormItem(form, 'Country', createInput('text'));

  let postcodeInput = createInput('text');
  postcodeInput.pattern =
    '[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}';
  createFormItem(form, 'Postcode', postcodeInput);

  createFormItem(form, 'Password', createInput('password'));
  createFormItem(form, 'Confirm password', createInput('password'));

  createCancelSubmitButtons(
    form,
    () => fadeOutAndRemove(overlay),
    () => validateForm(form)
  );

  // Fade in once form has been constructed
  fadeIn(overlay);
  return overlay;
}
