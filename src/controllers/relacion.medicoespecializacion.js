import { MedicosEspecializaciones, M_medicos, M_especializaciones } from "../model/medicos.js";


// VER TODOS

const mostrarRelaciones = async (req,res) => {
    try {        
    const items = await MedicosEspecializaciones.findAll();
    console.log(items);
    res.json(items); 
    } catch (error){
        res.status(500).json({message: error.message})
    };    
};

/// CREAR

const crearRelacion = async (req, res) => {
    try {
        const {
            // datos personales
            medicoId, especializacioneId
        } = req.body;

        const especializacion = await M_especializaciones.findByPk(especializacioneId);

        if(!especializacion) {
            return res.status(400).json({error: 'La especialización seleccionada no existe'})
        };

        const medico = await M_medicos.findByPk(medicoId);

        if(!medico) {
            return res.status(400).json({error: 'El medico seleccionado no existe'})
        };
        
        const nuevoItem = await MedicosEspecializaciones.create( {
            // datos personales
            medicoId, especializacioneId
       } ); 
       console.log(nuevoItem);
       res.send('Entrada creada con éxito');



        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }


}

// borrar relacion

const borrarRelacion = async (req, res) => {
    try {
        // RESPONDEMOS A UNA RUTA DELETE CON UN PARAMETRO ID QUE IDENTIFICA EL ITEM A MODIFICAR
        const { id } = req.params;
    // CON SEQUELIZE DESTROY BORRAMOS EL ITEM
    await MedicosEspecializaciones.destroy({
        where: {
            id,
        },
    }) ;
    } catch (error) {
        res.status(500).json({message: error.message});
    }    
    // DAMOS RES
    res.send("Relación borrada");
}

////////




export { crearRelacion, mostrarRelaciones, borrarRelacion };