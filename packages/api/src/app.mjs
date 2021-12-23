import Fastify from 'fastify'

export function build(options = {}) {
  const fastify = Fastify({
    logger: true,
    ...options,
  })

  fastify.get('/', async () => {
    return { hello: 'world' }
  })

  return fastify
}
