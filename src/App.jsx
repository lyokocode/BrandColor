import { useSelector } from "react-redux";
import { Sidebar, Content, Copied } from "./components"

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
