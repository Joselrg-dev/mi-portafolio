(function () {
  emailjs.init("R00z4HPY1i1H4dLHM"); // Reemplaza con tu Public Key de EmailJS
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_pcddxvrs", "template_obgokjr", this).then(
      function () {
        alert("¡Mensaje enviado correctamente!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.log("Error:", error);
        alert("¡Ocurrió un error al enviar el mensaje!");
      }
    );
  });
