import { useState } from "react";

function App() {

  const [tarefas, setTarefas] = useState([])

  const [texto, setTexto] = useState('')


  function adicionarTarefa() {
    //caso nao tenha texto nao executa a funcao
    if (!texto) return
    //adicionar tarefa
    setTarefas([...tarefas, { texto: texto, iscompleted: false }])
  }

  function tarefaConcluida(indice) {
    const listaMarcada = tarefas.map((tarefa, index) => {
      // se o indice indicado for igual ao indice da tarefa ela muda a marcacao booleana 
      if (index === indice) {
        tarefa.iscompleted = !tarefa.iscompleted
        return tarefa
      }
      //senão só retorna o valor previo
      return tarefa
    })
    //retorna a nova lista ao estado
    setTarefas(listaMarcada)
  }


  function excluirTarefa(indice){
    const novaLista = tarefas.filter((tarefa, index)=>{
      if (index !== indice){
        return tarefa
      }

      
    } )
    setTarefas(novaLista)
  }


  return (
    <div className="App">
      <h1>Tarefas </h1>

      <input type="text" onChange={(e) => { setTexto(e.target.value) }} value={texto} />
      <button onClick={adicionarTarefa}>Adicionar</button>


      {tarefas && tarefas.map((tarefa, index) => {
        return (
          <>
            <p key={index}> {tarefa.texto} {tarefa.iscompleted ? <p>completa</p> : <p>Incompleta</p>}</p>
            <button onClick={() => { tarefaConcluida(index) }}>Completar</button>
            <button onClick={() => { excluirTarefa(index) }}>Excluir</button>
          </>
        )
      })}
    </div>
  );
}

export default App;
