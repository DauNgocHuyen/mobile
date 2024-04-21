import React, {ReactElement} from "react";
import {View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";
import {AppRootParamList} from "src/routes/RouteList";
import HeaderBack from "src/components/Header/HeaderBack";
import {ConvertMoney} from "src/screens/Components/ConvertMoney";
import ItemMoney from "src/screens/Report/Component/ItemMoney";

function ReportDetail(): ReactElement {
  const route = useRoute<RouteProp<AppRootParamList, "ReportDetailRoute">>();
  return (
    <View>
      <HeaderBack
        title={`${route?.params?.title} (${route?.params?.date}) ${ConvertMoney(
          route?.params?.money
        )}đ`}
        leftIconBack={true}
      />
      <ItemMoney data={route?.params?.data} />
    </View>
  );
}

export default ReportDetail;
