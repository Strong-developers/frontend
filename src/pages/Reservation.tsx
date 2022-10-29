import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import ReservationSearch from "../components/reservation/common/ReservationSearch";
import ReservationCard from "../components/reservation/card/ReservationCard";

const Reservation = () => {
  return (
    <CommonBasePageComponent>
      <ReservationSearch />
      <ReservationCard />
    </CommonBasePageComponent>
  );
};

export default Reservation;
