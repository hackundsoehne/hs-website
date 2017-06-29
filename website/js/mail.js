function mailSignup() {
  // Get the form.
  var form = $('#mc-embedded-subscribe-form');

  // Serialize the form data.
  var formData = $(form).serialize();

  // Submit the form using AJAX.
  $.ajax({
    type: 'POST',
    url: 'https://localhost:4567/mailsignup', // TODO: change this
    data: formData
  })
    .done(function (response) {
      $('#mce-success-response').removeClass('dn');
    })
    .fail(function (data) {
      $('#mce-error-response').removeClass('dn');
    });
}