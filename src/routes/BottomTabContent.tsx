import React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "../utils/Icon";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
  useTheme,
} from "@react-navigation/native";
import RouteList from "./RouteList";
import Config from "../config";
import {useTranslation} from "react-i18next";
import {isIOS} from "../utils/device";
import TextGlobal from "../components/TextGlobal";

const {NEUTRALS_2, NEUTRALS_5, LIGHT_PRIMARY_1} = Config.COLOR_CONFIG;

const BottomTabContent = React.memo(function BottomTabContent() {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const theme = useTheme().colors;
  const route = useRoute();
  const currentRoute = getFocusedRouteNameFromRoute(route) ?? "InputRoute";

  const getColor = (name: string, index: number): string => {
    if (currentRoute === undefined) {
      return index === 0 ? LIGHT_PRIMARY_1 : NEUTRALS_5;
    }

    if (name === currentRoute) {
      return LIGHT_PRIMARY_1;
    }

    return NEUTRALS_5;
  };

  return (
    <View style={[styles.main, {backgroundColor: theme.background}]}>
      {RouteList.map(
        ({name, title, icon, isBottom}, index) =>
          isBottom && (
            <TouchableOpacity
              activeOpacity={1}
              key={name}
              onPress={(): void => {
                // @ts-ignore
                navigation.navigate(name);
              }}
              style={styles.itemContainer}
            >
              <Icon
                icon={icon ?? "more_horiz"}
                size={30}
                color={getColor(name, index)}
              />
              <TextGlobal
                style={{
                  color: getColor(name, index),
                  fontSize: 12,
                }}
              >
                {t(title)}
              </TextGlobal>
            </TouchableOpacity>
          )
      )}
    </View>
  );
});

export default BottomTabContent;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    backgroundColor: "rgba(224,224,224,0.18)",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: NEUTRALS_5,
  },
  main: {
    alignItems: "center",
    bottom: 0,
    display: "flex",
    elevation: 5,
    flexDirection: "row",
    height: isIOS() ? 80 : 70,
    justifyContent: "space-around",
    left: 0,
    position: "absolute",
    right: 0,
  },
});
