React Router 7 Resource Route Error Reproduction

To run this reproduction project, clone the repo and run:

```sh
npm run dev
```

There are 3 routes in this project:

- http://localhost:3000/1st - returns plain JS object
- http://localhost:3000/2nd - returns plain JS object wrapped with the `data` util
- http://localhost:3000/3rd - returns plain JS object wrapped with the `Response.json` function

Only the 3rd option works as expected. The other two options return an error:

```
Unexpected Server Error

Error: Expected a Response to be returned from resource route handler
```