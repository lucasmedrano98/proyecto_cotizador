const selectModeloAuto = document.querySelector("#selectModeloAuto")
const selectAñoAuto = document.querySelector("#selectAñoAuto")
const btnCotizar = document.querySelector("#btnCotizar")
const valorCuotaClasico = document.querySelector("#valorCuotaClasico")
const valorCuotaPremium = document.querySelector("#valorCuotaPremium")
const valorCuotaDiamond = document.querySelector("#valorCuotaDiamond")
const URL= `cotizados.json` 


btnCotizar.addEventListener ("click", ()=>CotizarSeguro())
btnCotizar.addEventListener ("click", ()=>{
    Toastify({
        text: "¡Clickea aquí para asegurar tu vehiculo con nosotros!",
        duration: 1500,
        gravity: 'bottom',
        position:'right',
        destination: 'https://www.coderhouse.com'
    }).showToast();
})
btnVehiculos.addEventListener ("click", ()=>obtenerContenido(URL))