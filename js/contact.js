window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_y8tdj6b', 'template_ck00kvj', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById("contact-form").reset()
                let contact = $("#contactWrap");
                let contactSuccess = $("#contactSuccess");
                let contactSend = $("#contactSend");
                $(contact).fadeOut();
                $(contactSend).fadeOut();
                $(contactSuccess).fadeIn();
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
$('#contactModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
})