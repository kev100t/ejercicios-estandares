import { getStastusCake } from "./services";


export const getStatusCake = async (req, res) => {
    const { sick } = req.query;

    const sickValue = sick === 'true' ? true : false;

    const data = await getStastusCake(sickValue);

    res.status(200).json(data);
}