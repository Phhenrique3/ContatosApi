# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- 
**Título:** Implementação de Cadastro de Contatos em React

**Descrição:**
Este projeto em React permite gerenciar um cadastro de contatos, com funcionalidades para adicionar, consultar e excluir contatos. O componente principal, `Contatos`, utiliza `useState` para gerenciar o estado da lista de contatos e `useRef` para referenciar os campos do formulário.

**Componentes e Funcionalidades:**

1. **Estado e Referências:**
   - `useState([])`: Armazena a lista de contatos.
   - `useRef()`: Referencia os campos do formulário para obter e manipular seus valores.

2. **Funções:**
   - `salvar(event)`: Captura os dados do formulário, insere um novo contato na base de dados através da função `insert`, e atualiza a lista de contatos.
   - `pesquisar()`: Busca todos os contatos cadastrados utilizando a função `findAll` e atualiza o estado do componente.
   - `excluir(id)`: Remove um contato específico da base de dados utilizando a função `deleteById` e atualiza a lista de contatos.

3. **Interface:**
   - Um formulário permite a seleção do tipo de contato, inserção do nome e telefone. 
   - Os contatos cadastrados são exibidos em cards, com botões para excluir cada contato individualmente.

**Objetivo:** Facilitar o gerenciamento de contatos com uma interface simples e intuitiva, permitindo a inserção, visualização e exclusão rápida de informações.
