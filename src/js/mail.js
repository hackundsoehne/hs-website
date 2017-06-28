function mailSignup() {
  // Get the form.
  var form = $('#mc-embedded-subscribe-form');

  // Serialize the form data.
  var formData = $(form).serialize();
  console.log("sdfs");
  console.log(formData);
  // Submit the form using AJAX.
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/mailsignup',
    data: formData
  })
    .done(function (response) {
      $('#mce-success-response').removeClass('dn');
    })
    .fail(function (data) {
      $('#mce-error-response').removeClass('dn');
    });
}