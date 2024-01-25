const TipoPersonaMockup = 
    {
        "ok": true,
        "msg": "Parametro encontrado",
        "params": {
          "tipo": "TIPO-PER",
          "datos": [
            {
              "codigo": 1,
              "glosa": "Natural"
            },
            {
              "codigo": 2,
              "glosa": "Jurídica"
            }
          ]
        }
      }

const getExpOposicionMockup = [
    [
      {
        "Total_Rows": 78,
        "Fila": "1",
        "CodigoExpediente": "ND-0902-12746",
        "RegCodigo": 9,
        "Region": "De La Araucania               ",
        "ProCodigo": 2,
        "Provincia": "Cautin              ",
        "ComCodigo": 2,
        "Comuna": "Lautaro             ",
        "RutSolcitante": "13962790-3",
        "NombreSolicitante": "JAVIER ALEXIS HERRERA PEZOA",
        "FechaIngreso": "30/12/2021",
        "SituacionActual": "P-REG          ",
        "DescSituacion": "Pendiente en Dirección Regional de Aguas                                                                                                              "
      },
      {
        "Total_Rows": 78,
        "Fila": "2",
        "CodigoExpediente": "ND-0601-7188",
        "RegCodigo": 6,
        "Region": "OHiggins                      ",
        "ProCodigo": 1,
        "Provincia": "Cachapoal           ",
        "ComCodigo": 1,
        "Comuna": "Rancagua            ",
        "RutSolcitante": "13962790-3",
        "NombreSolicitante": "JAVIER HERRERA PEZOA",
        "FechaIngreso": "29/10/2020",
        "SituacionActual": "P-REG          ",
        "DescSituacion": "Pendiente en Dirección Regional de Aguas                                                                                                              "
      },
      {
        "Total_Rows": 78,
        "Fila": "3",
        "CodigoExpediente": "ND-0601-7061",
        "RegCodigo": 6,
        "Region": "OHiggins                      ",
        "ProCodigo": 1,
        "Provincia": "Cachapoal           ",
        "ComCodigo": 16,
        "Comuna": "Doñihue             ",
        "RutSolcitante": "13962790-3",
        "NombreSolicitante": "JAVIER HERRERA PEZOA",
        "FechaIngreso": "29/04/2019",
        "SituacionActual": "P-REG-OP       ",
        "DescSituacion": "Pendiente en Dirección Regional de Aguas con Oposición                                                                                                "
      },
      {
        "Total_Rows": 78,
        "Fila": "4",
        "CodigoExpediente": "ND-0702-3794",
        "RegCodigo": 7,
        "Region": "Maule                         ",
        "ProCodigo": 2,
        "Provincia": "Talca               ",
        "ComCodigo": 2,
        "Comuna": "Pelarco             ",
        "RutSolcitante": "13962790-3",
        "NombreSolicitante": "JAVIER ALEXIS HERRERA PEZOA",
        "FechaIngreso": "28/12/2021",
        "SituacionActual": "P-REG          ",
        "DescSituacion": "Pendiente en Dirección Regional de Aguas                                                                                                              "
      },
      {
        "Total_Rows": 78,
        "Fila": "5",
        "CodigoExpediente": "ND-1305-4336",
        "RegCodigo": 13,
        "Region": "Metropolitana                 ",
        "ProCodigo": 5,
        "Provincia": "Melipilla           ",
        "ComCodigo": 2,
        "Comuna": "Maria Pinto         ",
        "RutSolcitante": "13962790-3",
        "NombreSolicitante": "JAVIER HERRERA PEZOA",
        "FechaIngreso": "28/08/2019",
        "SituacionActual": "P-REG          ",
        "DescSituacion": "Pendiente en Dirección Regional de Aguas                                                                                                              "
      }
    ]
  ]

const regionesMockup = {
  "ok": true,
  "msg": "Parametro encontrado",
  "params": [
    {
      "codRegion": 15,
      "nomRegion": "Arica y Parinacota"
    },
    {
      "codRegion": 1,
      "nomRegion": "Tarapaca"
    },
    {
      "codRegion": 2,
      "nomRegion": "Antofagasta"
    },
    {
      "codRegion": 3,
      "nomRegion": "Atacama"
    },
    {
      "codRegion": 4,
      "nomRegion": "Coquimbo"
    },
    {
      "codRegion": 5,
      "nomRegion": "Valparaiso"
    },
    {
      "codRegion": 13,
      "nomRegion": "Metropolitana"
    },
    {
      "codRegion": 6,
      "nomRegion": "OHiggins"
    },
    {
      "codRegion": 7,
      "nomRegion": "Maule"
    },
    {
      "codRegion": 16,
      "nomRegion": "Ñuble"
    },
    {
      "codRegion": 8,
      "nomRegion": "Bio Bio"
    },
    {
      "codRegion": 9,
      "nomRegion": "De La Araucania"
    },
    {
      "codRegion": 14,
      "nomRegion": "De los Rios"
    },
    {
      "codRegion": 10,
      "nomRegion": "De Los Lagos"
    },
    {
      "codRegion": 11,
      "nomRegion": "Aysen"
    },
    {
      "codRegion": 12,
      "nomRegion": "Magallanes"
    }
  ]
}

module.exports = {
    TipoPersonaMockup,
    getExpOposicionMockup,
    regionesMockup
}