import { Injectable } from '@nestjs/common';
import { CreateOposicionDto } from './dto/createOposicion.dto';
import { ExpedienteDto } from './dto/expediente.dto';

const mockups = require('./mockups/mockups');

@Injectable()
export class V1Service {
  getExpOposicion() {
    return  mockups.getExpOposicionMockup;
  }

  tipoPersona() {
    return mockups.TipoPersonaMockup;
  }

  getExpedientes(params: ExpedienteDto){
    console.log('parametros',params);
    return mockups.expedientesMockup;
  }

  getRegiones() {
    return mockups.regionesMockup;
  }

  getComunas(id: number) {
    return mockups.comunasMockup;
  }

  createOposicion(codExpediente: string, body: CreateOposicionDto) {
    return mockups.responseCreateOposicionMockup;
  }
}
