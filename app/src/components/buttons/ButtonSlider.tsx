import { Dispatch, SetStateAction } from 'react';

interface IButtonSliderProps {
  setOnCheck: Dispatch<SetStateAction<boolean>>;
}
const ButtonSlider = ({ setOnCheck }: IButtonSliderProps) => {
  return (
    <label className='switch'>
      <input type='checkbox' onClick={() => setOnCheck((prev) => !prev)} />
      <span>
        <strong></strong>
      </span>
    </label>
  );
};

export default ButtonSlider;
