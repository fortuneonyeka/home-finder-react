import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import UserDetailsContext from "../../context/UserDetailsContext";
import { bookInspection } from "../../utils/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModel = ({ opened, setOpened, propertyId, email }) => {
  const [value, setValue] = useState(null);

  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailsContext);

  const handleBookingSuccess = () => {
    toast.success(
      "You have successfully booked your inspection for this property",
      {
        position: "bottom-right",
      }
    );
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        { id: propertyId, date: dayjs(value).format("DD/MM/YYYY") },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookInspection(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => !setOpened(),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Pick your date for inspection"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book Inspection
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModel;
