console.log("RJ Web Design is working!");

console.log("RJ Web Design is working!");

// Find the contact form on our webpage
const form = document.getElementById("contact-form");

// Find the paragraph where messages will appear
const statusMessage = document.getElementById("form-status");

// Listen for someone submitting the form
form.addEventListener("submit", function(event) {

  // Stop the page from refreshing
  event.preventDefault();

  // Get the information entered by the visitor
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check whether any field is empty
  if (!name || !email || !message) {
    statusMessage.textContent = "Please complete every field.";
    return;
  }

  // Prepare the email subject
  const subject = encodeURIComponent(
    "Website inquiry from " + name
  );

  // Prepare the email body
  const body = encodeURIComponent(
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Project Details:\n" + message
  );

  // Replace this with your own email address
  const destination = "Romainejackson9@gmail.com";

  // Tell the visitor what happens next
  statusMessage.textContent =
    "Your email application should open. Please send the prepared email to finish.";

  // Open the visitor's email application
  window.location.href =
    "mailto:" + destination +
    "?subject=" + subject +
    "&body=" + body;

});
