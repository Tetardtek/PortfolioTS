import { projects } from "../datas/Projects.json";
import { technos } from "../datas/Technos.json";
import { tools } from "../datas/Tools.json";

interface MyProjTechsProps {
  showProj: boolean;
  showTools: boolean;
  text?: {
    PROJECTS: string;
    PROJECTS_START: string;
    PROJECT_1: string;
    PROJECT_2: string;
    PROJECT_3: string;
    PROJECT_4: string;
    PROJECT_5: string;
  };
}

export default async function ProjTechs({
  showProj,
  showTools,
  text,
}: MyProjTechsProps) {
  return (
    <>
      <div className="text-white">
        <h2>{text?.PROJECTS}</h2>
        {showProj && (
          <>
            <div>{text?.PROJECTS_START}</div>
            <div className="projects-card grid grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  className="flex flex-col items-center justify-center"
                  key={project.title}
                >
                  <h2 className="text-2xl hover:text-w-purple">
                    <a href={project.link}>{project.title}</a>
                  </h2>
                  <br />
                  <img
                    className="rounded-lg"
                    src={project.img}
                    alt={project.title}
                  />
                  <br />
                  <p className="text-center">{project.description}</p>
                  <br />
                  <p className="text-xs">{project.techno}</p>
                  <br />
                  <p className="github btn rounded-lg">
                    <a className="btn-in rounded-xl" href={project.github}>
                      <img
                        className="w-8"
                        src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                        alt={project.title}
                      />
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        <br />
        <h2>Technos :</h2>
        {showTools && (
          <>
            <div className="techno inline-block">
              {technos.map((techno) => (
                <div className="btn rounded-lg" key={techno.name}>
                  <div className="btn-in rounded-lg">
                    <h5 className="hover:text-w-purple">
                      <a href={techno.link}>{techno.name}</a>
                      <a href={techno.link}>
                        <img
                          className="w-8"
                          src={techno.img}
                          alt={techno.name}
                        />
                      </a>
                    </h5>
                  </div>
                </div>
              ))}
            </div>

            <br />
            <h2 className="title2">Tools :</h2>
            <br />
            <div className="tools inline-block">
              {tools.map((tool) => (
                <div className="btn rounded-lg" key={tool.name}>
                  <div className="btn-in rounded-xl">
                    <h5 className="hover:text-w-purple">
                      <a href={tool.link}>{tool.name}</a>
                    </h5>
                    <a href={tool.link}>
                      <img className="w-8" src={tool.img} alt={tool.name} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
