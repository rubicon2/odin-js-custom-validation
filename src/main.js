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
} from './components/form/script';

const body = document.querySelector('body');
let detailsForm = null;

let showMenuButton = createButton('Show Form', 'button');
body.appendChild(showMenuButton);
showMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  createDetailsForm(body);
});

function createDetailsForm(parent) {
  let overlay = createOverlay(parent);
  detailsForm = createForm(overlay);
  detailsForm.noValidate = true;

  createFormItem(detailsForm, 'Email', createInput('email', 'email', true));
  createFormItem(detailsForm, 'Country', createInput('text', 'country', true));

  let postcodeInput = createInput('text', 'postcode', true);
  postcodeInput.pattern =
    '[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}';
  let postcodeRow = createFormItem(detailsForm, 'Postcode', postcodeInput);
  postcodeRow.input.required = true;

  createFormItem(
    detailsForm,
    'Password',
    createInput('password', 'password', true)
  );

  createFormItem(
    detailsForm,
    'Confirm password',
    createInput('password', 'confirm', true)
  );

  createCancelSubmitButtons(
    detailsForm,
    () => fadeOutAndRemove(overlay),
    () => submitDetailsForm()
  );

  // Fade in once form has been constructed
  fadeIn(overlay);
  return overlay;
}

function submitDetailsForm() {
  if (valdiateDetailsForm()) detailsForm.submit();
}

function valdiateDetailsForm() {}
