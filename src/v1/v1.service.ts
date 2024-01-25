import { Injectable } from '@nestjs/common';
import { CreateV1Dto } from './dto/create-v1.dto';
import { UpdateV1Dto } from './dto/update-v1.dto';

const mockups = require('./mockups/mockups');

@Injectable()
export class V1Service {
  getExpOposicion(createV1Dto: CreateV1Dto) {
    return  mockups.getExpOposicionMockup;
  }

  tipoPersona() {
    return mockups.TipoPersonaMockup;
  }

  getRegiones() {
    return mockups.regionesMockup;
  }

  update(id: number, updateV1Dto: UpdateV1Dto) {
    return `This action updates a #${id} v1`;
  }

  remove(id: number) {
    return `This action removes a #${id} v1`;
  }
}
