import { useSelector } from "react-redux";
import { Sidebar, Copied } from "./components"
import { lazy } from "react";

const Content = lazy(() => import("./components/Content"))

function App() {

  const copied = useSelector((state) => state.copied);

  return (
    <section className="flex w-full h-full">
      <Sidebar />
      <Content />
      {copied && <Copied color={copied} />}

    </section>
  )
}

export default App
