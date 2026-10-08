function updatePass() {
  const now = new Date();
  
  // 1. DIGITAL CLOCK ENGINE
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // Converts 0 to 12 for AM/PM layout
  
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('ticket-clock').textContent = timeString;

  // 2. AUTOMATIC RENEW LOGIC (Sets expiry to exactly 1 month out at Midnight)
  const expiryDate = new Date();
  expiryDate.setMonth(now.getMonth() + 1); // Dynamically adds exactly 1 month
  
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const expiryString = expiryDate.toLocaleDateString('en-US', options);
  
  // Set explicit expiration hour string layout to midnight
  document.getElementById('expiry-date').textContent = `Expires ${expiryString} at 12:00 AM`;
}

// Kickstart the card engines instantly, then sweep refresh every 1 second
updatePass();
setInterval(updatePass, 1000);
