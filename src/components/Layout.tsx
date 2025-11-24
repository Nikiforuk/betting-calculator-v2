import type { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className='root-container'>
      <Header />
        <main className='main'>
          {children}
        </main>
      <Footer />
    </div>
  )
}
