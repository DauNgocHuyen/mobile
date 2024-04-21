import React, {ReactElement, useCallback, useState} from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import StatusBar from "src/components/StatusBar";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Config from "src/config";
import Icon from "src/utils/Icon";
// @ts-ignore
import SwitchSelector from "react-native-switch-selector";
import InputMoney from "src/screens/Components/InputMoney";
import TabViewGlobal from "src/components/TabViewGlobal";
import {SceneMap} from "react-native-tab-view";
import ListItemSpending from "src/screens/Components/ListItemSpending";
import MonthPicker from "react-native-month-year-picker";
import moment from "moment";
import ModalGlobal from "src/components/ModalGlobal";
import {ConvertMoney} from "src/screens/Components/ConvertMoney";
import {isIOS} from "src/utils/device";

function Report(): ReactElement {
  const insets = useSafeAreaInsets();
  const [isMonthYear, setIsMonthYear] = useState("month");
  const [date, setDate] = useState(new Date());
  const [dateYear, setDateYear] = useState(new Date());
  const [show, setShow] = useState(false);
  const isApril = date.getMonth() === 3;
  const isYearDate = dateYear.getFullYear() === 2024;
  const showPicker = useCallback((value) => setShow(value), []);
  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);
      setDate(selectedDate);
    },
    [date, showPicker]
  );
  const dataMonthYear = [
    {label: "Hàng Tháng", value: "month"},
    {label: "Hàng Năm", value: "year"},
  ];

  const tabViewListTabs = [
    {
      key: "chitieu",
      title: "Chi tiêu",
    },
    {
      key: "thunhap",
      title: "Thu nhập",
    },
  ];

  let totalMoneySpending = 0,
    totalMoneyIncome = 0;
  dataListSpending.forEach((category) => {
    totalMoneySpending += parseFloat(category.money);
  });
  dataListIncome.forEach((category) => {
    totalMoneyIncome += parseFloat(category.money);
  });

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  };

  const getLastDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(nextMonth);
  };

  const handlePrevYear = () => {
    const prevYear = new Date(dateYear.getFullYear() - 1, dateYear.getMonth());
    setDateYear(prevYear);
  };

  const handleNextYear = () => {
    const nextYear = new Date(dateYear.getFullYear() + 1, dateYear.getMonth());
    setDateYear(nextYear);
  };

  const firstDayOfMonth = getFirstDayOfMonth(date);
  const lastDayOfMonth = getLastDayOfMonth(date);

  const renderScene = SceneMap({
    chitieu: () => (
      <ListItemSpending
        data={isApril ? dataListSpending : []}
        selectedDate={moment(date).format("MM/YYYY")}
      />
    ),
    thunhap: () => (
      <ListItemSpending
        data={isApril ? dataListIncome : []}
        selectedDate={moment(date).format("MM/YYYY")}
      />
    ),
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderBottomColor: Config.COLOR_CONFIG.NEUTRALS_5,
          borderBottomWidth: 0.2,
          backgroundColor: Config.COLOR_CONFIG.NEUTRALS_6,
        }}
      >
        <StatusBar />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
            paddingTop: 15,
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity>
            <Icon
              icon={"camera_alt"}
              size={24}
              color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
            />
          </TouchableOpacity>
          <View style={{width: 200}}>
            <SwitchSelector
              initial={0}
              onPress={(value: string) => setIsMonthYear(value)}
              textColor={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
              selectedColor={Config.COLOR_CONFIG.WHITE}
              buttonColor={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
              borderColor={"#d9d4d4"}
              hasPadding
              borderRadius={5}
              backgroundColor="#d9d4d4"
              height={30}
              isSelected={true}
              options={dataMonthYear}
              testID="gender-switch-selector"
              accessibilityLabel="gender-switch-selector"
            />
          </View>
          <TouchableOpacity>
            <Icon
              icon={"Search"}
              size={24}
              color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={{
          flex: 1,
          // backgroundColor: Config.COLOR_CONFIG.WHITE
        }}
      >
        {/* Calendars */}
        {isMonthYear === "year" ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                paddingHorizontal: 20,
                backgroundColor: "rgba(0,0,0,0.09)",
              }}
            >
              <TouchableOpacity
                onPress={handlePrevYear}
                hitSlop={{right: 10, top: 10, bottom: 10, left: 10}}
              >
                <Icon
                  icon={"ArrowLeft"}
                  size={15}
                  color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{right: 10, top: 10, bottom: 10, left: 10}}
                onPress={() => showPicker(true)}
              >
                <Text style={{fontSize: 20}}>
                  {moment(dateYear).format("YYYY")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{right: 10, top: 10, bottom: 10, left: 10}}
                onPress={handleNextYear}
              >
                <Icon
                  icon={"ArrowRight"}
                  size={24}
                  color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 50,
                alignItems: "center",
                paddingHorizontal: 20,
                backgroundColor: "rgba(0,0,0,0.09)",
              }}
            >
              <TouchableOpacity
                hitSlop={{right: 10, top: 10, bottom: 10, left: 10}}
                onPress={handlePrevMonth}
              >
                <Icon
                  icon={"ArrowLeft"}
                  size={15}
                  color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
                />
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{right: 10, top: 10, bottom: 10, left: 10}}
                onPress={() => showPicker(true)}
              >
                <Text>
                  {moment(date).format("MM/YYYY")}{" "}
                  <Text
                    style={{
                      fontSize: 10,
                      color: Config.COLOR_CONFIG.NEUTRALS_4,
                    }}
                  >
                    ({moment(firstDayOfMonth).format("DD/MM")} -{" "}
                    {moment(lastDayOfMonth).format("DD/MM")})
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                hitSlop={{right: 10, top: 10, bottom: 10, left: 10}}
                onPress={handleNextMonth}
              >
                <Icon
                  icon={"ArrowRight"}
                  size={24}
                  color={Config.COLOR_CONFIG.LIGHT_PRIMARY_1}
                />
              </TouchableOpacity>
            </View>

            <ModalGlobal
              modalVisible={show}
              toggleModal={() => setShow(!show)}
              modalItem={
                <MonthPicker
                  onChange={onValueChange}
                  value={date}
                  minimumDate={new Date()}
                  maximumDate={new Date(2025, 5)}
                  locale="vi"
                />
              }
            />
          </View>
        )}
        {/*  Thu chi */}
        {isMonthYear === "month" && (
          <>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                paddingHorizontal: 15,
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <InputMoney
                title="Chi tiêu"
                color={Config.COLOR_CONFIG.RED}
                typeMoney={
                  isApril
                    ? `-${ConvertMoney(Number(totalMoneySpending))}`
                    : "-0"
                }
                style={{width: "48%"}}
              />
              <InputMoney
                title="Thu nhập"
                color={Config.COLOR_CONFIG.PROGRESS_DONE}
                typeMoney={
                  isApril ? `+${ConvertMoney(Number(totalMoneyIncome))}` : "+0"
                }
                style={{width: "48%"}}
              />
            </View>
          </>
        )}
        {isYearDate ? (
          <InputMoney
            title="Thu chi"
            color={Config.COLOR_CONFIG.BLACK}
            typeMoney={
              isApril ? `${totalMoneyIncome - totalMoneySpending}` : "+0"
            }
            style={{
              marginHorizontal: 15,
              marginTop: 10,
              flex: 1,
              marginBottom: 500,
            }}
          />
        ) : null}
        {isYearDate ? (
          <TabViewGlobal
            styles={{
              marginTop:
                isMonthYear === "month" && isIOS()
                  ? 100
                  : isMonthYear === "month" && !isIOS()
                  ? 120
                  : 70,
              marginHorizontal: 15,
            }}
            tabViewListTabs={tabViewListTabs}
            renderScene={renderScene}
          />
        ) : null}
      </ScrollView>
    </View>
  );
}

