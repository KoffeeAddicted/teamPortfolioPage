import { ContainerIntro } from '~/src/containers';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <ContainerIntro />
      <div className='w-full h-[200vh]'>Container</div>
    </div>
  );
}