window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {

        let contact = $("#contactWrap");
        let contactSuccess = $("#contactSuccess");
        let contactSend = $("#contactSend");
                
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_y8tdj6b', 'template_ck00kvj', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset()        
                $(contact).fadeOut();
                $(contactSend).fadeOut();
                $(contactSuccess).fadeIn();
            }, function(error) {
                console.log('FAILED...', error);
                $("#contactWrap").prepend('<div class="error-box">There seems to be an issue with this contact form. Please email us directly at launch@launchpaddevs.com.</div>');
                $(contactSend).fadeOut();
            });
    });
}
$('#contactModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
    $(".error-box").remove();
    $(contactSend).show();
})