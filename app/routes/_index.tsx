import {
  ContainerAbout,
  ContainerContact,
  ContainerIntro,
  ContainerSkills,
  ContainerWork,
} from '~/src/containers';

export default function Index() {
  return (
    <div>
      <ContainerIntro />
      <ContainerSkills />
      <ContainerWork />
      <ContainerAbout />
      <ContainerContact />
    </div>
  );
}
