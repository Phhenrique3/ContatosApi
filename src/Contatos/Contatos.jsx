import "./style.css";
import { findAll, deleteById, insert } from "./ContatosApi";
import { useState, useRef } from "react";

function Contatos() {
  const [contatos, setContatos] = useState([]);

  const inputTipo = useRef();
  const inputNome = useRef();
  const inputTelefone = useRef();

  const salvar = async (event) => {
    event.preventDefault(event); // Prevenir o comportamento padrão do botão
    console.log(
      "salvando contatos.....",

      inputTipo.current.value,
      inputNome.current.value,
      inputTelefone.current.value
    );
    await insert(
      inputTipo.current.value,
      inputNome.current.value,
      inputTelefone.current.value
    );

    alert("contato salvo com sucesso");

    inputTipo.current.value = "Filho(a)";
    inputNome.current.value = "";
    inputTelefone.current.value = "";

    inputTipo.current.focus();

    await pesquisar();
  };

  const pesquisar = async () => {
    console.log("cosultando os contatos...");
    const dados = await findAll();
    setContatos(dados);
  };

  const excluir = async (id) => {
    console.log("Excluindo.....", id);
    await deleteById(id);
    alert("Contato excluido com sucesso");
    pesquisar();
  };

  return (
    <div className="Conteiner">
      <form>
        <h1>Cadastro de contatos</h1>
        <label>Tipo:</label>
        <select ref={inputTipo}>
          <option>Filho(a)</option>
          <option>Neto(a)</option>
          <option>Amigo(a)</option>
        </select>
        <input placeholder="Nome" name="nome" type="text" ref={inputNome} />
        <input
          placeholder="Telefone"
          name="telefone"
          type="number"
          ref={inputTelefone}
        />
        <button onClick={salvar}>Salva</button>
        <button onClick={pesquisar}>consultar</button>
      </form>

      {contatos.map((c) => (
        <div className="card" key={c.id}>
          <div>
            <p>
              Tipo: <span>{c.tipo}</span>
            </p>
            <p>
              Nome: <span>{c.nome}</span>
            </p>
            <p>
              Telefone: <span>{c.telefone}</span>
            </p>
          </div>
          <button onClick={() => excluir(c.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}
export default Contatos;
