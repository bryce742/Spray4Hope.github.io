// Get the submit button and input elements
document.addEventListener('DOMContentLoaded', function() {

  const submitButton = document.getElementById('submit-button');
  const nameInput = document.getElementById('name-input');

  // Get the list element where we will display signed names
  const signedNamesList = document.getElementById('signed-names-list');

  // Create an array to hold signed names
  let signedNames = [];

  // Add an event listener to the submit button
  submitButton.addEventListener('click', function() {
    // Get the name entered in the input field
    const name = nameInput.value;

    // Add the name to the signed names array
    signedNames.push(name);

    // Clear the input field
    nameInput.value = '';

    // Update the list of signed names
    updateSignedNamesList();
  });

  // Function to update the list of signed names
  function updateSignedNamesList() {
    // Clear the list
    signedNamesList.innerHTML = '';

    // Loop through the signed names array and add each name to the list
    signedNames.forEach(function(name) {
      const listItem = document.createElement('li');
      listItem.textContent = name;
      signedNamesList.appendChild(listItem);
    });
  }
});
