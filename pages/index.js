import Center from "../Components/Center";
import Player from "../Components/Player";
import Sidebar from "../Components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <main className="bg-black h-screen overflow-hidden">
        <Sidebar />
        <Center />
      </main>
      <div>
        <Player />
      </div>
    </div>
  )
}
