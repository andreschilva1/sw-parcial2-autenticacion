import Mantenimiento from "../services/mantenimiento.service.js";

const getAllMantenimientos = async (req, res) => {
    try {
      const allMantenimiento = await Mantenimiento.getAllMantenimientos();
      return res.status(200).json(allMantenimiento);
    } catch (error) {
      console.log("Error Server: ", error);
      return es.status(500).json(error);
    }
  };
  
  const addMatenimiento = async (req, res) => {
    try {
      const { idActivo,nombreActivo,fechaMantenimiento} = req.body;
      const newMantenimiento = await Mantenimiento.addMantenimiento({idActivo,nombreActivo,fechaMantenimiento});
      if (!newMantenimiento)
        return res.status(400).json({ message: "El email ya existe" });
  
      return res.status(201).json(newMantenimiento);
    } catch (error) {
      console.log("ERROR SERVER!", error);
      return res.status(500).json(error);
    }
  };
  
  
  export  { getAllMantenimientos, addMatenimiento};
  
