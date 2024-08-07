import { FC } from "react";
import { XLogo } from "@phosphor-icons/react/dist/ssr";

import "@/app/home.css";

const Home: FC = () => {
  return (
    <main className="home">
      <div className="message">
        <h1>Hi, i&apos;m still under construction 🥹</h1>
        <h3>But... you can still find about me on:</h3>
        <PageLink 
          href="https://x.com/lyiar_u"
        >
          <XLogo size={32} />
        </PageLink>
      </div>
      <div className="picture-informations">
        Photo by 
        <PageLink 
          target="_blank"
          href="https://www.pexels.com/photo/village-with-residential-houses-on-snowy-mounts-4947573/"
        >
          Maria Orlova
        </PageLink>
        on Pexels
      </div>
    </main>
  )
}

const PageLink: FC<{href: string, children: React.ReactNode, target?: "_blank"}> = ({href, children, target}) => {
  return (
    <a 
          rel='noreferrer nofollow' 
          target={target} 
          href={href}
          style={{position: "relative"}}
        >
          {children}
        </a>
  )
}

export default Home