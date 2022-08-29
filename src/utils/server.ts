import {
  fastify,
  FastifyInstance,
} from 'fastify'



const start = async () => {
  const server: FastifyInstance = fastify( {} )
  try {
    server.get( '/', ( request, reply ) => 'ok' )
    await server.listen( { port: +process.env.PORT || 5000 } )
  } catch ( err ) {
    server.log.error( err )
    process.exit( 1 )
  }
}
void start()