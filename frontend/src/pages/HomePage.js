import React from 'react';

import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
          <div className="homeimage">
            <img src="images/home/img01.jpg" alt="avion" />
          </div>
          <div className="columnas">
            <div className="bienvenidos left">
              <h2>Bienvenidos</h2>
              <p>Nos llena de orgullo que elija nuestra empresa.
              Nos comprometemos a que tenga la mejor de las experiencias
              y que disfrute su próximo viaje.</p>
            </div>
            <div className="testimonios right">
              <h2>Testimonios</h2>
              <div className="testimonio">
                <span className="cita">Simplemente excelente</span>
                <span className="autor">Juan Perez</span>
              </div>
            </div>
          </div>
        </main>
    );
}

export default HomePage;
