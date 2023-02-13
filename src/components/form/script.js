import './style.css';

export default function createForm(parent) {
  let form = document.createElement('form');
  form.classList.add('basicForm');
  parent.appendChild(form);

  return form;
}

export function createFormItem(parent, labelText, inputElement) {
  let formRow = document.createElement('div');
  formRow.classList.add('formRow');
  parent.appendChild(formRow);

  let label = document.createElement('label');
  label.innerText = labelText;
  label.for = inputElement.name;
  formRow.appendChild(label);

  formRow.appendChild(inputElement);

  return { formRow: formRow, label: label, input: inputElement };
}

export function createCancelSubmitButtons(parent, onCancel, onSubmit) {
  let buttons = document.createElement('div');
  buttons.classList.add('buttonsRow');
  parent.appendChild(buttons);

  let cancel = createButton('Cancel', 'button');
  cancel.type = 'button';
  cancel.addEventListener('click', (e) => {
    e.preventDefault();
    onCancel();
  });
  buttons.appendChild(cancel);

  let submit = createButton('Submit', 'submit');
  submit.type = 'submit';
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    onSubmit();
  });
  buttons.appendChild(submit);

  return { cancel, submit };
}

export function createInput(type, name, required) {
  let input = document.createElement('input');
  input.type = type;
  input.id = name;
  input.name = name;
  input.required = required;
  return input;
}

export function createButton(labelText, type) {
  let button = document.createElement('button');
  button.type = type;
  button.innerText = labelText;

  return button;
}
