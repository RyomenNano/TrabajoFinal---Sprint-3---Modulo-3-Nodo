import SuperHero from '../models/superheroe.mjs';
import IRepository from './IRepository.mjs';

class SuperheroRepository extends IRepository{
    async obtenerSuperheroes(){
        return await SuperHero.find({});
    }

    async crearSuperheroe(data){
        const hero = new SuperHero(data);
        await hero.save();
        return hero;
    }

    async actualizarSuperheroe(datosActualizados, id){
        const result = await SuperHero.findByIdAndUpdate(
                id,
                {nombreSuperheroe: datosActualizados.nombreSuperheroe,
                nombreReal: datosActualizados.nombreReal,
                edad: datosActualizados.edad,
                planetaOrigen: datosActualizados.planetaOrigen,
                debilidad: datosActualizados.debilidad,
                poderes: datosActualizados.poderes || [],
                aliados: datosActualizados.aliados || [],
                enemigos: datosActualizados.enemigos || [],
                creador: datosActualizados.creador}, { new: true });

            return await SuperHero.findOne({_id: id});
    }

    async borrarSuperheroePorID(id){
        const result = await SuperHero.findOneAndDelete({_id: id});
        return result;
    }

    async obtenerPorID(id){
        const result = await SuperHero.findOne({_id: id});
        return result;
    }
}

export default new SuperheroRepository();