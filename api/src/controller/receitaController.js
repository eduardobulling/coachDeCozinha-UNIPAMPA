const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {

    async index(request, response) {
        try {
           const result = await connection('receitas').select('*');

            return response.json(result);

        } catch (error) {
            console.log(error)
        }

    },

    async indexAceitas(request, response) {
      try {
         const result = await connection('receitas').where('status', 'aceita').select('*');

          return response.json(result);

      } catch (error) {
          console.log(error)
      }

  },

    async cadastraReceita(request, response){
      
      const {nomeReceita, nomeCriador, emailCriador, modoPreparo, ingredientes, foto} = request.body
      const idReceita = crypto.randomBytes(4).toString('HEX');

      const status = "enviado"

        await connection('receitas').insert({
            
           idReceita, nomeReceita, nomeCriador,emailCriador, modoPreparo, foto, status, ingredientes

        })

        return response.json({ idReceita });
    }

}