export type TabPanelProps = {
	index: string | number
	value: string | number
	children?: React.ReactNode
  [extraProps: string]: any
};

declare const TabPanel: React.ComponentType<TabPanelProps>;

export default TabPanel;