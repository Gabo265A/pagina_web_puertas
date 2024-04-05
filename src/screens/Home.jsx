import React from 'react'
import Product from '../objects/Product'

const Home = () => {
  return (
    <div>
      <section>
        <h1>Puertas y Pintuas AA</h1>
        <p>Descubre la belleza natural de nuestros productos en madera en Puertas y Pinturas AA. Creamos piezas únicas y funcionales que transforman espacios en lugares acogedores y llenos de estilo. Desde elegantes puertas y ventanas hasta muebles a medida, cada artículo resalta la calidez y elegancia de la madera.</p>
      </section>
      <section>
        <h2>Productos destacados</h2>
        <ul>
          <Product />
        </ul>
      </section>
    </div >
  )
}

export default Home
