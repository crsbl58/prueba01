import axios from "axios";
import * as solutoria from "../models/solutoria";

const indicators = async (req: any, res: any) => {
  let tokenText = "";
  const requestToken = () => {
    return new Promise(async (resolve, reject) => {
      const url = "https://postulaciones.solutoria.cl/api/acceso";
      const data = {
        userName: "z.edd36@gmail.com",
        flagJson: true,
      };
      const headers = {
        Accept: "*/*",
        "Content-Type": "text/json",
      };
      const response = await axios.post(url, data, { headers });
      const token = response.data.token;

      tokenText = token;
      resolve(true);
    });
  };
  await requestToken();

  let dataResponse: any = "";

  const requestIndicators = () => {
    return new Promise(async (resolve, reject) => {
      const url = "https://postulaciones.solutoria.cl/api/indicadores";

      const headers = {
        Authorization: `Bearer ${tokenText}`,
      };
      const response = await axios.get(url, { headers });

      dataResponse = response;

      resolve(true);
    });
  };
  await requestIndicators();
  console.log(dataResponse);

  await Promise.all(
    dataResponse.data.map(async (item: any) => {
      const resultProgramming = await solutoria.insertDataIndicators(
        item.id,
        item.nombreIndicador,
        item.codigoIndicador,
        item.unidadMedidaIndicador,
        item.valorIndicador,
        item.fechaIndicador,
        item.tiempoIndicador,
        item.origenIndicador
      );
    })
  );

  res.status(200).json({ state: true });
};

const listIndicators = async (req: any, res: any) => {
  const result01 = await solutoria.listIndicators();

  res.status(200).json(result01);
};

const insertIndicators = async (req: any, res: any) => {
  const {
    id,
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    tiempoIndicador,
    origenIndicador,
  } = req.body;

  const result01 = await solutoria.insertIndicators(
    id,
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    tiempoIndicador,
    origenIndicador
  );

  res.status(200).json(result01);
};

const updateIndicators = async (req: any, res: any) => {
  const {
    id,
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    tiempoIndicador,
    origenIndicador,
  } = req.body;

  const result01 = await solutoria.insertIndicators(
    id,
    nombreIndicador,
    codigoIndicador,
    unidadMedidaIndicador,
    valorIndicador,
    fechaIndicador,
    tiempoIndicador,
    origenIndicador
  );

  res.status(200).json(result01);
};
const deleteIndicators = async (req: any, res: any) => {
  const { id } = req.body;

  const result01 = await solutoria.deleteIndicators(id);

  res.status(200).json(result01);
};

export {
  indicators,
  listIndicators,
  insertIndicators,
  updateIndicators,
  deleteIndicators,
};
