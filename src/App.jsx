import { useSelector } from "react-redux";
import { Sidebar, Copied } from "./components"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Collection from "./pages/Collection";
import Header from "./components/Header";
import Content from "./pages/Content"

function App() {

  const copied = useSelector((state) => state.copied);

  return (

    <section className="md:flex w-full h-full">
      <Router>

        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Header />
          <Routes>
            <Route element={<Content />} path="/" exact />
            <Route element={<Collection />} path="/c/:slug" />
          </Routes>
        </main>
        {copied && <Copied color={copied} />}
      </Router>
    </section>
  )
}

export default App
