const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = []; //declara um vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inPaciente.value;
    pacientes.push(nome);
    console.log(pacientes);
    let lista = "";

    for (let i=0; i<pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista;
    frm.inPaciente.value = "";
    frm.inPaciente.focus();
})

frm.btnUrgencia.addEventListener("click", () =>{
    if (!frm.checkValidity()){
    alert("informe o nome do paciente a ser atendido comurgencia")
    frm.inPaciente.focus();
    return;

    }

    const nome = frm.inPaciente.value;
    pacientes.unshift(nome);
    console.log(pacientes);
    let lista = "";

    pacientes.forEach((paciente, i) => {
    return (lista += `${i + 1} - ${pacientes[i]}\n`)
})

respLista.innerText = lista;
frm.inPaciente.value = "";
frm.inPaciente.focus();
})

frm.btnAtender.addEventListener("click", () =>{
    if (paciente.length == 0){
        alert("Não há pacientes para atender")
        frm.inPaciente.focus();
        return;
    }
    const atender = pacientes.shift();
    respNome.innerText = atender;
    let lista = "";
    pacientes.forEach((paciente, i) => (lista += `${i + 1}- ${pacientes[i]}\n`) )
    respLista.innerText = lista;


})
