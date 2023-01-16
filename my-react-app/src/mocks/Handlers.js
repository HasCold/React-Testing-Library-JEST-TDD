// we use Mock service Worker API; officical website :- https://mswjs.io/docs/getting-started

// src/mocks/handlers.js
import { rest } from 'msw'

export const Handlers = [
  rest.post('http://localhost:5000/addcomment', (req, res, ctx) => {  // is end point pr jab network call honge tu wo actual ma nahi honge wo mock hoage ge aur hame ctx.json() response ma milega; 
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true')

    return res(
      // Respond with a 200 status code
      ctx.json({
        id : Date.now(),  // It is our fake server
        text : req.body.text
      })
    )
  }),

]

