const data = [
  {
    name: "layers",
    content: [
      "application",
      "presentation",
      "session",
      "transport",
      "network",
      "data link",
      "physical"
    ]
  },

  {
    name: "protocols",
    content: [
      "HTTP, FTP, POP3...",
      "ASCII, MPEG, SSL...",
      "NetBIOS, Handshaking connection...",
      "TCP, UDP",
      "IPv4, ARP...",
      "Ethernet, MAC Addresses,...",
      "Cables, Hubs..."
    ]
  },

  {
    name: "datagrammes",
    content: ["Data", "Data", "Data", "Segment", "Packet", "Frame", "Bits"]
  },

  {
    name: "description",
    content: [
      "blabla",
      "blabla",
      "blabla",
      "blabla",
      "blabla",
      "blabla",
      "blabla"
    ]
  }
];

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
      } else {
        tbCells[j].innerHTML = data[j - 1].content[i - 1];
      }
    }
    layer--;
  }
};

const startTestMode = function() {
  //clean (or hide?) table content
  //clean table content except one random cel in every col, different rows
  //text input
};
