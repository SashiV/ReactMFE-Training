import React, { useEffect, useRef } from 'react';
import {mount} from 'paymentsadd/PaymentsAdd';
import { useNavigate } from 'react-router-dom';

const PaymentsAdd = () : JSX.Element => {

  const paymentsadddiv = useRef<HTMLDivElement>(null);
  
  useEffect( () => {
    mount(paymentsadddiv.current, {serverUrl : "https://paymentsdemo.neueda.com"});
  } , []);

  return (
    <div ref={paymentsadddiv} />
  );
}

export default PaymentsAdd;
