import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MaxLength, Min, MinLength } from "@nestjs/class-validator";
import { ECourseHours } from "./types/request-types";
import { IsEnum, Max } from "class-validator";

export class RegistrationDto {
	@IsString({ message: 'Le prénom doit être une chaîne de caractères' })
	@IsNotEmpty({ message: 'Le prénom est obligatoire' })
	@MinLength(4, { message: 'Le prénom doit contenir au moins 4 caractères' })
	@MaxLength(40, { message: 'Le prénom doit contenir au plus 40 caractères' })
	sureName: string;

	@IsString({ message: 'Le nom doit être une chaîne de caractères' })
	@IsNotEmpty({ message: 'Le nom est obligatoire' })
	@MinLength(4, { message: 'Le nom doit contenir au moins 4 caractères' })
	@MaxLength(40, { message: 'Le nom doit contenir au plus 40 caractères' })
	lastName: string;

	@IsString({ message: 'L\'email doit être une chaîne de caractères' })
	@IsNotEmpty({ message: 'L\'email est obligatoire' })
	@MinLength(4, { message: 'L\'email doit contenir au moins 4 caractères' })
	@MaxLength(80, { message: 'L\'email doit contenir au plus 80 caractères' })
	@IsEmail({}, { message: 'L\'email doit être valide' })
	email: string;

	@IsString({ message: 'Le téléphone doit être une chaîne de caractères' })
	@IsNotEmpty({ message: 'Le téléphone est obligatoire' })
	@MinLength(6, { message: 'Le téléphone doit contenir au moins 6 caractères' })
	@MaxLength(20, { message: 'Le téléphone doit contenir au plus 20 caractères' })
	@IsPhoneNumber('FR')
	phone: string;

	@IsString({ message: 'La profession doit être une chaîne de caractères' })
	// @IsNotEmpty({ message: 'La profession est obligatoire' })
	@MinLength(0)
	@MaxLength(100, { message: 'La profession doit contenir au plus 100 caractères' })
	profession?: string;

	@IsEnum(ECourseHours, { message: 'Les heures de cours doivent être une des valeurs suivantes: Journée, Soir, Weekend' })
	courseHours: ECourseHours;

	@IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'L\'âge doit être un nombre' })
	@IsNotEmpty({ message: 'L\'âge est obligatoire' })
	@Min(16, { message: 'L\'âge doit être supérieur ou égal à 16' })
	// @Max(100, { message: 'L\'âge doit être inférieur ou égal à 100' })
	age: number;

	@IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Niveau d\'éducation non valide' })
	@IsNotEmpty({ message: 'Le niveau d\'éducation est obligatoire' })
	@Min(1,  { message: 'Niveau d\'éducation non valide' })
	education_level_id: number;

	@IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Formation non valide' })
	@IsNotEmpty({ message: 'La formation est obligatoire' })
	@Min(1, { message: 'Formation non valide' })
	formation_id: number;
}