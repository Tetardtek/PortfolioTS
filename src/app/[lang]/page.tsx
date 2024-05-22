import { type ParamsProps, translate } from "utils";
import { Locale } from "@/i18n.config";

// Mes composants
import MyLink from "@components/perso/MyLink";

// Mes images
import headerImage from "@public/png/HEADER.png";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const text = await translate(lang, "landing");

  return (
    <>
      <main>
        <div className="bg-black">
          <img src={headerImage.src} alt="Header Image" />
          <MyLink showImage showText showFooter={false} text={text} />
          {/* insert project // insert technologies */}
          <MyLink showImage showText={false} showFooter text={text} />
        </div>
      </main>
    </>
  );
}
