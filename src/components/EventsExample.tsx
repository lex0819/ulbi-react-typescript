import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('ADA2FF');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setBgColor('FFE5F1');
  };

  return (
    <div>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        style={{ margin: '10px', color: bgColor, fontSize: '1.5rem' }}
      />
      <button onClick={clickHandler}>Color</button>
      <span style={{ margin: '10px', color: bgColor, fontSize: '1.5rem' }}>
        {value}
      </span>
    </div>
  );
};

export default EventsExample;
