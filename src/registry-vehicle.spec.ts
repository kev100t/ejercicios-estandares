import { RegistryVehicle } from "./registry-vehicle";

describe("@RegistryVehicle", () => {
  it("#Should returns 400 in status when name does not exist", () => {
    const sut = new RegistryVehicle();

    const httpRequest = {
      body: {
        name: "Toyota",
        model: "Yaris",
        year: 2022,
      },
    };

    const httpResponse = sut.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
  });
});
