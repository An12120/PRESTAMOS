document.addEventListener("DOMContentLoaded", function () {
    // Variables para los elementos del formulario
    const clienteInput = document.getElementById("cliente");
    const fechaPrestamoInput = document.getElementById("fecha_prestamo");
    const interesesInput = document.getElementById("intereses");
    const cuotasPendientesInput = document.getElementById("cuotas_pe");
    const valorPrestadoInput = document.getElementById("val_pres");
    const totalPagarInput = document.getElementById("total");
    const modalPagoInput = document.getElementById("prestamo");
    const modalInteresInput = document.getElementById("interes");
    const modalValorInput = document.getElementById("valor");
    const modalCuotaInput = document.getElementById("cuota");
    const modalPagoCapitalInput = document.getElementById("pago_capital");
    const modalPagoInteresInput = document.getElementById("pago_interes");
    const modalValorActualInput = document.getElementById("valor_actual");
    const guardarButton = document.getElementById("guardar");

    // Calcular el total a pagar
    function calcularTotal() {
        const valorPrestado = parseFloat(valorPrestadoInput.value) || 0;
        const intereses = parseFloat(interesesInput.value) || 0;
        const total = valorPrestado + (valorPrestado * (intereses / 100));
        totalPagarInput.value = total.toFixed(2);
    }

    // Evento para calcular el total cuando cambien los valores relevantes
    valorPrestadoInput.addEventListener("input", calcularTotal);
    interesesInput.addEventListener("input", calcularTotal);

    // Evento para abrir el modal y cargar los datos necesarios
    document.getElementById("botonModal").addEventListener("click", function () {
        const valorPrestado = parseFloat(valorPrestadoInput.value) || 0; // Convertir a número
        const intereses = parseFloat(interesesInput.value) || 0; // Convertir a número
        calcularTotal(); // Llamada a la función para calcular el total a pagar

        modalPagoInput.value = totalPagarInput.value;
        modalInteresInput.value = interesesInput.value;
        modalCuotaInput.value = (parseFloat(totalPagarInput.value) / parseInt(cuotasPendientesInput.value)).toFixed(2);
        modalPagoCapitalInput.value = (valorPrestado / parseInt(cuotasPendientesInput.value)).toFixed(2); // Usar el valor numérico
        modalPagoInteresInput.value = (parseFloat(totalPagarInput.value) - valorPrestado).toFixed(2); // Usar el valor numérico
        const modalValorActual = parseFloat(modalValorInput.value) || 0; // Convertir a número
        modalValorActualInput.value = (parseFloat(totalPagarInput.value) - modalValorActual).toFixed(2);
    });

    guardarButton.addEventListener("click", function () {
        // Aquí puedes incluir el código para enviar la información a otro lugar, como un servidor, mediante una solicitud AJAX
        
        // Después de guardar la información con éxito, puedes limpiar el formulario principal
        clienteInput.value = '';
        fechaPrestamoInput.value = '';
        interesesInput.value = '';
        cuotasPendientesInput.value = '';
        valorPrestadoInput.value = '';
        totalPagarInput.value = '';

        // Además, puedes limpiar los campos del modal
        modalPagoInput.value = '';
        modalInteresInput.value = '';
        modalValorInput.value = '';
        modalCuotaInput.value = '';
        modalPagoCapitalInput.value = '';
        modalPagoInteresInput.value = '';
        modalValorActualInput.value = '';

        // Mostrar mensaje de confirmación
        Swal.fire({
            icon: 'success',
            title: '¡Datos guardados!',
            text: 'La información se ha guardado correctamente.'
        });

    }); Eliminar.close(); 

});
