//let nombre: string = "Cristian";
//nombre = "Castiblanco";
//console.log(nombre)
//let numero: number= 23;
//console.log(numero);

type address={
    city: string;
    country: string;
    ad:string;
}
//crear objeto
type estudiante = {
     fistname: string;
     lastname:string;
     age?: number | string;
     address?:address;
}
const e1 : estudiante = {
    fistname:"Cristian",
    lastname:"Catiblanco",
    age:18,
    address: {
        city:"bogota",
        country:"colombia",
        ad : "abhbahbfab",
    }
}
const e2 : estudiante = {
    fistname:"david",
    lastname:"giron",
    age:18,
    address: {
        city:"bogota",
        country:"colombia",
        ad : "abhbahbfab",
    }
}

//const mostrarestudiante=
////   const { fistname, lastname }= estudiante;
   // return `Nombre de estudiante:${fistname}
   // apellido: ${lastname}`;
                   
//}
//console.log (mostrarestudiante(e1));

let estudiantes: estudiante[] = []

const agregarEstudiante = (estudiante:estudiante) => {
    estudiantes.push(estudiante)
}

agregarEstudiante({
    fistname:"carlos",
    lastname:"Ortega"
})
agregarEstudiante({
    fistname:"paula",
    lastname:"Maria"
})
agregarEstudiante({
    fistname:"pepito",
    lastname:"perez"
})
//const eliminarEstudiante = ( indice: number) => {
   // estudiantes.splice(indice ,1)
//}

const eliminarEstudiantePorNombre = (fistname: string) => {
    const indice = estudiantes.findIndex(estudiante => estudiante.fistname === fistname);
    if (indice !== -1) {
        estudiantes.splice(indice, 1);
    } else {
        console.log(`Estudiante con nombre ${fistname} no encontrado.`);
    }
}

eliminarEstudiantePorNombre("carlos")

console.log(estudiantes)























//estudiantes.forEach((estudiante) => {
  //  const { fistname, lastname } = estudiante;
    //console.log(`Nombre de estudiante: ${fistname}
    //Apellido: ${lastname}`);
    //});

