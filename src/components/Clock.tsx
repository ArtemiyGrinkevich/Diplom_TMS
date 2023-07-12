import React, { useEffect } from 'react';
import { RootState } from '../store';
import {  useAppSelector } from '../hooks/redux';
import { useDispatch } from 'react-redux';
import { updateTime } from '../store/slices/clockSlice';

const Clock: React.FC = () => {
  const dispatch = useDispatch();
  const { time } = useAppSelector((state:RootState) => state.clock);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <div className='clock'>{time}</div>;
};

export default Clock;