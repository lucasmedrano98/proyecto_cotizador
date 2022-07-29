swal("¡Bienvenido al cotizador de seguros!", "Aqui se podrá calcular el costo del seguro de una gran cantidad de vehículos",
{button: "¡Gracias!",});


class auto {
    constructor (modelo, año) {
        this.modelo = modelo.toUpperCase();
        this.año = año;
    }
}

class M {
    constructor (modelo, factor) {
        this.modelo = modelo.toUpperCase();
        this.factor = factor;
    }
}

class A {
    constructor (año, factor) {
        this.año = año;
        this.factor = factor;
    }
}

const ModeloAuto = []               
const AñoAuto = []
const ModeloMoto = [
{modelo:"125H",
factor:0.3},
{modelo:"Gixxer",
factor:0.4,},
{modelo:"Rouser",
factor:0.5},
{modelo:"Dominar 400",
factor:0.8},
{modelo:"Interceptor",
factor:1.1},
]

const costoClasico = 3000
const costoPremium = 4500
const costoDiamond = 6000

let m1=new M ("208",1.05);
let m2=new M ("307",1.07);
let m3=new M ("408",1.1);

ModeloAuto.push(m1);
ModeloAuto.push(m2);
ModeloAuto.push(m3);

let a1=new A ("2010",0.5)
let a2=new A ("2011",0.6)
let a3=new A ("2012",0.7)
let a4=new A ("2013",0.8)
let a5=new A ("2014",0.9)
let a6=new A ("2015",1)
let a7=new A ("2016",1.1)
let a8=new A ("2017",1.2)
let a9=new A ("2018",1.3)
let a10=new A ("2019",1.4)
let a11=new A ("2020",1.5)
let a12=new A ("2021",1.6)
let a13=new A ("2022",1.7)

AñoAuto.push(a1)
AñoAuto.push(a2)
AñoAuto.push(a3)
AñoAuto.push(a4)
AñoAuto.push(a5)
AñoAuto.push(a6)
AñoAuto.push(a7)
AñoAuto.push(a8)
AñoAuto.push(a9)
AñoAuto.push(a10)
AñoAuto.push(a11)
AñoAuto.push(a12)
AñoAuto.push(a13)

const cargoModeloAuto = ()=> {
    let optionMA
    ModeloAuto.forEach ((M)=> {
        optionMA += `<option value="${M.factor}">${M.modelo}</option>`;
    }
    ); return optionMA}

const cargoAñoAuto = ()=> {
    let optionAA
    AñoAuto.forEach ((A)=> {
        optionAA += `<option value="${A.factor}">${A.año}</option>`;
    }
    ); return optionAA}


selectAñoAuto.innerHTML = cargoAñoAuto()
selectModeloAuto.innerHTML = cargoModeloAuto()

const CotizarSeguro = ()=> {
    let mod = selectModeloAuto.value
    let añ = selectAñoAuto.value
    let valordeCuotaClasico= costoClasico*añ*mod
    let valordeCuotaDiamond= costoDiamond*añ*mod
    let valordeCuotaPremium= costoPremium*añ*mod

    valorCuotaClasico.innerText = valordeCuotaClasico.toFixed(1)
    valorCuotaPremium.innerText = valordeCuotaPremium.toFixed(1)
    valorCuotaDiamond.innerText = valordeCuotaDiamond.toFixed(1)
}


const guardarLocalModelo = (clave,valor) => {localStorage.setItem(clave,valor)
};

guardarLocalModelo("ModeloAuto", JSON.stringify(ModeloAuto));

const guardarLocalAño = (clave,valor) => {localStorage.setItem(clave,valor)
};

guardarLocalAño("AñoAuto", JSON.stringify(AñoAuto));


const obtenerContenido = (URL)=> {
    let vehiculosAmostrar = ""
    fetch(URL)
   .then((response)=> response.json())
   .then( (data)=>{
        for (contenido of data) {
            vehiculosAmostrar += listarautos(contenido)
        }
        document.querySelector("#tablaAsegurados").innerHTML = vehiculosAmostrar
   }) 
}

const listarautos= (contenido)=> {
    const {id, marca, modelo, año, color, estado} = contenido
    return    `<tr>
                   <td>${id}</td>
                   <td>${marca}</td>
                   <td>${modelo}</td>
                   <td>${año}</td>
                   <td>${color}</td>
                   <td>${estado}</td>
               </tr>`
   }


   btnCotizar.addEventListener ("click", ()=>CotizarSeguro())
   btnCotizar.addEventListener ("click", ()=>{
       Toastify({
           text: "¡Clickea aquí para asegurar tu vehiculo con nosotros!",
           duration: 3000,
           gravity: 'bottom',
           position:'right',
           destination: 'https://www.coderhouse.com'
       }).showToast();
   })
















let autos = []


let auto1=new auto ("208", "2013");
let auto2=new auto ("307", "2015");
let auto3=new auto ("408", "2021");
let auto4=new auto ("208", "2019");
let auto5=new auto ("208", "2016");
let auto6=new auto ("307", "2017");
let auto7=new auto ("408", "2013");



autos.push (auto1);
autos.push (auto2);
autos.push (auto3);
autos.push (auto4);
autos.push (auto5);
autos.push (auto6);
autos.push (auto7);

function buscarautos(){
    añoAuto=prompt("¿Que año es el auto asegurado que está buscando?")
    resultado = autos.filter((auto) => auto.año.includes(añoAuto))
        console.log (resultado)
}







