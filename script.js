// RJ Web Design contact form: submit without opening an email application.
const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");
const submitButton = document.getElementById("contact-submit");

if (form && statusMessage && submitButton) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    if (String(formData.get("_honey") || "").trim()) return;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    statusMessage.textContent = "Sending your inquiry...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      const result = await response.json();
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Submission was not accepted.");
      }

      statusMessage.textContent = "Your inquiry has been submitted. We'll get back to you soon.";
      form.reset();
    } catch (error) {
      statusMessage.textContent = "We couldn't send your message. Please try again later.";
      console.error("Contact form submission failed:", error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });
}
