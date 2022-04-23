function getCodeValue() {
  let inputCode = document.getElementById("codeValue").value;
  window.open(`https://linksharing.samsungcloud.com/${inputCode}`, "_blank");
  document.getElementById("dexPath").innerText = `/${inputCode}`;
}
