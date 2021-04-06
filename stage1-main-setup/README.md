# Stage 1

Hello everyone 
In this tutorial we'll be building a simple online webstore


We'll be using **ReactJS** + **Apollo GraphQL Client** + **TailwindCSS** + **TypeScript** for the front-end part and **NodeJS** + **Apollo GraphQL Server** + **TypeScript** for the back-end server part

In this tutorial we'll be learning

- How to create fully typed Client + Server application
- Create typed API with GraphQL
- Managing the application state with Appolo Client cache

This is the tutprial start point
In this stage we're setting up the client and server projects, their dependencies  and the environments.
Both projects come with pre-set TypeScript support and pre-configured [Prettier ESLint styleguide](https://prettier.io/)

In order to run project in this and other stage, install the project dependencies from the root directory

```
npm install
```

This will install project dependencies at all stage (this may take a while, so why not make a coffee meanwhile?). 

Then from root of the project you may run

```
npm run stage1
```

this should run the both client and server apps at the stage1, and open your browser at [http://localhost:3000/](http://localhost:3000/) running our super minimalistic stage1 app.

The app is build on top of [Create-React-App](https://create-react-app.dev/docs/getting-started) [TypeScript template](https://create-react-app.dev/docs/adding-typescript/) with some adjustments to support [tailwindcss](https://tailwindcss.com/). You may read more about installing tailwindcss in react apps [here](https://tailwindcss.com/docs/guides/create-react-app).

Now open the `stage1-main-setup/stage1-client` project, navigate arouund, explore the source files at `src/`, play around.


Let's now define the requirements of our project.

- We have list of small book cards on the main page
- The list of the books is paginated
- The book has title, description, cover image, price, one or more author, one or more category  
- On the books list page we can filter books by category
- When we click through the book card we're opening the book full description page, and can add the book to the cart
- We have a checkout button
- In the checkout visitors may see and modify the order
- To create an order user has to be logged in
- Logged in users may see all of their previous orders and their statuses: submitted | in progress | delievered | canceled

We're now ready to move to the next stage!
