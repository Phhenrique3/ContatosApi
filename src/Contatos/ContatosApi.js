const URL =
  "  https://api-contato-dot-api-samples-423102.uc.r.appspot.com/api/contatos";

// busca os caontatos
export async function findAll() {
  console.log("executando finndall");

  const requestInfo = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12119065",
    },
  };
  const resposeHttp = await fetch(URL, requestInfo);

  if (resposeHttp.ok) {
    return await resposeHttp.json();
  } else {
    console.log("falha ao buscar os contatos");
    throw new Error("falha ao tentar busca contato");
  }
}

// deletar os contatos

export async function deleteById(id) {
  console.log(`deletando os contatos(${id})`);

  const requestInfo = {
    method: "DELETE",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12119065",
    },
  };
  const resposeHttp = await fetch(URL + "/" + id, requestInfo);

  if (resposeHttp.ok) {
    return await resposeHttp.json();
  } else {
    console.log("falha ao buscar os contatos");
    throw new Error("falha ao tentar busca contato");
  }
}

export async function insert(tipo, nome, telefone) {
  console.log(`Executando insert(${tipo}, ${nome}, ${telefone})`);

  const requestInfo = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 12119065",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tipo, nome, telefone }),
  };

  const responseHttp = await fetch(URL, requestInfo);

  if (responseHttp.ok) {
    return await responseHttp.json();
  } else if (responseHttp.status === 400) {
    const error = await responseHttp.json();
    console.log(error);
    throw new Error(JSON.stringify(error));
  } else {
    console.log("Falha ao tentar inserir os contatos.");
    throw new Error("Falha ao tentar inserir os contatos.");
  }
}
