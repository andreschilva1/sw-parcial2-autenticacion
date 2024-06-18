import Mantenimiento from "../models/mantenimiento.js";



const getAllMantenimientos = async () => {
  
  const allMantenimientos = await Mantenimiento.findAll();
  return allMantenimientos;
};

const addMantenimiento = async ({ idActivo,nombreActivo,fechaMantenimiento}) => {
  //const existMantenimiento = await prisma.Mantenimiento.findUnique({ where: { email } });
  const newMantenimiento = await Mantenimiento.create({
      idActivo,
      nombreActivo,
      fechaMantenimiento,
  });

  return newMantenimiento;
};


export default { getAllMantenimientos, addMantenimiento};
