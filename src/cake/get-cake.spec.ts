import { getCake } from "./get-cake";

describe("@RegistryVehicle", () => {
  it("#Should returns an specific message", async () => {
    const data = await getCake(true);

    expect(data).toBe('No tendremos torta en la fiesta ya que Kayo está enferma');
  });

  it("#Should returns another specific message", async () => {
    const data = await getCake(false);

    expect(data).toBe('Kayo hará las tortas para la fiesta');
  });
});