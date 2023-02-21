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
import { listenForValidityOnFocusOut } from './modules/DOMEventHelpers';

const body = document.querySelector('body');
let detailsForm = null;

let showMenuButton = createButton('Show Form', 'button');
body.appendChild(showMenuButton);
showMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  createDetailsForm(body);
});

function setFormItemError(formItem, msg) {
  formItem.input.setCustomValidity(msg);
  formItem.input.classList.add('invalid');
  formItem.error.innerText = msg;
  formItem.error.classList.remove('hidden');
}

function clearFormItemError(formItem) {
  formItem.input.setCustomValidity('');
  formItem.input.classList.remove('invalid');
  formItem.error.innerText = '';
  formItem.error.classList.add('hidden');
}

function createDetailsForm(parent) {
  let overlay = createOverlay(parent);
  detailsForm = createForm(overlay);
  detailsForm.noValidate = true;

  let emailFormItem = createFormItem(
    detailsForm,
    'Email',
    createInput('email', 'email', true)
  );
  listenForValidityOnFocusOut(emailFormItem.input, () => {
    if (emailFormItem.input.validity.valueMissing) {
      setFormItemError(emailFormItem, 'Please enter an email address');
    } else if (emailFormItem.input.validity.typeMismatch) {
      setFormItemError(
        emailFormItem,
        'Please enter a proper email address with an @ sign and everything...'
      );
    } else {
      clearFormItemError(emailFormItem);
      return true;
    }
    return false;
  });

  let countryFormItem = createFormItem(
    detailsForm,
    'Country',
    createInput('text', 'country', true)
  );
  listenForValidityOnFocusOut(countryFormItem.input, () => {
    if (countryFormItem.input.validity.valueMissing) {
      setFormItemError(
        countryFormItem,
        'Please enter a real or fictional country.'
      );
    } else {
      clearFormItemError(countryFormItem);
      return true;
    }
    return false;
  });

  let postcodeFormItem = createFormItem(
    detailsForm,
    'Postcode',
    createInput('text', 'postcode', true)
  );
  postcodeFormItem.input.pattern =
    '[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}';
  listenForValidityOnFocusOut(postcodeFormItem.input, () => {
    if (postcodeFormItem.input.validity.valueMissing) {
      setFormItemError(postcodeFormItem, 'Please enter a postcode.');
    } else if (postcodeFormItem.input.validity.patternMismatch) {
      setFormItemError(postcodeFormItem, 'Please enter a VALID UK postcode.');
    } else {
      clearFormItemError(postcodeFormItem);
      return true;
    }
    return false;
  });

  let passwordFormItem = createFormItem(
    detailsForm,
    'Password',
    createInput('password', 'password', true)
  );
  // This pattern seems to be producing some weird results
  passwordFormItem.input.pattern =
    '(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$';
  listenForValidityOnFocusOut(passwordFormItem.input, () => {
    if (passwordFormItem.input.validity.valueMissing) {
      setFormItemError(passwordFormItem, 'Please enter a password.');
    } else if (passwordFormItem.input.validity.patternMismatch) {
      setFormItemError(passwordFormItem, 'Pattern mismatch bro');
    } else {
      clearFormItemError(passwordFormItem);
      return true;
    }
    return false;
  });

  let confirmPasswordFormItem = createFormItem(
    detailsForm,
    'Confirm password',
    createInput('password', 'confirm', true)
  );
  listenForValidityOnFocusOut(confirmPasswordFormItem.input, () => {
    if (passwordFormItem.input.value != confirmPasswordFormItem.input.value) {
      setFormItemError(confirmPasswordFormItem, 'Passwords do not match.');
    } else {
      clearFormItemError(confirmPasswordFormItem);
      return true;
    }
    return false;
  });

  createCancelSubmitButtons(
    detailsForm,
    () => fadeOutAndRemove(overlay),
    () => submitDetailsForm()
  );

  // Fade in once form has been constructed
  fadeIn(overlay);
  return overlay;
}

function submitDetailsForm() {}
