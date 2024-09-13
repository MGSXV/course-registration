import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const education_level = async () => {
	await prisma.educationLevel.createMany({
		data: [
			{ name: "Niveau baccalauréat" },
			{ name: "Bac +2" },
			{ name: "Bac +3" },
			{ name: "Bac +5" },
			{ name: "Bac +7" },
			{ name: "Autre" }
		]
	})
}

const formation = async () => {
	await prisma.formation.createMany({
		data: [
			{ name: "Informatique" },
			{ name: "Marketing" },
			{ name: "Comptabilité" },
			{ name: "Ressources humaines" },
			{ name: "Autre" }
		]
	})
}

(async () => {
	await prisma.$connect();
	await education_level();
	await formation();
	await prisma.$disconnect();
})()