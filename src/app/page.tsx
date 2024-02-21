import Image from "next/image";
import HomePageComp from "./HomePageComp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePageComp />
    </main>
  );
}
