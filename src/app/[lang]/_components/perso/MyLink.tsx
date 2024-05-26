interface MyLinkProps {
  showImage: boolean;
  showText: boolean;
  showFooter: boolean;
  text?: {
    DESC_1: string;
    DESC_2: string;
    DESC_3: string;
    DESC_4: string;
    FOOT_1: string;
    FOOT_2: string;
    FOOT_3: string;
    FOOT_4: string;
  };
}

export default async function MyLink({
  showText,
  showImage,
  showFooter,
  text,
}: MyLinkProps) {
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
            &nbsp; {text?.FOOT_1}{" "}
            <a href="" download>
              {text?.FOOT_2}
            </a>{" "}
            &nbsp;
            <br />
            <br />
            &nbsp; {text?.FOOT_3}{" "}
            <a href="mailto:kvnn64@gmail.com">{text?.FOOT_4}</a> &nbsp;
          </div>
        </footer>
      )}
    </div>
  );
}
