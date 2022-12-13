import React from 'react';

import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <section className="holder">
          <div className="historia">
            <h2>Historia</h2>
            <p>Nuestra empresa, dedicada al transporte de personas y cargas,
            inicia su actividad en 1963 con sede central en Paraná, Entre Ríos.
            Su fundador Jorge Sosa fue un precursor de la aviación provincial.</p>
            <p>Para mediados de los 70, la empresa prestaba servicios en muchas provincias
            Argentinas y a fines de los 90 expandió sus servicios a países limítrofes.</p>
            <p>Hoy conformamos una de las empresas más grandes de transporte de Latinoamérica.</p>
          </div>
          <h2>Staff</h2>
            <div className="personas">
              <div className="persona">
                <img src="images/nosotros/nosotros1.jpg" width="75" alt="Juan" />
                <h5>Juan Gomez</h5>
                <h6>Gerente General</h6>
                <p>Licenciado en Administración de Empresas.</p>
                <p>Se inició en nuestra empresa en 1998 como encargado del area
                comercial en la Sucursal de Córdoba. Luego de ocupar diversos
                cargos en las areas comercial, operativa y administrativa, desde
                el año 2020 ocupa la Gerencia General.</p>
              </div>
            </div>
        </section>
    );
}

export default NosotrosPage;
