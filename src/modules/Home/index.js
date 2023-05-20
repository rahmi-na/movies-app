import { getPopular } from '@/lib/popular/fetchApi';
import { setPopular } from '@/store/popular';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.popular);

  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
  }, [dispatch]);

  console.log(popular);

  return (
    <div>HomePage</div>
  )
}

export default HomePage;