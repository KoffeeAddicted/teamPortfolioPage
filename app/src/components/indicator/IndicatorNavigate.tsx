export default function IndicatorNavigate(props: any) {
  const { index, total } = props;
  function Dot(props: any) {
    return (
      <span
        style={{
          display: 'inline-block',
          height: '8px',
          width: '8px',
          borderRadius: '4px',
          backgroundColor: 'white',
          margin: '7px 5px',
          opacity: props.selected ? '1' : '0.3',
          transitionDuration: '300ms',
        }}
      />
    );
  }
  if (props.total < 2) {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: '100',
          bottom: '0px',
          textAlign: 'center',
        }}
      />
    );
  } else {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: '100',
          bottom: '0px',
          textAlign: 'center',
        }}>
        {Array.apply(null, Array(props.total)).map((x, i) => {
          return <Dot key={i} selected={props.index === i} />;
        })}
      </div>
    );
  }
}
