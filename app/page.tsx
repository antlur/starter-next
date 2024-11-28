import Image from "next/image";

export default function Home() {
  console.log("Home Page");
  return (
    <div>
      <div className="max-w-xl">
        <Image
          src="https://cdn.bckstg.app/media/1129/circle-tavern-screenshot.png"
          alt="Circle Tavern"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
