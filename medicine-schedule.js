function scheduleReminder() {
  let medicineName = document.getElementById('medicineName').value;
  let scheduleDate = document.getElementById('scheduleDate').value;
  let scheduleTime = document.getElementById('scheduleTime').value;
  let interval = document.getElementById('interval').value;

  if (medicineName && scheduleDate && scheduleTime && interval) {
    alert(`Reminder scheduled for ${medicineName} on ${scheduleDate} at ${scheduleTime} with an interval of ${interval} hours.`);
  }
}