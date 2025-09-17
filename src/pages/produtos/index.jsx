const Produtos = () => {

    // objetivo de lista de pizzas
    const pizzas =[
        'Pizza Muçarela',
        'Pizza Calabresa',
        'Pizza`Portuguesa',
    ]

    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
