
import 'CardCandidate' from './CardCandidate'
export type SelectCandidatesProps = {
    CardCandidate: React.ComponentType<CardCandidateProps>,
    Search: any,
    labels: object[],
    labelsCheckbox: string[],
    optionsSelect: string[],
    placeholderSearch: string,
    searchIcon: Node
};

declare const SelectCandidates: React.ComponentType<SelectCandidatesProps>;

export default SelectCandidates;