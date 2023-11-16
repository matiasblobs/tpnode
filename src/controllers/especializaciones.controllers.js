import { M_especializaciones } from "../model/medicos.js";
import { MedicosEspecializaciones } from "../model/medicos.js";


// VER TODOS

const mostrarTodo = async (req,res) => {
    try {        
    const items = await M_especializaciones.findAll();
    console.log(items);
    res.json(items); 
    } catch (error){
        res.status(500).json({message: error.message})
    };    
};



// CREAR

const crearItem = async (req, res) => {
    // VAMOS A USAR UNA RUTA CON POST, ENTONCES TOMAMOS LOS DATOS DESDE EL BODY DEL REQ Y LOS CARGAMOS EN CONSTANTES
    const {
        especializacion
    } = req.body;

    // CREAMOS EL ITEM USANDO LAS CONSTANTES (TIENEN LOS MISMOS NOMBRES QUE LOS CAMPOS DE LA TABLA)
    const nuevoItem = await M_especializaciones.create( {
        especializacion
    } );

    console.log(nuevoItem);
    // DAMOS UNA RESPUESTA SÓLO PARA CERRAR LA FUNCIÓN
    res.send('Entrada creada con éxito');
}
// VER UNO

const mostrarUno = async (req,res) => {
    // SIEMPRE TRABAJAR CON TRY CATCH
    try {
        // RESPONDEMOS A UNA FUNCION GET CON UN PARAMETRO ID QUE IDENTIFICA EL ITEM A MODIFICAR
        const { id } = req.params;
        // CON SEQUALIZE USANDO ESA ID BUSCAMOS EL ITEM
        const item = await M_especializaciones.findByPk(id);
        // DAMOS RES
        res.json(item);

    } catch (error) {
        res.status(500).json({message: error.message})
    }  
}
// BORRAR

const borrarItem = async (req, res) => {
    try {
        // RESPONDEMOS A UNA RUTA DELETE CON UN PARAMETRO ID QUE IDENTIFICA EL ITEM A MODIFICAR
        const { id } = req.params;

        /// Agregar control de realacion de tablas
     const medicosVinculados =  await MedicosEspecializaciones.findAll({
            where: {
                especializacioneId : id,
            }
        });

        if (medicosVinculados.length > 0) {
            return res.status(400).json({error: 'No se puede borrar la especializacion, porque se encuentra asignada a un medico'})
        }
 
    // CON SEQUELIZE DESTROY BORRAMOS EL ITEM
    await M_especializaciones.destroy({
        where: {
            //id: id,  id de la tabla y id de param, pero como los dos son iguales podemos poner asi cmo sigue
            id,
        },
    }) ;
    } catch (error) {
        res.status(500).json({message: error.message});
    }    

    // DAMOS RES
    res.send("Item borrado");
}
// EDITAR

const actualizarItem = async (req, res) => {
    try {

        // ESTO ES UNA RUTA PUT CON UN PARAMETRO ID, buscamos la id para definir que item vamos a modificar
        const { id } = req.params;

        // Y DESDE EL BODY CARGAMOS LA INFO EN CONSTANTES CON EL MISMO NOMBRE QUE LOS CAMPOS DE LA TABLA
        const { especializacion
            } = req.body;

        // BUSCAMOS EL ITEM, SI NO LO ENCUENTRA TIRAMOS UN RETURN QUE CIERRA LA FUNCION    
        const item = await M_especializaciones.findByPk(id);
        if(!item) {
            return res.status(400).json({error: 'El item a modificar no fue encontrado'})
        };

        // cargamos la info en el objeto

        item.especializacion = especializacion;
       

        //ahora lo gabamos en la base de datoscon sequelize
        await item.save();

        res.json(item);
    } catch (error) {
        return res.status(500).json({messsage:error.message});
    }
    
}

///////////

export { mostrarTodo, crearItem, mostrarUno, borrarItem, actualizarItem };