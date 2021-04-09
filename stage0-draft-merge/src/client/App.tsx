import React from 'react'

import AppFooter from './_common/AppFooter/AppFooter'
import AppHeader from './_common/AppHeader/AppHeader'

function App() {
  return (
    <div
      className="
        App
        h-screen
        w-full
        relative

        flex
        text-white
        flex-col

        bg-gradient-to-br
        from-purple-500
        to-indigo-500
      "
    >
      <AppHeader />
      <div className="container mx-auto text-center flex flex-1 p-8 justify-center items-center ">
        <p className="text-shadow text-xl">
          Yahoo, you're not ready to move to the next stage!
        </p>
      </div>
      <AppFooter />
    </div>
  )
}

export default App
