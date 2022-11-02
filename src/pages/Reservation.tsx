import useShelter from "../hooks/shelter/useShelter";
import useCustomModal from "../hooks/useCustomModal";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import ReservationSearch from "../components/reservation/common/ReservationSearch";
import ReservationCardList from "../components/reservation/card/ReservationCardList";
import ReservationModal from "../components/reservation/modal/ReservationModal";

const Reservation = () => {
  const { shelterList, selectedShelter, handleShelterReservationClick } =
    useShelter();
  const [isReservationModalOpen, handleChangeModalState] = useCustomModal();

  const handleReservationButtonClick = (uid: string) => () => {
    handleShelterReservationClick(uid);
    handleChangeModalState();
  };

  return (
    <CommonBasePageComponent>
      <ReservationSearch />
      <ReservationCardList
        shelters={shelterList}
        onReservationButtonClickEvent={handleReservationButtonClick}
      />
      <ReservationModal
        isModalOpen={isReservationModalOpen}
        selectedShelter={selectedShelter}
        onCloseButtonClickEvent={handleChangeModalState}
      />
    </CommonBasePageComponent>
  );
};

export default Reservation;
