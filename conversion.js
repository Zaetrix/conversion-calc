function convert() {
  const value = parseFloat(document.getElementById("valueInput").value);
  const type = document.getElementById("conversionType").value;
  const resultElem = document.getElementById("conversionResult");

  if (isNaN(value) || value <= 0) {
    resultElem.textContent = "Enter a valid number.";
    return;
  }

  let result;
  switch (type) {
    case "mbpsToMBps":
      result = `${(value / 8).toFixed(2)} MB/s`;
      break;
    case "MBpsToMbps":
      result = `${(value * 8).toFixed(2)} Mbps`;
      break;
    case "gbToMb":
      result = `${(value * 1024).toFixed(2)} MB`;
      break;
    case "mbToGb":
      result = `${(value / 1024).toFixed(2)} GB`;
      break;
    case "gbToTb":
      result = `${(value / 1024).toFixed(4)} TB`;
      break;
    case "tbToGb":
      result = `${(value * 1024).toFixed(2)} GB`;
      break;
    default:
      result = "Unknown conversion.";
  }

  resultElem.textContent = `Result: ${result}`;
}
