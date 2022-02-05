import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contact-actions';

const { filterContact } = actions;

const filter = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});

export default combineReducers({ filter });
