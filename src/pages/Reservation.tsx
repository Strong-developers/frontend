import useShelter from "../hooks/shelter/useShelter";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import ReservationSearch from "../components/reservation/common/ReservationSearch";
import ReservationCardList from "../components/reservation/card/ReservationCardList";

const Reservation = () => {
  const { shelterList, selectedShelter, handleShelterReservationClick } =
    useShelter();

  const handleReservationButtonClick = (uid: string) => () => {
    handleShelterReservationClick(uid);
  };

  return (
    <CommonBasePageComponent>
      <ReservationSearch />
      <ReservationCardList
        shelters={shelterList}
        onReservationButtonClickEvent={handleReservationButtonClick}
      />
    </CommonBasePageComponent>
  );
};

export default Reservation;
