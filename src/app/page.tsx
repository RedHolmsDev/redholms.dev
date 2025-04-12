import MyLink from "./components/MyLink";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={"w-screen h-screen flex justify-center items-center bg-[#4d3957] " + styles.background}>
      <div className={"w-150 h-90 bg-[#242424] flex flex-col items-center relative text-lg " + styles.box}>
        <h1 className="text-xl mt-7">Here's some of my links:</h1>
        
        <MyLink className="mt-2" href="https://github.com/RedHolms">GitHub</MyLink>
        <MyLink href="https://t.me/redholms">Telegram</MyLink>
        <MyLink href="https://steamcommunity.com/id/redholms/">Steam</MyLink>
        <MyLink className="ml-40" href="https://www.twitch.tv/redholms">
          Twitch
          <span className="text-xs"> (I'm a streamer sometimes!)</span>
        </MyLink>

        <h1 className="text-[0.5rem] mb-1 absolute bottom-0">This website will be more someday, I swear</h1>
      </div>
    </div>
  );
}
