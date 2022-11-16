import { getStastusCake } from "./services";

describe("@RegistryVehicle", () => {
	it("#Should returns a specific message when it receives true", async () => {
		const sick = true;

		const data = await getStastusCake(true);

		expect(data).toBe(
			"No tendremos torta en la fiesta ya que Kayo está enferma"
		);
	});

	it("#Should returns a specific message when it receives false", async () => {
		const sick = false;

		const data = await getStastusCake(false);

		expect(data).toBe("Kayo hará las tortas para la fiesta");
	});
});
