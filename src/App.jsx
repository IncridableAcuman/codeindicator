import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 text-white">
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-extrabold">Hi <span className="text-blue-400">Developer</span></h1>
      </div>
    </div>
  )
}

export default App