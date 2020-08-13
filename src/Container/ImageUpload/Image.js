import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import './Image.css';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

const Image = () => {
  const [selected, setSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };
  console.log(file);

  return (
    <div>
      <form>
        <label>
          <input type="file" onChange={handleChange} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>

      <ImageGrid setSelected={setSelected}></ImageGrid>
      {selected && <Modal selected={selected}></Modal>}
    </div>
  );
};

export default Image;
