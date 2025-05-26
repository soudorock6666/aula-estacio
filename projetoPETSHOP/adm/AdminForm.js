import { useState } from 'react';

function AdminForm({ onAddItem }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      nome,
      descricao,
      preco: parseFloat(preco),
      categoria,
    });
    // Limpar campos
    setNome('');
    setDescricao('');
    setPreco('');
    setCategoria('prato-principal');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
      <input
        placeholder="Preço"
        type="number"
        value={preco}
        onChange={e => setPreco(e.target.value)}
      />
      <select value={categoria} onChange={e => setCategoria(e.target.value)}>
        <option value="Aquario">Entrada</option>
        <option value="prato-principal">Prato Principal</option>
        <option value="sobremesa">Sobremesa</option>
        <option value="bebida">Bebida</option>
      </select>
      <button type="submit">Adicionar item</button>
    </form>
  );
}

export default AdminForm;