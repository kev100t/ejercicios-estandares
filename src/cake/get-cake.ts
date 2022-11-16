export const getCake = async (estaEnferma: boolean) => {
	if (estaEnferma) {
		return "No tendremos torta en la fiesta ya que Kayo está enferma";
	} else {
		return "Kayo hará las tortas para la fiesta";
	}
};
