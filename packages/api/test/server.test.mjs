import { test } from 'tap'

import { build } from '../src/app.mjs'

test('requests the "/" route', async (t) => {
  const application = build({ logger: false })

  const response = await application.inject({
    method: 'GET',
    url: '/',
  })

  t.equal(response.statusCode, 200, 'returns a status code of 200')
})
