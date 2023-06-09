import db from "../utils/db";
import {
  _insertDataIndicators,
  _listIndicators,
  _updateIndicators,
  _deleteIndicators,
} from "../queries/indicators";

const insertDataIndicators: any = async (
  id: any,
  nombreIndicador: any,
  codigoIndicador: any,
  unidadMedidaIndicador: any,
  valorIndicador: any,
  fechaIndicador: any,
  tiempoIndicador: any,
  origenIndicador: any
) => {
  let [rows] = await db.query(_insertDataIndicators, [
    id,
    codigoIndicador,
    nombreIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    `${tiempoIndicador}`,
    origenIndicador,
  ]);
  return rows;
};

const listIndicators: any = async () => {
  let [rows] = await db.query(_listIndicators);
  return rows;
};

const insertIndicators: any = async (
  id: any,
  nombreIndicador: any,
  codigoIndicador: any,
  unidadMedidaIndicador: any,
  valorIndicador: any,
  fechaIndicador: any,
  tiempoIndicador: any,
  origenIndicador: any
) => {
  let [rows] = await db.query(_insertDataIndicators, [
    id,
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    tiempoIndicador,
    origenIndicador,
  ]);
  return rows;
};

const updateIndicators: any = async (
  id: any,
  nombreIndicador: any,
  codigoIndicador: any,
  unidadMedidaIndicador: any,
  valorIndicador: any,
  fechaIndicador: any,
  tiempoIndicador: any,
  origenIndicador: any
) => {
  let [rows] = await db.query(_updateIndicators, [
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    tiempoIndicador,
    origenIndicador,
    id,
  ]);
  return rows;
};

const deleteIndicators: any = async (id: any) => {
  let [rows] = await db.query(_deleteIndicators, [id]);
  return rows;
};

export {
  insertDataIndicators,
  listIndicators,
  insertIndicators,
  updateIndicators,
  deleteIndicators,
};
