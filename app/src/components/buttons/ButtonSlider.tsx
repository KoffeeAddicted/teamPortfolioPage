const ButtonSlider = ({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <label className='switch'>
      <input type='checkbox' onClick={setState} />
      <span>
        <strong></strong>
      </span>
    </label>
  );
};

export default ButtonSlider;
