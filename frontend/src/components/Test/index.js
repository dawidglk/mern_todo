import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import useStyles from "./style";



const Test = () => {
  const classes = useStyles();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const accessPermission = useSelector((state) => state.auth.access);



  const handleClick = () => {
  
    //   dispatch(logInAction('email', 'password'));
   
  };

console.log(accessPermission)

  return (
    <div className={classes.wrapper}>
        <p>{t('user_name')}</p>
        <p onClick={handleClick}>Klik</p>
    </div>
  );
};

export default Test;