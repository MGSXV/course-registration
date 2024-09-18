import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MaxLength, Min, MinLength } from "@nestjs/class-validator";
import { ECourseHours } from "./types/request-types";
import { IsEnum, Max } from "class-validator";

export class RegistrationDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(40)
	sureName: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(40)
	lastName: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(40)
	@IsEmail()
	email: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(6)
	@MaxLength(20)
	@IsPhoneNumber('FR')
	phone: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(100)
	profession?: string;

	@IsEnum(ECourseHours)
	courseHours: ECourseHours;

	@IsNumber()
	@IsNotEmpty()
	@Min(16)
	@Max(100)
	age: number;

	@IsNumber()
	@IsNotEmpty()
	@Min(1)
	education_level_id: number;

	@IsNumber()
	@IsNotEmpty()
	@Min(1)
	formation_id: number;
}