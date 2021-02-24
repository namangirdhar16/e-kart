import { createSelector } from 'reselect';
import directoryReducer from '../reducers/directoryReducer';

const selectDirectory = state => state.directory;

export const selectSections = createSelector(
    [selectDirectory],
    directory => directory.sections
)