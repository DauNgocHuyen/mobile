import React, {ReactElement} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Config from "src/config";
import Icon from "src/utils/Icon";
import TextGlobal from "src/components/TextGlobal";
import {ConvertMoney} from "src/screens/Components/ConvertMoney";
import {useNavigation} from "@react-navigation/native";

interface ItemSpendingProps {
  data?: any;
  selectedDate?: string;
}
function ListItemSpending({
  data,
  selectedDate,
}: ItemSpendingProps): ReactElement {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 15}}>
      {data?.map((item: any) => (
        <TouchableOpacity
          key={item?.id}
          style={{
            borderBottomColor: Config.COLOR_CONFIG.NEUTRALS_6,
            borderBottomWidth: 1,
            height: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("ReportDetailRoute", {
              data: item?.item,
              title: item?.name,
              money: item?.money,
              date: selectedDate,
            })
          }
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/*<Icon*/}
            {/*  icon={"ArrowRight"}*/}
            {/*  size={24}*/}
            {/*  color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}*/}
            {/*/>*/}
            <TextGlobal style={{fontSize: 16}}>{item?.name}</TextGlobal>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                paddingRight: 10,
                fontSize: 18,
              }}
            >
              {ConvertMoney(item?.money)}
              <Text style={{fontSize: 14}}>đ</Text>
            </Text>
            <Text
              style={{
                paddingRight: 5,
                fontSize: 10,
                color: Config.COLOR_CONFIG.NEUTRALS_4,
              }}
            >
              {item?.ratio} %
            </Text>
            <Icon
              icon={"ArrowRight"}
              size={24}
              color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default ListItemSpending;
