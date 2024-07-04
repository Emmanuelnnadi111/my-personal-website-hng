document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const options = { weekday: "long" };
  const currentDay = currentDate.toLocaleDateString("en-US", options);

  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    currentDate.toUTCString();
  document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
});
