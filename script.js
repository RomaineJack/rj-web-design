// The contact form uses a standard HTML POST to FormSubmit.
// Avoid intercepting submission with JavaScript: normal navigation lets
// the visitor see the provider's confirmation or email activation page.
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");
const statusMessage = document.getElementById("form-status");
if (form && submitButton && statusMessage) {
  form.addEventListener("submit", function () {
    // This event does not call preventDefault().
    // The browser submits the form to the action URL.
    statusMessage.textContent = "Opening the secure form confirmation page...";
    submitButton.textContent = "Sending...";
  });
}
