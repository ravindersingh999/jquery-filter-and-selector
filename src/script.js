var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

var brands = [
  { name: "All Brands", value: "1" },
  { name: "Apple", value: "Apple" },
  { name: "Motorola", value: "Motorola" },
  { name: "Samsung", value: "Samsung" },
  { name: "ASUS", value: "ASUS" },
  { name: "Microsoft", value: "Microsoft" },
];
var os = [
  { name: "All OS", value: "1" },
  { name: "iOS", value: "iOS" },
  { name: "Android", value: "Android" },
  { name: "Windows", value: "Windows" },
];
display_products();
display_brands();
display_os();
function display_brands() {
  var disp = "<select id='brand_select' name='brand'>";
  for (var i = 0; i < brands.length; i++) {
    disp +=
      "<option data-id='" +
      brands[i].value +
      "' value='" +
      brands[i].value +
      "'>" +
      brands[i].name +
      "</option>";
  }
  disp += "</select>";
  $("#brand").html(disp);
}
function display_os() {
  var disp = "<select id='os_select' name='os'>";
  for (var i = 0; i < os.length; i++) {
    disp +=
      "<option data-os='" +
      os[i].value +
      "' value='" +
      os[i].value +
      "'>" +
      os[i].name +
      "</option>";
  }
  disp += "</select>";
  $("#os").html(disp);
}

$(document).ready(function () {
  display_products();
  $("#brand").on("change", "#brand_select", function () {
    table = 0;
    var arg1 = $(this).find(":selected").attr("data-id");
    if (arg1 == "1") {
      display_products();
    } else {
      by_brand(table, arg1);
    }
  });
  $("#brand").on("change", "#brand_select", function () {
    var arg1 = $(this).find(":selected").attr("data-id");
    if (
      $("#os").on("change", "#os_select", function () {
        table = 0;
        var arg2 = $(this).find(":selected").attr("data-os");
        if (arg2 == 1) {
          by_brand(table, arg1);
        } else {
          run1(table, arg1, arg2);
        }
        if (arg1 == 1 && arg2 == 1) {
          display_products();
        }
      })
    );
  });

  $("#os").on("change", "#os_select", function () {
    table = 0;
    var arg1 = $(this).find(":selected").attr("data-os");
    if (arg1 == "1") {
      display_products();
    } else {
      by_os(table, arg1);
    }
  });
  $("#os").on("change", "#os_select", function () {
    var arg2 = $(this).find(":selected").attr("data-os");
    if (
      $("#brand").on("change", "#brand_select", function () {
        table = 0;
        var arg1 = $(this).find(":selected").attr("data-id");
        if (arg1 == 1) {
          by_os(table, arg2);
        } else {
          run1(table, arg1, arg2);
        }
        if (arg2 == 1 && arg1 == 1) {
          display_products();
        }
      })
    );
  });
  $("#search-input").keyup(function () {
    var table = 0;
    if ($("#search-input").val() == "") {
      display_products();
    } else {
      var arg1 = $("#search-input").val();
      by_search(table, arg1);
    }
  });
  $("#tbody").on("click", ".delete", function () {
    var arg1 = $(this).attr("data-id");
    $("#r" + arg1).css("display", "none");
  });
});
function display_products() {
  var table = 0;
  for (var i = 0; i < products.length; i++) {
    table +=
      "<tr class='row' id='r" +
      products[i].id +
      "'><td>" +
      products[i].id +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].brand +
      "</td><td>" +
      products[i].os +
      "</td><td><input type='button' data-id='" +
      products[i].id +
      "' class='delete' value='X'></td></tr>";
  }
  $("#tbody").html(table);
}
function by_brand(table, arg1) {
  for (var i = 0; i < products.length; i++) {
    if ("'" + arg1 + "'" == "'" + products[i].brand + "'") {
      table +=
        "<tr class='row' id='r" +
        products[i].id +
        "'><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        "</td><td><input type='button' data-id='" +
        products[i].id +
        "' class='delete' value='X'></td></tr>";
    }
  }
  $("#tbody").html(table);
}
function by_os(table, arg1) {
  for (var i = 0; i < products.length; i++) {
    if ("'" + arg1 + "'" == "'" + products[i].os + "'") {
      table +=
        "<tr class='row' id='r" +
        products[i].id +
        "'><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        "</td><td><input type='button' data-id='" +
        products[i].id +
        "' class='delete' value='X'></td></tr>";
    }
  }
  $("#tbody").html(table);
}
function by_search(table, arg1) {
  for (var i = 0; i < products.length; i++) {
    if (
      products[i].id.match(arg1) ||
      products[i].name.toUpperCase().match(arg1.toUpperCase()) ||
      products[i].brand.toUpperCase().match(arg1.toUpperCase()) ||
      products[i].os.toUpperCase().match(arg1.toUpperCase())
    ) {
      table +=
        "<tr class='row' id='r" +
        products[i].id +
        "'><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        "</td><td><input type='button' data-id='" +
        products[i].id +
        "' class='delete' value='X'></td></tr>";
    }
  }
  $("#tbody").html(table);
}
function run1(table, arg1, arg2) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].brand == arg1 && products[i].os == arg2) {
      table +=
        "<tr class='row' id='r" +
        products[i].id +
        "'><td>" +
        products[i].id +
        "</td><td>" +
        products[i].name +
        "</td><td>" +
        products[i].brand +
        "</td><td>" +
        products[i].os +
        "</td><td><input type='button' data-id='" +
        products[i].id +
        "' class='delete' value='X'></td></tr>";
    }
  }
  $("#tbody").html(table);
}
