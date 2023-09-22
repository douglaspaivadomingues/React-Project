import { useState } from 'react';

function App() {
  const toolKit = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'Node',
  'Testes automatizados',
];
  const [index, setIndex] = useState(0)
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('')
  const [showImg, setShowImg] = useState(0)

   function handleNextClick() {
    if (index + 1 < toolList.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o primeiro elemento
    }
  }

  function handlePreviousClick() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolList.length - 1); // Vai para o último elemento
    }
  }

  function addNewTool() {
    if(toolList.includes(inputValue)){
      alert('Ferramenta já existe')
    } else {
      setToolList([...toolList, inputValue]);
    };
  };

  function showImagem () {
    setShowImg(!showImg);
  };

  return (
    <>
      <div>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{ toolList[index] }</h2>
      <button onClick = {handlePreviousClick}>Anterior</button>
      <button onClick = {handleNextClick}>Próximo</button>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input
        type='text'
        placeholder='Digite a nova Ferramenta'
        onChange={( { target }) => setInputValue(target.value)} />
        <button onClick={addNewTool}>Adicionar</button>
      </section>
      <section>
        <h3>Lista de Ferramentas Atuais</h3>
         <ul>
           {toolList.map((tool) => (
           <li>{tool}</li>))}
         </ul>
        </section>
       <div>
        {showImg && <img src="vite.svg"/>}
          <button onClick={showImagem}>
            {showImg ? 'Esconder logo' : 'Mostrar logo'}
          </button>
       </div>
      </div>
    </>
  );
};

export default App;
