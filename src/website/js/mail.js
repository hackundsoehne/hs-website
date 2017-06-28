function mailSignup() {
  // Get the form.
  var form = $('#mc-embedded-subscribe-form');

  // Serialize the form data.
  var formData = $(form).serialize();

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