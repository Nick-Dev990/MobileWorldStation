const authConfig = window.MWS_AUTH_CONFIG || { enabled: false, apiBasePath: "/api/auth" };
const accountDialog = document.getElementById("account-dialog");
const authStatus = document.getElementById("auth-status");
const authForms = [...document.querySelectorAll(".auth-form")];
const googleSignIn = document.getElementById("google-signin");

function getSafeAuthBase() {
  const basePath = authConfig.apiBasePath;
  const localDevelopment = ["localhost", "127.0.0.1"].includes(location.hostname);
  const securePage = location.protocol === "https:" || localDevelopment;
  if (!securePage || typeof basePath !== "string" || !basePath.startsWith("/") || basePath.startsWith("//")) return null;
  return basePath.replace(/\/$/, "");
}

const authBase = getSafeAuthBase();
const authEnabled = authConfig.enabled === true && Boolean(authBase);

document.getElementById("account-trigger").addEventListener("click", () => accountDialog.showModal());
document.querySelector(".account-close").addEventListener("click", () => accountDialog.close());
accountDialog.addEventListener("click", (event) => { if (event.target === accountDialog) accountDialog.close(); });

function selectAuthTab(tabName) {
  const signInSelected = tabName === "signin";
  document.getElementById("signin-tab").setAttribute("aria-selected", String(signInSelected));
  document.getElementById("signup-tab").setAttribute("aria-selected", String(!signInSelected));
  document.getElementById("signin-panel").hidden = !signInSelected;
  document.getElementById("signup-panel").hidden = signInSelected;
}

document.getElementById("signin-tab").addEventListener("click", () => selectAuthTab("signin"));
document.getElementById("signup-tab").addEventListener("click", () => selectAuthTab("signup"));

if (authEnabled) {
  authStatus.textContent = "Your account connection is protected by the MobileWorldStation server.";
  googleSignIn.disabled = false;
  authForms.forEach((form) => form.querySelectorAll("input, button").forEach((control) => { control.disabled = false; }));
} else {
  authStatus.textContent = "Account access is prepared, but remains off until a secure HTTPS authentication server is connected.";
}

googleSignIn.addEventListener("click", () => {
  if (!authEnabled) return;
  // The server creates and checks OAuth state/nonce, exchanges the code and sets
  // an HttpOnly, Secure, SameSite session cookie. No client secret belongs here.
  location.assign(`${authBase}/google`);
});

authForms.forEach((form) => form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!authEnabled) return;

  const submit = form.querySelector("[type=submit]");
  submit.disabled = true;
  authStatus.textContent = "Connecting securely…";
  try {
    const csrfResponse = await fetch(`${authBase}/csrf`, { credentials: "same-origin", headers: { Accept: "application/json" } });
    if (!csrfResponse.ok) throw new Error("Secure sign-in is temporarily unavailable. Please try again later.");
    const { csrfToken } = await csrfResponse.json();
    if (typeof csrfToken !== "string" || !csrfToken) throw new Error("Secure sign-in is temporarily unavailable. Please try again later.");

    const response = await fetch(`${authBase}/${form.dataset.authAction}`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", Accept: "application/json", "X-CSRF-Token": csrfToken },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(typeof result.message === "string" ? result.message : "We could not complete that request. Please check your details and try again.");
    authStatus.textContent = form.dataset.authAction === "register" ? "Your account was created securely." : "You’re signed in securely.";
    form.reset();
  } catch (error) {
    authStatus.textContent = error instanceof TypeError ? "We could not reach the account server. Please try again later." : error.message;
  } finally {
    submit.disabled = false;
  }
}));
