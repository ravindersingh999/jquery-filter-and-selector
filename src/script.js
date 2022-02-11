var products = [
   
    {
      id: "101",
      name: "Moto X",
      brand: "Motorola",
      os: "Android",
    },
    {
        id: "100",
        name: "iPhone 6S",
        brand: "Apple",
        os: "iOS",
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
      name: "POCO M3",
      brand: "POCO",
      os: "Android",
    },
    {
      id: "105",
      name: "LUMIA",
      brand: "Microsoft",
      os: "Windows",
    },
  ];
  $(document).ready(function () {
    display_products();
    $("#brand").on("change", function () {
      table = 0;
      if ($("#brand").val() == "1") {
        display_products();
      } else {
        var arg1 = $("#brand").val();
        by_brand(table, arg1);
      }
    });
    $("#brand").on("change", function () {
      if (
        $("#os").on("change", function () {
          table = 0;
          var arg1 = $("#brand").val();
          var arg2 = $("#os").val();
          if (arg2 == 1) {
            by_brand(table, arg1);
          } else {
            run1(table, arg1, arg2);
          }
          if (arg1 == 1 && arg2 == 1) {
            console.log("all brand all os");
            display_products();
          }
        })
      );
    });

    $("#os").on("change", function () {
        table = 0;
        if ($("#os").val() == "1") {
          display_products();
        } else {
          var arg1 = $("#os").val();
          by_os(table, arg1);
        }
      });
      $("#os").on("change", function () {
        if (
          $("#brand").on("change", function () {
            table = 0;
            var arg1 = $("#brand").val();
            var arg2 = $("#os").val();
            if (arg1 == 1) {
              by_os(table, arg2);
            } else {
              run1(table, arg1, arg2);
            }
            if (arg2 == 1 && arg1 == 1) {
              console.log("all brand all os");
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
        console.log("hii");
        var arg1 = $(this).attr("data-id");
        console.log("delete id=" + $(this).attr("data-id"));
        $("#r" + arg1).css("display", "none");
        // var row_id=$(this).attr("data-id")
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
      console.log("brand selected");
      console.log(arg1);
      for (var i = 0; i < products.length; i++) {
        if ("'" + arg1 + "'" == "'" + products[i].brand + "'") {
          console.log(products[i].brand);
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
      console.log("OS selected");
      console.log(arg1);
      for (var i = 0; i < products.length; i++) {
        if ("'" + arg1 + "'" == "'" + products[i].os + "'") {
          console.log(products[i].brand);
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
      console.log("brand selected");
      console.log(arg1);
      for (var i = 0; i < products.length; i++) {
        if (
          products[i].id.match(arg1) ||
          products[i].name.toUpperCase().match(arg1.toUpperCase()) ||
          products[i].brand.toUpperCase().match(arg1.toUpperCase()) ||
          products[i].os.toUpperCase().match(arg1.toUpperCase())
        ) {
          console.log(products[i].name.match(arg1));
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
  console.log("brand and OS selected");
  console.log(arg1);
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