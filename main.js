const data = {
  layers: [
    "application",
    "presentation",
    "session",
    "transport",
    "network",
    "data link",
    "physical"
  ],

  Protocoles: [
    "HTTP, FTP, POP3...",
    "ASCII, MPEG, SSL...",
    "NetBIOS, Handshaking connection...",
    "TCP, UDP",
    "IPv4, ARP...",
    "Ethernet, MAC Addresses,...",
    "Cables, Hubs..."
  ],

  Datagrammes: ["Data", "Data", "Data", "Segment", "Packet", "Frame", "Bits"],

  Description: [
    "blabla",
    "blabla",
    "blabla",
    "blabla",
    "blabla",
    "blabla",
    "blabla"
  ]
};

(function() {
  let tbRows = Array.from(document.querySelector("tbody").children);
  let layer = 7;
  for (let i = 1; i < tbRows.length; i++) {
    tbRows[i].setAttribute("data-layer-n", layer);
    console.log(tbRows[i]);
    let tbCells = Array.from(tbRows[i].children);
    for (let j = 0; j < tbCells.length; j++) {
      tbCells[j].setAttribute("data-col-n", j);
      console.log("This cell belong to the layer : " + data.layers[i - 1]);
      //console.log(tbCells[j]);
      if (j === 0) {
        tbCells[j].innerHTML = layer;
      }
    }
    layer--;
  }
})();
