const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

    async index(request, response) {
        try {
           const result = await connection('ingredientes').select('*');

            return response.json(result);

        } catch (error) {
            console.log(error)
        }

    },

    async indexAceitas(request, response) {
      try {
         const result = await connection('ingredientes').where('status', 'aceita').select('*');

          return response.json(result);

      } catch (error) {
          console.log(error)
      }

  },

    async cadastraIngrediente(request, response){
      
      const {nomeIngrediente} = request.body
      const idIngrediente = crypto.randomBytes(4).toString('HEX');

      const status = "enviado"

        await connection('ingredientes').insert({
            
           idIngrediente, nomeIngrediente

        })

        return response.json({ idIngrediente });
    }

}