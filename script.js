document.getElementById('year').textContent = new Date().getFullYear();
function handleContact(e) {
  e.preventDefault();
  document.getElementById('msg').textContent = "Opening your email client...";
  const form = e.target;
  const name = form.name.value;
  const senderEmail = form.email.value;
  const message = form.message.value;
  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`From: ${name} (${senderEmail})\n\n${message}`);
  window.location.href = `mailto:asadkhanustad@gmail.com?subject=${subject}&body=${body}`;
}