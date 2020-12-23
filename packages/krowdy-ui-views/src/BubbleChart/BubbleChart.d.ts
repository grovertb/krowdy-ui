interface Skill {
  name: string;
}

interface SkillCandidate {
  name      : string;
  scaleOrder: number;
  value     : string;
}

interface Candidate {
  firstName: string;
  lastName: string;
  photo   : string;
  selected: boolean;
  skillsCandidate: SkillCandidate[]
}

interface BubbleChartProps {
  max: number;
  skills: Skill[];
  candidates: Candidate[];
  skillWidth?: number | string;
}

declare const BubbleChart: React.ComponentType<BubbleChartProps>;

export default BubbleChart;