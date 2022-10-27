import axios from 'axios';
import {
  DEPARTMENT_REGISTER_REQUEST,
  DEPARTMENT_REGISTER_SUCCESS,
  DEPARTMENT_REGISTER_FAIL,
  DEPARTMENT_DETAILS_REQUEST,
  DEPARTMENT_DETAILS_SUCCESS,
  DEPARTMENT_DETAILS_FAIL,
  DEPARTMENT_DETAILS_RESET,
  DEPARTMENT_LIST_REQUEST,
  DEPARTMENT_LIST_SUCCESS,
  DEPARTMENT_LIST_FAIL,
  DEPARTMENT_LIST_RESET,
  DEPARTMENT_UPDATE_REQUEST,
  DEPARTMENT_UPDATE_SUCCESS,
  DEPARTMENT_UPDATE_FAIL,
  DEPARTMENT_UPDATE_RESET,
} from '../constants/departmentConstants';
import { logout } from './userActions';

export const registerDepartment =
  (name, managerId, status) => async (dispatch) => {
    try {
      dispatch({
        type: DEPARTMENT_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/departments',
        { name, managerId, status },
        config
      );

      dispatch({
        type: DEPARTMENT_REGISTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DEPARTMENT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getDepartmentDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEPARTMENT_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/departments/${id}`, config);

    dispatch({
      type: DEPARTMENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: DEPARTMENT_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listDepartments = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEPARTMENT_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/departments`, config);

    dispatch({
      type: DEPARTMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: DEPARTMENT_LIST_FAIL,
      payload: message,
    });
  }
};

export const updateDepartment = (department) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DEPARTMENT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/departments/${department._id}`,
      department,
      config
    );

    dispatch({ type: DEPARTMENT_UPDATE_SUCCESS });

    dispatch({ type: DEPARTMENT_DETAILS_SUCCESS, payload: data });

    dispatch({ type: DEPARTMENT_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: DEPARTMENT_UPDATE_FAIL,
      payload: message,
    });
  }
};