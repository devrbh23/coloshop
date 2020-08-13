import React from 'react';
import Slider from '@material-ui/core/Slider';

const Sliders = () => {
  const [value, setValue] = React.useState([0]);

  const handleChange = (e, newValue) => {
    setValue(+newValue);
  };
  const valuetext = (value) => value;

  return (
    <div>
      <h4>Filter By Price</h4>
      <div>
        $0 - <span>$ {value}</span>
      </div>
      <div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          min={0}
          max={1000}
          style={{width: '90%', margin: ' 0 0 10px 10px', color: '#fe4c50'}}
        />
      </div>
      <button
        style={{
          border: 'solid',
          width: '100%',
          margin: '0 10px 20px 0',
          height: '35px',
          color: 'white',
          background: 'black',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default Sliders;
