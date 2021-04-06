import React from 'react'

function App() {
  return (
    <div
      className="
        App
        h-screen
        w-full

        flex
        justify-center
        items-center
        text-white

        bg-gradient-to-br
        from-purple-500
        to-indigo-500
      "
    >
      <div className="container text-center">
        <h1 className="text-3xl font-semibold mb-2 text-shadow">
          Bookstore tutorial with ReactJS, TailwindCSS, GraphQL and TypeScript
        </h1>
        <p className="text-white">
          <span className="text-white text-opacity-70">
            Created by Gevorg Harutyunyan
          </span>{' '}
          [
          <a href="https://github.com/modularcoder" className="underline">
            @modularcoder
          </a>
          ]
        </p>
      </div>
    </div>
  )
}

export default App
