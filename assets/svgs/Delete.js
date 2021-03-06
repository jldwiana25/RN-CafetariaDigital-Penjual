import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const SvgDelete = props => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Rect width="20" height="20" rx="2" fill="#EA2D2D" />
    <Path
      d="M4.75 6.5H15.25"
      stroke="white"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M7.66666 6.50001V5.33334C7.66666 5.02392 7.78957 4.72717 8.00837 4.50838C8.22716 4.28959 8.5239 4.16667 8.83332 4.16667H11.1667C11.4761 4.16667 11.7728 4.28959 11.9916 4.50838C12.2104 4.72717 12.3333 5.02392 12.3333 5.33334V6.50001M14.0833 6.50001V14.6667C14.0833 14.9761 13.9604 15.2728 13.7416 15.4916C13.5228 15.7104 13.2261 15.8333 12.9167 15.8333H7.08332C6.7739 15.8333 6.47716 15.7104 6.25837 15.4916C6.03957 15.2728 5.91666 14.9761 5.91666 14.6667V6.50001H14.0833Z"
      stroke="white"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.83334 9.41667V12.9167"
      stroke="white"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11.1667 9.41667V12.9167"
      stroke="white"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default SvgDelete;
