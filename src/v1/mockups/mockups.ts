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

const comunasMockup = {
  "ok": true,
  "msg": "Parametro encontrado",
  "params": {
    "codRegion": 5,
    "nomRegion": "Valparaiso",
    "provincias": [
      {
        "codProvincia": 1,
        "nomProvincia": "Petorca",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "La Ligua"
          },
          {
            "codComuna": 2,
            "nomComuna": "Petorca"
          },
          {
            "codComuna": 3,
            "nomComuna": "Cabildo"
          },
          {
            "codComuna": 4,
            "nomComuna": "Zapallar"
          },
          {
            "codComuna": 5,
            "nomComuna": "Papudo"
          }
        ]
      },
      {
        "codProvincia": 2,
        "nomProvincia": "Los Andes",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "Los Andes"
          },
          {
            "codComuna": 2,
            "nomComuna": "San Esteban"
          },
          {
            "codComuna": 3,
            "nomComuna": "Calle Larga"
          },
          {
            "codComuna": 4,
            "nomComuna": "Rinconada"
          }
        ]
      },
      {
        "codProvincia": 3,
        "nomProvincia": "San Felipe",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "San Felipe"
          },
          {
            "codComuna": 2,
            "nomComuna": "Putaendo"
          },
          {
            "codComuna": 3,
            "nomComuna": "Santa Maria"
          },
          {
            "codComuna": 4,
            "nomComuna": "Panquehue"
          },
          {
            "codComuna": 5,
            "nomComuna": "Llay-Llay"
          },
          {
            "codComuna": 6,
            "nomComuna": "Catemu"
          }
        ]
      },
      {
        "codProvincia": 4,
        "nomProvincia": "Quillota",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "Quillota"
          },
          {
            "codComuna": 2,
            "nomComuna": "La Cruz"
          },
          {
            "codComuna": 3,
            "nomComuna": "La Calera"
          },
          {
            "codComuna": 4,
            "nomComuna": "Nogales"
          },
          {
            "codComuna": 5,
            "nomComuna": "Hijuelas"
          }
        ]
      },
      {
        "codProvincia": 5,
        "nomProvincia": "Valparaiso",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "Valparaiso"
          },
          {
            "codComuna": 2,
            "nomComuna": "Viña del Mar"
          },
          {
            "codComuna": 3,
            "nomComuna": "Quintero"
          },
          {
            "codComuna": 4,
            "nomComuna": "Puchuncavi"
          },
          {
            "codComuna": 7,
            "nomComuna": "Casablanca"
          },
          {
            "codComuna": 8,
            "nomComuna": "Juan Fernandez"
          },
          {
            "codComuna": 9,
            "nomComuna": "Concon"
          }
        ]
      },
      {
        "codProvincia": 6,
        "nomProvincia": "San Antonio",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "San Antonio"
          },
          {
            "codComuna": 2,
            "nomComuna": "Cartagena"
          },
          {
            "codComuna": 3,
            "nomComuna": "El Tabo"
          },
          {
            "codComuna": 4,
            "nomComuna": "El Quisco"
          },
          {
            "codComuna": 5,
            "nomComuna": "Algarrobo"
          },
          {
            "codComuna": 6,
            "nomComuna": "Santo Domingo"
          }
        ]
      },
      {
        "codProvincia": 7,
        "nomProvincia": "Isla De Pascua",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "Isla de Pascua"
          }
        ]
      },
      {
        "codProvincia": 8,
        "nomProvincia": "Marga Marga",
        "comunas": [
          {
            "codComuna": 1,
            "nomComuna": "Quilpue"
          },
          {
            "codComuna": 2,
            "nomComuna": "Villa Alemana"
          },
          {
            "codComuna": 3,
            "nomComuna": "Limache"
          },
          {
            "codComuna": 4,
            "nomComuna": "Olmue"
          }
        ]
      }
    ]
  }
}

const responseCreateOposicionMockup = {
  "ok": true,
  "msg": "Operacion realizada correctamente",
  "codExpediente": "ND-1301-3837",
  "resp": {
    "idOposicion": 2
  }
}

