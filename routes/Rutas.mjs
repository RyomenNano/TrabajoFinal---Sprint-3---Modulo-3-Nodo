import express from "express";
import {obtenerTodosLosSuperheroesController, crearNuevoSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, obtenerPorIDController} from "../controllers/superheroesController.mjs"
import {CrearheroesValidationRules, ActualizarSuperheroesValidacion, ValidacionDeId} from "../validations/validationsRules.mjs";
import {handleValidationErrors} from "../validations/errorMiddleware.mjs";


const routes= express.Router();

routes.get('/dashboard', obtenerTodosLosSuperheroesController);

routes.post('/heroes/agregar', CrearheroesValidationRules(), handleValidationErrors, crearNuevoSuperheroeController);
routes.get('/addSuperhero', (req, res) => {res.render("addSuperhero");});

routes.get('/heroes/:id', ValidacionDeId(), handleValidationErrors, obtenerPorIDController);

routes.put('/heroes/:id/editar', ActualizarSuperheroesValidacion(),handleValidationErrors, actualizarSuperheroeController);
routes.get('/heroes/:id/editar', ValidacionDeId(), obtenerPorIDController);

routes.delete('/heroes/:id',ValidacionDeId(), handleValidationErrors, eliminarSuperheroePorIDController);

export default routes;   