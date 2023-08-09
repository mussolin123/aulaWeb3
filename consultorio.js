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
    console.log("botao urgencia clicado");
})