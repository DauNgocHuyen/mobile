import Config from "src/config";
import React, {memo} from "react";
import {useNavigation} from "@react-navigation/native";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Icon from "src/utils/Icon";

interface IHeaderBackProps {
  title?: string;
  leftIconBack?: boolean;
}

function HeaderBack(props: IHeaderBackProps): React.ReactElement {
  const {title, leftIconBack} = props;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const handleBack = (): void => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const renderDefaultHeader = (): React.ReactElement => (
    <View style={[styles.marginBottom, styles.flexRowBetween]}>
      {leftIconBack && (
        <TouchableOpacity onPress={handleBack} style={styles.leftContent}>
          <View style={styles.iconLeft}>
            <Icon
              icon={"ArrowLeft"}
              size={20}
              color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
            />
          </View>
          <Text numberOfLines={1} style={[styles.routeName]}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View
      style={[
        styles.root,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <StatusBar
        animated
        translucent
        barStyle="light-content"
        showHideTransition="fade"
      />
      {renderDefaultHeader()}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderBottomColor: Config.COLOR_CONFIG.NEUTRALS_5,
    borderBottomWidth: 0.2,
    backgroundColor: Config.COLOR_CONFIG.NEUTRALS_6,
    paddingBottom: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  routeName: {
    fontSize: 16,
    lineHeight: 22.4,
    color: Config.COLOR_CONFIG.BLACK,
    textAlign: "center",
    width: "85%",
  },
  iconLeft: {
    marginRight: 16,
  },
  marginBottom: {
    marginBottom: 5,
  },
  flexRowBetween: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default memo(HeaderBack);
