interface Classes {
  audio: Record<string, string | number>
  barContainer: Record<string, string | number>
  button: Record<string, string | number>
  canvas: Record<string, string | number>
  container: Record<string, string>
  counter: Record<string, string | number>
}
export interface AudioRecorder {
  classNameCanvas?: string;
  classes?: Classes;
  delete: React.ReactNode;
  onBlobUrl?: (blobUrl: string) => void;
  onStatus?: (status: string) => void;
  pause: React.ReactNode;
  play: React.ReactNode;
  record: React.ReactNode;
  spectroActiveColor?: string;
  spectroPassiveColor?: string;
  stop: React.ReactNode;
}

declare const AudioRecorder: React.ComponentType<AudioRecorder>;

export default AudioRecorder;