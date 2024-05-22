import React from "react";
import { Translations } from "@/lib/translations";
// import { Locale } from "@/i18n.config";
// import { translate } from "utils";

interface MyLinkProps {
  showImage: boolean;
  showText: boolean;
  showFooter: boolean;
  text: Translations["landing"];
  // params: { lang: Locale };
}

export default async function MyLink(
  { showText, showImage, showFooter }: MyLinkProps,
  text: Translations["landing"]
  // {
  //   params: { lang },
  // }: {
  //   params: { lang: Locale };
  // }
) {
  // const text = await translate(lang, "landing");

  return (
    <div>
      {showImage && (
        <div>
          <a
            href="https://discord.com/users/235413280103858176"
            target="_blank"
          >
            <img
              className="w-8"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
              alt="Tetardtek Discord"
            />
          </a>
          <a href="https://github.com/Tetardtek" target="_blank">
            <img
              className="w-8"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="Tetardkte GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/kevin-turnaco/" target="_blank">
            <img
              className="w-8"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="Kevin Turnaco LinkedIn"
            />
          </a>
        </div>
      )}

      {showText && (
        <div className="text-white">
          &nbsp; &nbsp; {text?.DESC_1}
          <br />
          {text?.DESC_2}
          <br />
          <br />
          &nbsp; {text?.DESC_3}
          <br />
          {text?.DESC_4}
          <br />
          <br />
        </div>
      )}

      {showFooter && (
        <footer>
          <div className="text-white">
            &nbsp; Kevin Turnaco &nbsp;
            <br />
            <br />
            &nbsp; Download{" "}
            <a href="" download>
              my CV here
            </a>{" "}
            &nbsp;
            <br />
            <br />
            &nbsp; or contact me{" "}
            <a href="mailto:kvnn64@gmail.com">at this address</a> &nbsp;
          </div>
        </footer>
      )}
    </div>
  );
}
