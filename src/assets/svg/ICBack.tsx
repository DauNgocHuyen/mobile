import React from "react";
import Svg, {Path} from "react-native-svg";

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICBack({
  width = 10,
  height = 17,
  color = "#ACACAC",
}: IProps): React.ReactNode {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25708 1.0207C9.95134 1.71496 9.95134 2.84059 9.25708 3.53486L4.29193 8.5L9.25708 13.4651C9.95134 14.1594 9.95134 15.285 9.25708 15.9793C8.56281 16.6736 7.43719 16.6736 6.74292 15.9793L0.520699 9.75708C-0.173566 9.06281 -0.173566 7.93719 0.520699 7.24292L6.74292 1.0207C7.43719 0.326434 8.56281 0.326434 9.25708 1.0207Z"
        fill={color}
      />
    </Svg>
  );
}

export default ICBack;
