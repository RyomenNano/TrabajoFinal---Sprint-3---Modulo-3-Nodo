import mongoose from "mongoose";
import { body, param } from 'express-validator';

export const CrearheroesValidationRules = ()=>[
    body('nombreSuperheroe')
    .exists().withMessage("Introduzca un nombre de superheroe")
    .notEmpty().withMessage("Introduzca un nombre de superheroe")
    .trim()
    .isLength({min: 3, max: 60}).withMessage("El nombre de superheroe debe estar entre 3-60 carácteres"),

    body('nombreReal')
    .exists().withMessage("Introduzca un nombre real")
    .notEmpty().withMessage("Introduzca el nombre real")
    .trim()
    .isLength({min: 3, max:60}).withMessage("El nombre real debe estar entre 3-60 carácteres"),

    body('edad')
    .exists().withMessage("Introduzca una edad al superheroe")
    .notEmpty().withMessage("Introduzca una edad al superheroe")
    .trim()
    .isInt({min: 0}).withMessage("La edad del heroe debe ser mayor a 1"),

    body('poderes')
    .exists().withMessage("Introduzca mínimo 1 poder")
    .notEmpty().withMessage("Introduzca mínimo 1 poder")
]

export const ActualizarSuperheroesValidacion = ()=>[
    body('nombreSuperheroe')
    .exists().withMessage("Introduzca un nombre de superheroe")
    .notEmpty().withMessage("Introduzca un nombre de superheroe")
    .trim()
    .isLength({min: 3, max: 60}).withMessage("El nombre de superheroe debe estar entre 3-60 carácteres"),

    body('nombreReal')
    .exists().withMessage("Introduzca un nombre real")
    .notEmpty().withMessage("Introduzca el nombre real")
    .trim()
    .isLength({min: 3, max:60}).withMessage("El nombre real debe estar entre 3-60 carácteres"),

    body('edad')
    .exists().withMessage("Introduzca una edad al superheroe")
    .notEmpty().withMessage("Introduzca una edad al superheroe")
    .trim()
    .isInt({min: 0}).withMessage("La edad del heroe debe ser mayor a 1"),

    body('poderes')
    .exists().withMessage("Introduzca mínimo 1 poder")
    .notEmpty().withMessage("Introduzca mínimo 1 poder")
]

export const ValidacionDeId = ()=>[
    param("id")
    .exists().withMessage("Introduzca un ID")
    .notEmpty().withMessage("Introduzca un ID")
    .isMongoId().withMessage("El ID no es válido")
]

