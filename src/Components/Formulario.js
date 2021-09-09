import React,{ useState } from 'react';


const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({

        artista: '',
        cancion: ''
    });
    
    const{ artista, cancion } =busqueda;
    
    //Funcion a cada input para leer su contenido 
    const actualizarState = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const [error, guardarError] = useState(false);
    
    //consultar apis
    const buscarInformacion = e => {
        e.preventDefault();
        if(artista.trim() ==='' || cancion.trim ==='')
        {
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarBusquedaLetra(busqueda);
    }

    
    return ( 
        <div className="bg-info">
            <div className="container">
                { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios </p> : null }
                <div className="row">
                    <form
                        className="col card text text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={buscarInformacion}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-gruop">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-gruop">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                            Buscar
                            </button>
                        </fieldset>
                    </form>

                </div>

            </div>


        </div>
     );
}
 
export default Formulario;