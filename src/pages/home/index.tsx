import Image from "next/image";
import Link from "next/link";
import Center from "./components/Center";

import CatBuilderImage from "src/media/catbuilder.jpg";
import GithubIcon from "src/media/links/github.svg";
import TelegramIcon from "src/media/links/telegram.svg";
import SteamIcon from "src/media/links/steam.svg";

export default function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center select-none">
    <div className="w-[760px] min-h-[95%] bg-[#77667f] rounded-sm">
      <Center className="mt-6"><Image
        src={CatBuilderImage}
        alt="cat the builder"
        width={140}
        height={140}
        className="rounded-full"
      /></Center>

      <Center className="mt-2 mb-[-6px] text-2xl">I'm RedHolms</Center>
      <Center>And that's my website</Center>

      <Center className="mb-2 mt-0.5 gap-1">
        <Link title="GitHub" href="https://github.com/RedHolms">
        <Image
          src={GithubIcon}
          alt="GitHub"
          width={24}
          height={24}
        />
        </Link>
        
        <Link title="Telegram" href="https://t.me/redholms">
        <Image
          src={TelegramIcon}
          alt="Telegram"
          width={24}
          height={24}
        />
        </Link>
        
        <Link title="Steam" href="https://steamcommunity.com/id/redholms">
        <Image
          src={SteamIcon}
          alt="Steam"
          width={24}
          height={24}
        />
        </Link>
      </Center>

      <div className="w-full px-5 flex flex-col">
        <span>I'm C++ programmer, but I really like TypeScript and web programming using it (mostly Next.JS).</span>
        <span>Currently there's nothing at this website, but later I will host some cool projects here.</span>
        <span className="mt-2">You can contact me by links above or using email:</span>
        <span className="select-text"><Link href="emailto:arseny.saw4enko@gmail.com">arseny.saw4enko@gmail.com</Link></span>
      </div>
    </div>
    </div>
  );
}
