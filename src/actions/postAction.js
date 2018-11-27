import { REQUEST_POST_DATA, RECEIVE_POST_DATA } from './type';

export const requestPostData = () => ({type: REQUEST_POST_DATA});

export const receivePostData = (data) => ({type: RECEIVE_POST_DATA, data});

