import React from "react";

interface MyLinkProps {
  showText: boolean;
  showImage: boolean;
  showFooter: boolean;
}

export default function MyLink({
  showText,
  showImage,
  showFooter,
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
          &nbsp; &nbsp; Here is my portfolio, I am a web developer and I am
          looking for a job.
          <br />
          Here you can find my projects and the technologies I use.
          <br />
          <br />
          &nbsp; If you want to contact me, you can do it.
          <br />
          I will be happy to answer and work with you.
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
