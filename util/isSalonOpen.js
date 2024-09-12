const isSalonOpen = (salon) => {
  if (!salon.openTime || !salon.closeTime) {
    return false;
  }

  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();

  const [openHours, openMinutes] = salon.openTime.split(":").map(Number);
  const [closeHours, closeMinutes] = salon.closeTime.split(":").map(Number);

  const isOpen =
    (currentHours > openHours ||
      (currentHours === openHours && currentMinutes >= openMinutes)) &&
    (currentHours < closeHours ||
      (currentHours === closeHours && currentMinutes < closeMinutes));

  return isOpen;
};

export default isSalonOpen;
