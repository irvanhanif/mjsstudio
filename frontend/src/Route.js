import BookingDetail from "./pages/Booking/BookingDetail/BookingDetail";
import BookingForm from "./pages/Booking/BookingForm/BookingForm";
import BookStudio from "./pages/Booking/BookingStudio/BookStudio";
import Cart from "./pages/Cart/Cart";
import RentDetail from "./pages/Rental/RentalDetail/RentDetail";
import RentCamera from "./pages/Rental/RentalKamera/RentCamera";
import Welcome from "./pages/Welcome";
import Register from "./pages/layouts/auth/Register";
import Login from "./pages/layouts/auth/Login";
import DashboardTes from "./pages/layouts/dashboard/DashboardTes";
import PageNotFound from "./pages/components/PageNotFound";
import DashboardSetting from "./pages/layouts/dashboard/DashboardSetting";

const routeApp = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/rent",
    element: <RentCamera />,
  },
  {
    path: "/rent/:id",
    element: <RentDetail />,
  },
  {
    path: "/book",
    element: <BookStudio />,
  },
  {
    path: "/book/:id",
    element: <BookingDetail />,
  },
  {
    path: "/book-form/:id",
    element: <BookingForm />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard-tes",
    element: <DashboardTes />,
  },
  {
    path: "/dashboard-setting",
    element: <DashboardSetting />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routeApp;
