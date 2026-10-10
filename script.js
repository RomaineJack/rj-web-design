// Submit Crescera Design Group inquiries directly to Formspree.
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");
const statusMessage = document.getElementById("form-status");

if (form && submitButton && statusMessage) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    statusMessage.textContent = "Sending your message...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      statusMessage.textContent = "Thank you! Your project inquiry has been sent. We will be in touch soon.";
    } catch (error) {
      statusMessage.textContent = "Your inquiry could not be sent. Please try again.";
      console.error("Formspree submission error:", error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Project Inquiry";
    }
  });
}
