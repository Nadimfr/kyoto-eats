import React from 'react';

type Props = {};

const Button = (props: Props) => {
  const string = 'M-E-N-U';
  return (
    <div className="border-8 flex flex-col items-center justify-center hover:text-white border-black bg-white duration-300 cursor-pointer hover:border-[#BC002D] hover:bg-[#BC002D] p-5 font-anton text-[20px]">
      {string.split('-').map((s, idx) => (
        <div key={idx}>
          {s}
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Button;
