import React from "react"

interface InitialRangeDate {
    minDate: string;
    maxDate: string
}

export type RangeScheduleProps = {
    onSchedule?: Function;
    IconToOpen?: React.ReactNode;
    initialRange?: InitialRangeDate;
    onCancelSchedule?: Function;
    onPublishSchedule?: Function;
}

declare const RangeSchedule : React.ComponentType<RangeScheduleProps>

export default RangeSchedule