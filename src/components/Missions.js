import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataRequest } from '../redux/missions/missionsReducer';

const MissionsRender = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);
  return (
    <>
    </>
  );
};

export default MissionsRender;
