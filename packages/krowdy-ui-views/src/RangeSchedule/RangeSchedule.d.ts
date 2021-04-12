import React from "react"

export type RangeScheduleProps = {
    onChangeRangeDate?: Function;
    onSchedule?: Function;
    IconToOpen?: React.ReactNode;
}

declare const RangeSchedule : React.ComponentType<RangeScheduleProps>

export default RangeSchedule