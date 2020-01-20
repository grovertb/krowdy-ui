
import 'CardCandidate' from './CardCandidate'
export type SelectCandidatesProps = {
    CardCandidate: any,
    candidatesSelectIds: number[],
    checkboxIndeterminate: boolean,
    Search: any,
    classes: object,
    checkedCurrentCandidates: any,
    checkedcandidatesToCome: any,
    labels: object[],
    closeIcon: Node,
    dataSource: String[],
    labelsCheckbox: string[],
    optionsSelect: string[],
    numberSelecteds: number,
    onChangeCurrentCandidates: Function,
    onChangeSelectOptions: Function,
    onChangecandidatesToCome: Function,
    itemSelect: any,
    placeholderSearch: string,
    searchIcon: Node
};

declare const SelectCandidates: React.ComponentType<SelectCandidatesProps>;

export default SelectCandidates;