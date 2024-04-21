import React, {ReactElement, useEffect, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Config from "src/config";
import Icon from "src/utils/Icon";
import TextGlobal from "src/components/TextGlobal";
import {ConvertMoney} from "src/screens/Components/ConvertMoney";
import {useNavigation} from "@react-navigation/native";

interface ItemSpendingProps {
  data?: any;
}
function ItemMoney({data}: ItemSpendingProps): ReactElement {
  return (
    <View style={{marginHorizontal: 15}}>
      {data?.map((item: any, key: string) => {
        return (
          <View
            key={key}
            style={{
              borderBottomColor: Config.COLOR_CONFIG.NEUTRALS_6,
              borderBottomWidth: 1,
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
              <View>
                <TextGlobal style={{fontSize: 16}}>
                  {`${item?.name}`}{" "}
                  <Text
                    style={{
                      fontSize: 10,
                      color: Config.COLOR_CONFIG.NEUTRALS_4,
                    }}
                  >{`(${item?.reason})`}</Text>
                </TextGlobal>
                <Text
                  style={{fontSize: 12, color: Config.COLOR_CONFIG.NEUTRALS_4}}
                >
                  {item?.date}
                </Text>
              </View>
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
                {item?.status === 1 ? "-" : "+"}
                {ConvertMoney(item?.money)}
                <Text style={{fontSize: 14}}>đ</Text>
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default ItemMoney;
