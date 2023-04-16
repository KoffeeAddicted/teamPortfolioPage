import {
  ContainerAbout,
  ContainerContact,
  ContainerIntro,
  ContainerSkills,
} from '~/src/containers';

export default function Index() {
  return (
    <div>
      <ContainerIntro />
      <ContainerSkills />
      <ContainerAbout />
      <ContainerContact />
    </div>
  );
}
