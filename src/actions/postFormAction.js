
import { REQUEST_NEW_POST, RECEIVE_NEW_POST } from './type';

export const requestNewPost = (data) => ({type: REQUEST_NEW_POST, data});

export const receiveNewPost = (data) => ({type: RECEIVE_NEW_POST, data});