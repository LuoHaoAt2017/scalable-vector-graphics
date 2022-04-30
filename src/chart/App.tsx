import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Tooltip } from 'antd';
import { createSvgElem } from './utils';
import Mock, { Random } from "mockjs";

import './index.less';

interface Work {
  uuid: string;
  name: string;
  size: number;
  color: string;
}

const W = 600;
const H = 600;
const ROWS = 6;
const COLS = 6;
const ROW_H = H / ROWS;
const COL_W = W / COLS;
const L_COLOR = '#ccc';

class App extends React.Component {

  private rootRef = React.createRef<HTMLDivElement>();

  componentDidMount() {
    const svg = createSvgElem("svg", W, H);
    svg.setAttribute('width', `${W}`);
    svg.setAttribute('height', `${H}`);
    svg.style.border = '1px solid #ccc';
    this.add_grid_line(svg);
    this.rootRef.current.appendChild(svg);
    const mocks: Work[] = this.get_mock_data();
    mocks.forEach((data, index) => {
      this.add_chart_bar(data, index, svg);
    });
  }

  add_grid_line(svg: SVGElement) {
    const elems: SVGElement[] = [];
    for (let i = 0; i <= ROWS; i++) {
      const path = createSvgElem("path");
      const x = 0;
      const y = i * ROW_H;
      path.setAttribute("d", `M${x} ${y} H ${W}`);
      path.setAttribute("stroke", L_COLOR);
      elems.push(path);
    }
    for (let j = 0; j <= COLS; j++) {
      const path = createSvgElem("path");
      const x = j * COL_W;
      const y = j * 0;
      path.setAttribute("d", `M${x} ${y} V ${H}`);
      path.setAttribute("stroke", L_COLOR);
      elems.push(path);
    }
    svg.append(...elems);
  }

  add_axis_x() {

  }

  add_axis_y() {

  }

  add_chart_bar(work: Work, index: number, container: SVGElement) {
    const rect = createSvgElem("rect");
    rect.setAttribute('x', `0`);
    rect.setAttribute('y', `${index * ROW_H + ROW_H / 4}`);
    rect.setAttribute('width', `${work.size}`);
    rect.setAttribute('height', `${ROW_H / 2}`);
    rect.setAttribute('fill', work.color);

    rect.addEventListener("mouseenter", function (evt) {
      console.log('work: ', work.name);
    });

    container.appendChild(rect);
  }

  get_mock_data() {
    Random.extend({
      uuid() {
        return Random.guid()
      },
      title() {
        return Random.name()
      },
      size() {
        return Random.integer(0, 600);
      },
      fill() {
        return Random.color();
      }
    });
    return Mock.mock({
      'list|6': [{
        uuid: '@uuid',
        name: '@title',
        size: '@size',
        color: '@fill'
      }]
    }).list
  }

  render() {
    return <div ref={this.rootRef} className="container">
    </div>
  }
}

export default App;