import { IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, MaxLength, Min, MinLength } from "@nestjs/class-validator";

export class RegistrationDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@MaxLength(40)
	name: string;

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

	@IsNumber()
	@IsNotEmpty()
	@Min(1)
	education_level_id: number;

	@IsNumber()
	@IsNotEmpty()
	@Min(1)
	formation_id: number;
}