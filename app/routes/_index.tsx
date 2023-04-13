import {
  ContainerAbout,
  ContainerIntro,
  ContainerSkills,
} from '~/src/containers';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <ContainerIntro />
      <ContainerSkills />
      <ContainerAbout />
    </div>
  );
}
