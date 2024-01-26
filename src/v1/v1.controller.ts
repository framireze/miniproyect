import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { V1Service } from './v1.service';
import { CreateOposicionDto } from './dto/createOposicion.dto';
import { ExpedienteDto } from './dto/expediente.dto';

@Controller('v1')
export class V1Controller {
  constructor(private readonly v1Service: V1Service) {}

  @Get('buscarExpOposicionOV')
  create() {
    return this.v1Service.getExpOposicion();
  }

  @Get('tipoPersona')
  getPersonas() {
    return this.v1Service.tipoPersona();
  }

  @Get('regiones')
  getAllRegiones() {
    return this.v1Service.getRegiones();
  }

  @Get('expedientesTest')
  getAllExpedientes(@Query() queryparams: ExpedienteDto) {
    return this.v1Service.getExpedientes(queryparams);
  }

  @Get('comunas/:id')
  getAllComunas(@Param('id') id: string) {
    return this.v1Service.getComunas(+id);
  }

  @Post('crearOposicion/:codExpediente')
  createOpo(@Param('codExpediente') codExpediente: string, @Body() body: CreateOposicionDto) {
    return this.v1Service.createOposicion(codExpediente, body);
  }
}
