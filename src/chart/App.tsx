import { useEffect, useState, useRef } from 'react';
import { createSvgElem } from './utils';

import './index.less';

const App = (props) => {
  const rootRef = useRef(null);
  useEffect(() => {
    console.log('createSvgElem');
    const svg = createSvgElem();
    rootRef.current.appendChild(svg);
  }, []);

  return <div ref={rootRef} className="container"></div>
}

export default App;