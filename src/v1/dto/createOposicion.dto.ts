import { IsString, IsEmail, IsBoolean, IsNumber, ValidateNested, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class Domicilio {
    @IsNumber()
    comuna: number;

    @IsString()
    domicilio: string;

    @IsNumber()
    provincia: number;

    @IsNumber()
    region: number;

    @IsString()
    telefono: string;
}

class Persona {
    @IsString()
    apellidoPaterno: string;

    @IsString()
    apellidoMaterno: string;

    @IsEmail()
    correo: string;

    @IsEmail()
    correoConfirmacion: string;

    @IsString()
    cup: string;

    @ValidateNested()
    @Type(() => Domicilio)
    domicilio: Domicilio;

    @IsNumber()
    genero: number;

    @IsBoolean()
    isRepresentanteLegal: boolean;

    @IsString()
    nombres: string;

    @IsOptional()
    @IsString()
    razonSocial: string | null;

    @IsString()
    rut: string;

    @IsNumber()
    tipoPersona: number;
}

export class CreateOposicionDto {
    @IsString()
    usuario: string;

    @IsArray()
    @IsString({ each: true })
    docsOposicion: string[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Persona)
    persona: Persona[];
}