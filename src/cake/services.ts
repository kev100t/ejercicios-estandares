export const getStastusCake = async (sick: boolean) => {
	if (sick) {
		return "No tendremos torta en la fiesta ya que Kayo está enferma";
	} else {
		return "Kayo hará las tortas para la fiesta";
	}
};
