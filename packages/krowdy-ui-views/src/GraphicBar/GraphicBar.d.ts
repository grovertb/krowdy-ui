interface Candidate{
  firstName?: string;
  lastName? : string;
  photo?    : string;
  salary?   : number;
  selected? : boolean;
}

interface GraphicBarProps {
  candidates?: Candidate[];
  multiplier: number;
}

declare const GraphicBar: React.ComponentType<GraphicBarProps>;

export default GraphicBar;