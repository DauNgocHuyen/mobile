import React, {ReactElement} from "react";
import {View} from "react-native";
import StatusBar from "src/components/StatusBar";

function Calendar(): ReactElement {
  return (
    <View>
      <StatusBar />
    </View>
  );
}

export default Calendar;
