import React from 'react';
import { toast } from 'react-toastify';

const CustomToast = ({ message }) => (
<>
<div className="bg-green-500 text-white p-4 rounded z-40 ">
    {message}
  </div>
</>
);

export default CustomToast
