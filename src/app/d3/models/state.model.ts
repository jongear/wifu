
import * as d3 from 'd3';

export class StateModel implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string;
  name: string;
  shape: string;
  total = 0;
  tooltipHtml: string;

  constructor(id: string, name: string, shape: string) {
    this.id = id;
    this.name = name;
    this.shape = shape;
  }

  get color() {
    return d3.interpolate('#ffffcc', '#800026')(this.total / 100000);
  }
}
