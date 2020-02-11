import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_GREY } from '../../app/styles';

const SvgHome = props => {
  const color = props.active ? COLOR_BASE_PRIMARY_MAIN : COLOR_GREY;
  return (
    <Svg
      width="25"
      height="27"
      viewBox="0 0 25 27"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 9.75L12.25 1L23.5 9.75V23.5C23.5 24.163 23.2366 24.7989 22.7678 25.2678C22.2989 25.7366 21.663 26 21 26H3.5C2.83696 26 2.20107 25.7366 1.73223 25.2678C1.26339 24.7989 1 24.163 1 23.5V9.75Z"
        stroke="#30B27C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8.5 26V13.5H16V26"
        stroke="#30B27C"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default SvgHome;
