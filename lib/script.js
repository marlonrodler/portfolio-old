
$("#form_id").submit(function (e) {

    e.preventDefault();
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Estamos em manutenção!',
        confirmButtonColor: '#ffc107'
      })

});