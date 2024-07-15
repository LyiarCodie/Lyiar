import { FC } from "react";

import Navbar from '@/app/components/Navbar'

const Home: FC = () => {
  return (
    <main style={{background: "blue", height: "100vh"}}>
      <Navbar />
      <h1>hello</h1>
    </main>
  )
}

export default Home