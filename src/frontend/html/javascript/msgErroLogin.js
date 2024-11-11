$(document).ready(function() {

    function showErrorModal() {
        $('#errorModal').fadeIn();
    }

    $('#closeModal').click(function() {
        $('#errorModal').fadeOut();
    });

    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); 

        const formData = $(this).serialize();

        $.post('/api/users/login', formData, function(response) {
            // console.log(response);
            if (response.success) {
                window.location.href = "/html/telas_home/homeAdm.html";
            } else {

                showErrorModal();
                $('#errorModal .modal-body p').text(response.message);
            }
        }).fail(function() {
            showErrorModal();
            $('#errorModal .modal-body p').text('Erro ao comunicar com o servidor.');
        });
    });
})
