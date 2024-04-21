import React, {ReactElement} from "react";
import {Text, View} from "react-native";
import Config from "src/config";
import {ConvertMoney} from "src/screens/Components/ConvertMoney";

interface InputProps {
  title?: string;
  typeMoney?: string | number;
  color?: string;
  style?: any;
}
function InputMoney({
  title,
  typeMoney,
  color,
  style,
}: InputProps): ReactElement {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 35,
        alignItems: "center",
        paddingHorizontal: 10,
        borderColor: Config.COLOR_CONFIG.NEUTRALS_5,
        borderRadius: 5,
        borderWidth: 0.5,
        justifyContent: "space-between",
        ...style,
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: Config.COLOR_CONFIG.NEUTRALS_4,
          width: "30%",
        }}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text style={{color: color, fontSize: 16}}>
        {typeMoney}
        <Text style={{fontSize: 10}}>đ</Text>
      </Text>
    </View>
  );
}

export default InputMoney;
