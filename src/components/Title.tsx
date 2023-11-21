import React from 'react';
import Image from '../../node_modules/next/image';

type Props = {};

const Title = (props: Props) => {
  return (
    <div className="w-[300px] h-[300px] rounded-full bg-[#BC002D] flex items-center justify-center -mt-32">
      <div className="text-black leading-none text-center font-anton font-bold text-[90px] mt-52">
        KYOTO<br></br>EATS
      </div>
    </div>
  );
};

export default Title;
