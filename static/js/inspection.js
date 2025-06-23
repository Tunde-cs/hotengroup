console.log("inspection.js is loaded and running!");

document.addEventListener('DOMContentLoaded', function() {
  // Attach flatpickr to any <input type="date"> with disabled dates and min date
  flatpickr("input[type='date']", {
    disable: ["2024-07-10"], // Add more dates as needed
    minDate: "today"
  });

  // Inline calendar for availability display
  flatpickr("#availability-calendar", {
    inline: true,
    enable: [
      "2025-07-02",
      "2025-07-04",
      "2025-07-06",
      "2025-07-12"
    ],
    disable: [
      "2025-07-10"
    ],
    minDate: "today",
    dateFormat: "Y-m-d",
  });
});
