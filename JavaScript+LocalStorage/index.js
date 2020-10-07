function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
}

function createR() {
    
    //Guardo los datos capturados usando el id de cada control
    var nss = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var correo = document.getElementById("Input3").value;
    var ciudad = document.getElementById("Input4").value;


    //validaciones
    if (nss.length > 0) {
        //creo un objeto que guarda los datos
        var alumno = {
            nss, //matricula:id
            nombre,
            correo,
            ciudad,
        }

        var lista_alumnos=JSON.parse(localStorage.getItem("Pacientes"));

        if(lista_alumnos==null)
        { 
            var lista_alumnos = [];
        }
        
        const existe = lista_alumnos.some(element=>element.nss==nss); 

        if(!existe||document.getElementById("Input1").disabled==true)
        {
            
            if(document.getElementById("Input1").disabled==true)
            {
                var lista_alumnos=lista_alumnos.filter(alumno=>alumno.nss!=nss);

            }
                
            lista_alumnos.push(alumno);
            var temporal = lista_alumnos.sort((a,b) => a.nss-b.nss);
            localStorage.setItem("Pacientes", JSON.stringify(temporal));
            
            read();
            resetFields();
            swal("Listo!", "Agregado correctamente", "success");

        }
        else
        {
            swal("Error", "Ya existe ese id de alumno","warning");
        }

    } 
    else 
    {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
    
}

function read(){
    document.getElementById("Table1").innerHTML='';
    

    const lista_alumnos = JSON.parse(localStorage.getItem("Pacientes"));
    
     
    if(lista_alumnos)
    {
        lista_alumnos.forEach((alumno)=>printRow(alumno));
    }
}


function printRow(alumno){
    
    if(alumno!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = alumno.nss;
        cell2.innerHTML = alumno.nombre; 
        cell3.innerHTML = alumno.correo;
        cell4.innerHTML = alumno.ciudad; 
        cell5.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${alumno.nss})">Eliminar</button>`;
        cell6.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+alumno.nss+')">Modificar</button>';
    }
}

function deleteR(nss){
    const lista_alumnos = JSON.parse(localStorage.getItem("Pacientes"));
    var temporal=lista_alumnos.filter(alumno=>alumno.nss!=nss);
    localStorage.setItem("Alumnos", JSON.stringify(temporal));

    if(temporal.length==0)
    { 
        localStorage.removeItem("Pacientes");
    }
 
    read();
    
}

function seekR(nss){

    const lista_alumnos = JSON.parse(localStorage.getItem("Pacientes"));
    var alumno=lista_alumnos.filter(alumno=>alumno.nss==nss);
    //console.log(alumno[0]);
    updateR(alumno[0]);
}

function updateR(alumno){
    if(alumno!=null)
    {
        document.getElementById("Input1").value=alumno.nss;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=alumno.nombre;
        document.getElementById("Input3").value=alumno.correo;
        document.getElementById("Input4").value=alumno.ciudad;
    }
}


//Para consulta de ciudad
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input5").value;
  
    const lista_alumnos = JSON.parse(localStorage.getItem("Pacientes"));
    var alumnosC=lista_alumnos.filter(alumno=>alumno.ciudad==c);
    if(alumnosC)
    {
        alumnosC.forEach((alumno)=>printRowQ(alumno));
    }
    //console.log(alumnosC)

}


function printRowQ(alumno){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = alumno.nss;
    cell2.innerHTML = alumno.nombre; 
    cell3.innerHTML = alumno.correo;
    cell4.innerHTML = alumno.ciudad; 
   
}