import { useState, useEffect, useCallback, useMemo } from "react";
import { ShelterType } from "../../types/shelter/shelterType";
import { getShelterRequest } from "../../api/shelterFetcher";

const useShelter = () => {
  const [shelters, setShelters] = useState<Array<ShelterType>>([]);
  const [selectedShelterId, setSelectedShelterId] = useState<string>();

  const handleShelterReservationClick = useCallback(
    (uid: string) => {
      setSelectedShelterId(uid);
    },
    [setSelectedShelterId]
  );

  useEffect(() => {
    (async () => {
      const res = await getShelterRequest();
      setShelters(res);
    })();
  }, []);

  const shelterList = useMemo(() => shelters, [shelters]);
  const selectedShelter = useMemo(
    () => shelterList.find((sh) => sh.uid === selectedShelterId),
    [selectedShelterId]
  );

  return {
    shelterList,
    selectedShelter,
    handleShelterReservationClick,
  };
};

export default useShelter;
