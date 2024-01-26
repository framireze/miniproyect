import { IsString, IsNumber, IsOptional } from 'class-validator';

export class ExpedienteDto {
    @IsNumber()
    limit: number;

    @IsNumber()
    pageNumber: number;

    @IsNumber()
    idTipoExpediente: number;

    @IsNumber()
    estadoADM: number;

    @IsOptional()
    @IsString()
    estado: string;
}