const expedientesMockup = {
  "data": [
    {
      "codExpediente": "ND-0602-5511",
      "idTipoExpediente": 1,
      "estado": "P-REG",
      "estadoADM": 2,
      "estadoFirma": null,
      "tipoFirma": 1,
      "idTramiteOV": 15478,
      "idTipoTramite": 10,
      "fechaIngresoDP": null,
      "fechaIngresoDGA": "28-12-2022",
      "tecnico": "dga.admsnia4"
    },
    {
      "codExpediente": "ND-0902-12763",
      "idTipoExpediente": 1,
      "estado": "P-REG",
      "estadoADM": 2,
      "estadoFirma": null,
      "tipoFirma": 1,
      "idTramiteOV": 15496,
      "idTipoTramite": 2,
      "fechaIngresoDP": null,
      "fechaIngresoDGA": "2022-12-27",
      "tecnico": "dga.admsnia3"
    },
    {
      "codExpediente": "ND-0503-5046",
      "idTipoExpediente": 1,
      "estado": "P-REG",
      "estadoADM": 2,
      "estadoFirma": null,
      "tipoFirma": 1,
      "idTramiteOV": 15608,
      "idTipoTramite": 1,
      "fechaIngresoDP": null,
      "fechaIngresoDGA": "2023-1-16",
      "tecnico": null
    },
    {
      "codExpediente": "ND-1304-2232",
      "idTipoExpediente": 1,
      "estado": "P-REG",
      "estadoADM": 2,
      "estadoFirma": null,
      "tipoFirma": 1,
      "idTramiteOV": 15639,
      "idTipoTramite": 2,
      "fechaIngresoDP": null,
      "fechaIngresoDGA": "2023-1-19",
      "tecnico": null
    },
    {
      "codExpediente": "ND-1301-3726",
      "idTipoExpediente": 1,
      "estado": "P-REG",
      "estadoADM": 2,
      "estadoFirma": 3,
      "tipoFirma": 1,
      "idTramiteOV": 15642,
      "idTipoTramite": 2,
      "fechaIngresoDP": null,
      "fechaIngresoDGA": "2023-1-19",
      "tecnico": null
    }
  ],
  "pagination": {
    "pageNumber": 1,
    "limit": 5,
    "total": 71
  }
}

const tiposExpMockup = {
  "ok": true,
  "msg": "Parametro encontrado",
  "params": {
    "tipo": "TIPO-EXP",
    "datos": [
      {
        "codigo": 1,
        "glosa": "ND"
      },
      {
        "codigo": 2,
        "glosa": "NR"
      },
      {
        "codigo": 3,
        "glosa": "VT"
      },
      {
        "codigo": 4,
        "glosa": "VF"
      },
      {
        "codigo": 5,
        "glosa": "VPC"
      },
      {
        "codigo": 6,
        "glosa": "VUC"
      },
      {
        "codigo": 7,
        "glosa": "VFEI"
      },
      {
        "codigo": 8,
        "glosa": "VV"
      },
      {
        "codigo": 9,
        "glosa": "VP"
      },
      {
        "codigo": 10,
        "glosa": "VC"
      },
      {
        "codigo": 11,
        "glosa": "NE"
      },
      {
        "codigo": 12,
        "glosa": "NC"
      },
      {
        "codigo": 13,
        "glosa": "NJ"
      },
      {
        "codigo": 14,
        "glosa": "NA"
      },
      {
        "codigo": 15,
        "glosa": "VDA"
      },
      {
        "codigo": 16,
        "glosa": "VZP"
      },
      {
        "codigo": 17,
        "glosa": "VAR"
      },
      {
        "codigo": 18,
        "glosa": "UA"
      },
      {
        "codigo": 19,
        "glosa": "UC"
      },
      {
        "codigo": 20,
        "glosa": "EIA"
      },
      {
        "codigo": 21,
        "glosa": "DIA"
      },
      {
        "codigo": 22,
        "glosa": "DP"
      },
      {
        "codigo": 23,
        "glosa": "FD"
      },
      {
        "codigo": 24,
        "glosa": "FI"
      },
      {
        "codigo": 25,
        "glosa": "OC"
      },
      {
        "codigo": 26,
        "glosa": "OJ"
      },
      {
        "codigo": 27,
        "glosa": "OA"
      },
      {
        "codigo": 29,
        "glosa": "AR"
      },
      {
        "codigo": 30,
        "glosa": "USU"
      },
      {
        "codigo": 31,
        "glosa": "HIP"
      },
      {
        "codigo": 32,
        "glosa": "FO"
      },
      {
        "codigo": 33,
        "glosa": "DEN"
      }
    ]
  }
}

module.exports = {
    TipoPersonaMockup,
    getExpOposicionMockup,
    regionesMockup,
    comunasMockup,
    responseCreateOposicionMockup,
    expedientesMockup,
    tiposExpMockup
}