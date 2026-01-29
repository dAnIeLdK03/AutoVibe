import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { useNavigate } from 'react-router'
import type { RootState } from '../stores/store'
import { getCars } from '../services/carsService';
import { setCars, setLoading, setError, clearError } from '../stores/carsSlice';


function MyCars() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    if(!isAuthenticated || user === null) {
        navigate("/login");
        return null;
    }
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(clearError());
        const fetchCars = async() => {
        try{
            const allCars = await getCars();
            const myCars = allCars.filter(car => car.userId === user.id );
            dispatch(setCars(myCars));
        }catch(error){
            dispatch(setError("Unable to load your cars."));
        }finally{
            dispatch(setLoading(false));
        }
    }
        fetchCars();
        dispatch(setLoading(false));
    }, [user?.id])

    const { cars, loading, error } = useSelector((state: RootState) => state.cars);

  return (
    <div>
      
    </div>
  )
}

export default MyCars
