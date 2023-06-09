export const _insertDataIndicators = `
INSERT INTO 
        indicadores 
                (id, nombreIndicador, codigoIndicador, unidadMedidaIndicador, valorIndicador,
                fechaIndicador, tiempoIndicador, origenIndicador) 
        
        VALUES 
                (?, ?, ?, ?,
                 ?, ?, ?, ?);`;

export const _listIndicators = `
                select* from indicadores`;

export const _updateIndicators = `
                 UPDATE
                         indicadores 
                 SET 
                         nombreIndicador = ?, codigoIndicador =?,
                         unidadMedidaIndicador = ?, valorIndicador = ?,
                         fechaIndicador = ?, tiempoIndicador=?,
                         origenIndicador=?
                 WHERE id = ?`;

                 export const _deleteIndicators = `
                 DELETE 
                 FROM 
                        indicadores WHERE id = ?`;
               