// Sends the mailing-list form to MailerLite in the background and shows the
// result on the page. Without JavaScript the form still posts normally.

const form = document.querySelector(".signup");
const status = form.querySelector(".status");
const button = form.querySelector("button");

const messages = {
  success: "Thank you for subscribing.",
  invalid: "Please check the email address.",
  error: "Something went wrong. Please try again.",
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  button.disabled = true;
  status.textContent = "";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
    });
    const data = await response.json();

    if (data.success) {
      form.classList.add("done");
      status.textContent = messages.success;
      return;
    }
    // Log MailerLite's own explanation (e.g. "reCAPTCHA failed") for debugging.
    console.error("MailerLite signup failed:", data);
    status.textContent = data.errors?.fields?.email ? messages.invalid : messages.error;
  } catch (error) {
    console.error("MailerLite signup failed:", error);
    status.textContent = messages.error;
  }

  button.disabled = false;
});