// trạng thái status: 1/0 (chi tiêu / thu nhập)
export default Report;
const dataListSpending = [
  {
    id: 1,
    name: "Ăn uống",
    money: "180000",
    ratio: "30",
    status: 1,
    item: [
      {
        date: "22/4",
        reason: "Bún",
        money: "35000",
        name: "Ăn uống",
        status: 1,
      },
      {
        date: "22/4",
        reason: "Cua hoàng đế",
        money: "120000",
        name: "Ăn uống",
        status: 1,
      },
      {
        date: "23/4",
        reason: "Phở",
        money: "30000",
        name: "Ăn uống",
        status: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Chi tiêu hằng ngày",
    money: "10000",
    ratio: "20",
    item: [
      {
        date: "22/4",
        reason: "Chơi gamne",
        money: "32000",
        name: "Chi tiêu hằng ngày",
        status: 1,
      },
      {
        date: "22/4",
        reason: "Nước",
        money: "40000",
        name: "Chi tiêu hằng ngày",
        status: 1,
      },
      {
        date: "23/4",
        reason: "Bánh",
        money: "28000",
        name: "Chi tiêu hằng ngày",
        status: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Quần áo",
    money: "1300000",
    ratio: "24.1",
    item: [
      {
        date: "22/4",
        reason: "Váy",
        money: "800000",
        name: "Quần áo",
        status: 1,
      },
      {
        date: "23/4",
        reason: "Quần",
        money: "100000",
        name: "Quần áo",
        status: 1,
      },
    ],
  },
  {
    id: 4,
    name: "Y tế",
    money: "50000",
    ratio: "10.2",
    item: [
      {
        date: "23/4",
        reason: "Thuốc sốt",
        money: "50000",
        name: "Y tế",
        status: 1,
      },
    ],
  },
  {
    id: 5,
    name: "Liên lạc",
    money: "100000",
    ratio: "20",
    item: [
      {
        date: "23/4",
        reason: "Internet",
        money: "100000",
        name: "Liên lạc",
        status: 1,
      },
    ],
  },
];

const dataListIncome = [
  {
    id: 1,
    name: "Tiền lương",
    money: "35000000",
    ratio: "100",
    status: 0,
    item: [
      {
        date: "15/1",
        reason: "Tiền lương tháng 1",
        money: "7000000",
        name: "Tiền lương",
        status: 0,
      },
      {
        date: "15/2",
        reason: "Tiền lương tháng 2",
        money: "7000000",
        name: "Tiền lương",
        status: 0,
      },
      {
        date: "15/3",
        reason: "Tiền lương tháng 3",
        money: "7000000",
        name: "Tiền lương",
        status: 0,
      },
      {
        date: "15/4",
        reason: "Tiền lương tháng 4",
        money: "7000000",
        name: "Tiền lương",
        status: 0,
      },
    ],
  },
];
