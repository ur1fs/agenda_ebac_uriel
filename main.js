const contactForm = document.getElementById("contact-form");
const contactsList = document.getElementById("contacts-list");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");

  const name = nameInput.value;
  const phone = phoneInput.value;

  if (name && phone) {
    addContact(name, phone);
    nameInput.value = "";
    phoneInput.value = "";
  }
});

function addContact(name, phone) {
  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");
  const phoneCell = document.createElement("td");
  const deleteButtonCell = document.createElement("td");

  nameCell.textContent = name;
  phoneCell.textContent = phone;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.addEventListener("click", function() {
    contactsList.removeChild(newRow);
  });

  deleteButtonCell.appendChild(deleteButton);
  newRow.appendChild(nameCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(deleteButtonCell);

  contactsList.appendChild(newRow);
}
