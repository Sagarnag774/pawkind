$(function(){
  $('#previewBtn').on('click', function(){
    const form = $('#appForm')[0];
    const data = new FormData(form);
    const name = data.get('name') || '—';
    const email = data.get('email') || '—';
    const phone = data.get('phone') || '—';
    const interest = data.get('interest') || '—';
    const message = data.get('message') || '—';

    let html = `<h3>Preview</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Interest:</strong> ${interest}</p>
    <p><strong>Message:</strong><br>${message.replace(/\n/g,'<br>')}</p>`;
    $('#preview').html(html).show();
  });
});
