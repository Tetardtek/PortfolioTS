import { type ParamsProps, translate } from "utils";
// Mes composants
import MyLink from "@components/perso/MyLink";

// Mes images
import headerImage from "@public/png/HEADER.png";

export default async function Home(props: ParamsProps) {
  const text = await translate(props.params.lang, "landing");

  return (
    <>
      <main>
        <div className="bg-black">
          <img src={headerImage.src} alt="Header Image" />
          <MyLink showImage showText showFooter={false} />
          <MyLink showImage showText={false} showFooter />
        </div>
      </main>
    </>
  );
}
