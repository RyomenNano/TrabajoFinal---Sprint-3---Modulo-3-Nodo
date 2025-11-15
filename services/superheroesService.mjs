import SuperHeroRepository from "../repository/superheroesRepository.mjs";


export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerSuperheroes();
}

export async function crearNuevoSuperheroe(data){
    const datos={
        "nombreSuperheroe": data.nombreSuperheroe,
        "nombreReal": data.nombreReal,
        "edad": data.edad,
        "planetaOrigen": data.planetaOrigen,
        "debilidad": data.debilidad,
        "poderes": data.poderes,
        "aliados": data.aliados,
        "enemigos": data.enemigos,
        "creador": data.creador
        }
    
    return await SuperHeroRepository.crearSuperheroe(datos);
}

export async function actualizarSuperheroe(data, id){
    const datosActualizados={
        "nombreSuperheroe": data.nombreSuperheroe,
        "nombreReal": data.nombreReal,
        "edad": data.edad,
        "planetaOrigen": data.planetaOrigen,
        "debilidad": data.debilidad,
        "poderes": data.poderes || [],
        "aliados": data.aliados || [],
        "enemigos": data.enemigos || [],
        "creador": data.creador
        }
    return await SuperHeroRepository.actualizarSuperheroe(datosActualizados, id);
}

export async function eliminarSuperheroePorID(id){
    return await SuperHeroRepository.borrarSuperheroePorID(id);
} 

export async function obtenerPorID(ID){
    return await SuperHeroRepository.obtenerPorID(ID);
}