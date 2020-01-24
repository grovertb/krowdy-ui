import type { KrowdyIconProps } from "@krowdy-ui/core/Icon";

export interface AudioRecorder {
  classNameCanvas    ?: string;
  classes            ?: object;
  delete             : React.ComponentType<KrowdyIconProps>;
  onBlobUrl          ?: (blobUrl: string) => void;
  onStatus           ?: (status: string) => void;
  pause              : React.ComponentType<KrowdyIconProps>;
  play               : React.ComponentType<KrowdyIconProps>;
  record             : React.ComponentType<KrowdyIconProps>;
  spectroActiveColor ?: string;
  spectroPassiveColor?: string;
  stop               : React.ComponentType<KrowdyIconProps>;
}

declare const AudioRecorder: React.ComponentType<AudioRecorder>;

export default AudioRecorder;