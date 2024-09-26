export function listarTecnologias(
  technologies: { name: string; type: string; poweredByNodejs: boolean }[],
) {
  const list = technologies
    .filter((tech) => tech.poweredByNodejs)
    .map((tech) => `<li>${tech.name} - ${tech.type}</li>`)
    .join("");

  return `<ul>${list}</ul>`;
}
