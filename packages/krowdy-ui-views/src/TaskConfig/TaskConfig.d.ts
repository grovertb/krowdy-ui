export type TaskConfigProps = {
  action          ?: React.ReactNode;
  actionFooter    ?: React.ReactNode;
  back            ?: React.ReactNode;
  panelCandidates ?: React.ReactNode;
  panelResponsable?: React.ReactNode;
  panelTask       ?: React.ReactNode;
  taskTextField   ?: React.ReactNode;
  urlIconTask     ?: string;
};

declare const TaskConfig: React.ComponentType<TaskConfigProps>;

export default TaskConfig;