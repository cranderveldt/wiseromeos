jQuery(document).ready(function($){
  $('#cntctfrm_contact_name').prop('placeholder', 'Name');
  $('#cntctfrm_contact_email').prop('placeholder', 'Email');
  $('#cntctfrm_contact_subject').prop('placeholder', 'Subject');
  $('#cntctfrm_contact_message').prop('placeholder', 'Message');
  $('input[type="submit"]').val('Send Message');
});