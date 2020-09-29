interface Candidate{
  firstName?: string;
  lastName? : string;
  photo?    : string;
  salary?   : number;
  selected? : boolean;
}

interface HistogramProps {
  candidates?: Candidate[];
  multiplier: number;
}

declare const Histogram: React.ComponentType<HistogramProps>;

export default Histogram;