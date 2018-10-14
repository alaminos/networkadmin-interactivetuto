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

  protocols: [
    "HTTP, FTP, POP3...",
    "ASCII, MPEG, SSL...",
    "NetBIOS, Handshaking connection...",
    "TCP, UDP",
    "IPv4, ARP...",
    "Ethernet, MAC Addresses,...",
    "Cables, Hubs..."
  ],

  datagrammes: ["Data", "Data", "Data", "Segment", "Packet", "Frame", "Bits"],

  description: [
    "blabla",
    "blabla",
    "blabla",
    "blabla",
    "blabla",
    "blabla",
    "blabla"
  ]
};

const columns = new Map([
  //[0, numbers],
  [1, data.layers],
  [2, data.protocols],
  [3, data.datagrammes],
  [4, data.description]
]);

const populateTable = function() {
  let tbRows = Array.from(document.querySelector("tbody").children);
  let layer = 7;

  for (let i = 1; i < tbRows.length; i++) {
    //--------------------------------------------------ROWS (LAYERS)
    tbRows[i].setAttribute("data-layer-n", layer);
    console.log(tbRows[i]);
    let tbCells = Array.from(tbRows[i].children);
    for (let j = 0; j < tbCells.length; j++) {
      //----------------------------------------------COLS (DATA TYPE)
      tbCells[j].setAttribute("data-col-n", j);
      if (j === 0) {
        tbCells[j].innerHTML = layer; //populate cells of first col w/ number of layer
      } else if (j !== 0) {
        let colName = columns.get(j);
        tbCells[j].innerHTML = colName[i - 1];
      }
      //data.layers works
      //b
    }
    layer--;
  }
};
