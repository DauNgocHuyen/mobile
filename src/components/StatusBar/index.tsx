import React, {ReactElement} from "react";
import {StatusBar as RNStatusBar, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Config from "../../config";

export default function StatusBar(): ReactElement {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: insets.top,
        backgroundColor: "transparent",
      }}
    >
      <RNStatusBar
        backgroundColor={Config.COLOR_CONFIG.NEUTRALS_6}
        barStyle="dark-content"
      />
    </View>
  );
}
