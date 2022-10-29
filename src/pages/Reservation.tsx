import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import ReservationSearch from "../components/reservation/common/ReservationSearch";
import ReservationCardList from "../components/reservation/card/ReservationCardList";

const Reservation = () => {
  return (
    <CommonBasePageComponent>
      <ReservationSearch />
      <ReservationCardList />
    </CommonBasePageComponent>
  );
};

export default Reservation;
