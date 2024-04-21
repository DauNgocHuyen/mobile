// Screen
import React, {ReactElement} from "react";
import Input from "src/screens/Input";
import Calendar from "src/screens/Calendar";
import Report from "src/screens/Report";
import Other from "src/screens/Other";
import ReportDetail from "src/screens/Report/Component/ReportDetail";

export type AppRootParamList = {
  InputRoute: undefined;
  ReportDetailRoute: {data: any; title?: string; money?: string; date?: string};
};
// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}

interface IRoute {
  component: React.ComponentType<ReactElement>;
  name: string;
  title: string;
  icon?: string;
  isBottom?: boolean;
  isPrivate?: boolean;
  isAuth?: boolean;
}
const routes: IRoute[] = [
  // Screen
  {
    component: ReportDetail,
    name: "ReportDetailRoute",
    title: "ReportDetailRoute",
  },
  // bottom tab
  {
    component: Input,
    name: "InputRoute",
    title: "Nhập vào",
    icon: "mode_edit",
    isBottom: true,
  },
  {
    component: Calendar,
    name: "CalendarRoute",
    title: "Lịch",
    icon: "calendar_month",
    isBottom: true,
  },
  {
    component: Report,
    name: "ReportRoute",
    title: "Báo cáo",
    icon: "donut_small",
    isBottom: true,
  },
  {
    component: Other,
    name: "OtherRoute",
    title: "Khác",
    icon: "more_horiz",
    isBottom: true,
  },
];

export default routes;
