function MenuItem({ item }) {
    return (
      <div>
        <h3>{item.nome}</h3>
        <p>{item.descricao}</p>
        <strong>R$ {item.preco.toFixed(2)}</strong>
        <p><em>Categoria: {item.categoria}</em></p>
      </div>
    );
  }
  
  export default MenuItem;
  