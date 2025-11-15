import {obtenerTodosLosSuperheroes, obtenerPorID, crearNuevoSuperheroe, actualizarSuperheroe, eliminarSuperheroePorID} from '../services/superheroesService.mjs';
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseVista.mjs';


export async function obtenerTodosLosSuperheroesController(req, res){ 
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        res.render("dashboard", { superheroes });
    }

    catch(error){
        res.status(500).send({mensaje: 'Error al obtener los superhéroes', error: error.message})
    } 
} 

export async function crearNuevoSuperheroeController(req, res){
    try {
        const data = req.body;

        if (data.poderes) data.poderes = data.poderes.split(",").map(x => x.trim());
        if (data.aliados) data.aliados = data.aliados.split(",").map(x => x.trim());
        if (data.enemigos) data.enemigos = data.enemigos.split(",").map(x => x.trim());

        const superheroe= await crearNuevoSuperheroe(data);
        if(superheroe){
            res.status(200).render("addSuperhero");
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al crear superheroe', error: error.message})
    }
}

export async function actualizarSuperheroeController(req, res){
    try {
        const data= req.body;
        const {id}= req.params;

        if (data.poderes) data.poderes = data.poderes.split(",").map(x => x.trim());
        if (data.aliados) data.aliados = data.aliados.split(",").map(x => x.trim());
        if (data.enemigos) data.enemigos = data.enemigos.split(",").map(x => x.trim());

        const heroe =  await actualizarSuperheroe(data, id);
        if (!heroe) return res.status(404).send({ mensaje: "Héroe no encontrado" });  
        return res.redirect(`/heroes/${heroe._id}/editar`);
    } catch (error) {
        res.status(500).send({mensaje: 'Error al actualizar superheroe', error: error.message})
    }
}

export async function eliminarSuperheroePorIDController(req, res){
        try {
            const {id}= req.params;
            console.log(id);
            const heroeEliminado = await eliminarSuperheroePorID(id);
            if (heroeEliminado){
                const superheroes = await obtenerTodosLosSuperheroes();
                res.redirect('/dashboard');
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al eliminar superheroe', error: error.message})
    }
}

export async function obtenerPorIDController(req,res){
    try {
        const {id} = req.params;
        const heroe = await obtenerPorID(id);
        if (heroe){
            res.render("editSuperhero", { heroe });
        }
    } catch (error) {
        res.status(500).send({mensaje: 'Error al encontrar el superheroe', error: error.message});
        
    }
}
