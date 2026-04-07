import React from 'react'

export const Content = () => {
  const productos = [
    {
      id: 1,
      nombre: "Chocobarra",
      precio: 2.500,
      img: "/img/Chocobarra.png",
    },
    {
      id: 2,
      nombre: "Gomitas fresa mix",
      precio: 3.000,
      img: "/img/Gomita fresa mix.png",
    },
    {
      id: 3,
      nombre: "Galleta ChocoChips",
      precio: 1.800,
      img: "/img/Galleta ChocoChips.png",
    },
    {
      id: 4,
      nombre: "Cupcake Vainilla",
      precio: 4.000,
      img: "/img/Cupcake Vainilla.png",
    },
    {
      id: 5,
      nombre: "Paleta arcoíris",
      precio: 1.500,
      img: "/img/Paleta arcoiris.png",
    },
    {
      id: 6,
      nombre: "Mini donitas",
      precio: 3.500,
      img: "/img/Mini donitas.jpg",
    },
  ];

  return (
    <main className="container-fluid px-4 pb-5 flex-grow-1" style={{ paddingTop: "20px" }}>
      <div className="row g-4">
        <div className="col-lg-8">
          <h4 className="text-warning mb-3">Ventas realizadas</h4>

          <div className="row">
            {productos.map((p) => (
              <div className="col-sm-6 col-md-4 mb-4" key={p.id}>
                <div className="card h-100 shadow bg-dark text-light">
                  <img
                    src={p.img}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={p.nombre}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="mb-1">{p.nombre}</h6>
                    <p className="fw-bold text-success mb-2">
                      ${p.precio} PESOS
                    </p>
                    <div className="d-flex gap-2 mt-auto">
                      <button type="button" className="btn btn-warning btn-sm flex-fill">
                        Editar
                      </button>
                      <button type="button" className="btn btn-danger btn-sm flex-fill">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-white rounded shadow p-4" style={{ top: "150px" }}>
            <h5 className="mb-3">Registro</h5>

            <input className="form-control mb-2" placeholder="Nombre completo" />
            <input className="form-control mb-2" placeholder="Correo electrónico" />
            <input className="form-control mb-3" placeholder="Dirección" />

            <hr/>

            <h6>Realizar Pago</h6>
            <input className="form-control mb-2" placeholder="Número de tarjeta" />

            <div className="row">
              <div className="col-6">
                <input className="form-control mb-2" placeholder="MM/AA" />
              </div>
              <div className="col-6">
                <input className="form-control mb-2" placeholder="CVV" />
              </div>
            </div>

            <button className="btn btn-success w-100 mt-2">
              Confirmar Compra
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
