(function () {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function (schemaCallback) {
        // Schema for users
        var user_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "fname",
            alias: "first name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "lname",
            alias: "last name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "email",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "address1",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "address2",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "city",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "postalCode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "country",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "homePhone",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "officePhone",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "mobilePhone",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "userType",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "status",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "department",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "dateOfBirth",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "billingRate",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "overtimeRate",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "doubleRate",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "payableRate",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "payableRateOvertime",
            dataType: tableau.dataTypeEnum.int
        }];

        var userTable = {
            id: "users",
            alias: "Users",
            columns: user_cols
        };

        // Schema for client
        var client_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "customId",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "clientName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "billingName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "address1",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "address2",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "address3",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "city",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "state",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "postalCode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "phone",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "email",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "status",
            dataType: tableau.dataTypeEnum.string
        }];

        var clientTable = {
            id: "clients",
            alias: "Clients",
            columns: client_cols
        };

        // Schema for client
        var time_entry_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "projectId",
            dataType: tableau.dataTypeEnum.Id
        }, {
            id: "projectName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "userId",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "userName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "billableAmount",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "laborTime",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "travelTime",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "entryDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "createdDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "invoiceId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "descriptionPrivate",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "descriptionPublic",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "entryType",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "litigationCode",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "litigationCodeDesc",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "isBillible",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "billingStatus",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "hourlyRate",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "payableRate",
            dataType: tableau.dataTypeEnum.float
        }];

        var timeEntryTable = {
            id: "timeEntries",
            alias: "timeEntries",
            columns: time_entry_cols
        };


        // Schema for  projects
        var project_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "customId",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "projectName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "description",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "clientId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "projectType",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "status",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "assignedTo",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "billingMethod",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "createdDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "email",
            dataType: tableau.dataTypeEnum.string
        }];

        var projectTable = {
            id: "projects",
            alias: "Projects",
            columns: project_cols
        };


        // Schema for  expenses
        var expense_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "projectId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "projectName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "userId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "userName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "costPrice",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "sellPrice",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "expenseDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "createdDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "quantity",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "invoiceId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "billingStatus",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "descriptionPrivate",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "descriptionPublic",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "expenseType",
            dataType: tableau.dataTypeEnum.string
        }];

        var expenseTable = {
            id: "expenses",
            alias: "Expenses",
            columns: expense_cols
        };


        // Schema for  invoices
        var invoice_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "customId",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "clientId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "projectId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "projectName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "description",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "invoiceDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "createdDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "status",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "notes",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "invoiceTermType",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "invoiceAmount",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "laborAmount",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "expenseAmount",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "lateFeeAmount",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "paidStatus",
            dataType: tableau.dataTypeEnum.string
        }];

        var invoiceTable = {
            id: "invoices",
            alias: "Invoices",
            columns: invoice_cols
        };



        // Schema for  invoices
        var payment_cols = [{
            id: "id",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "clientName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "projectId",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "projectName",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "paymentAmount",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "isBalanceAdjustment",
            dataType: tableau.dataTypeEnum.bool
        }, {
            id: "paymentDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "createdDate",
            dataType: tableau.dataTypeEnum.date
        }, {
            id: "createdBy",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "paymentType",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "paymentMethod",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "checkNumber",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "privateNote",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "publicNote",
            dataType: tableau.dataTypeEnum.string
        }];

        var paymentTable = {
            id: "payments",
            alias: "Payments",
            columns: payment_cols
        };

        schemaCallback([userTable, clientTable, projectTable, timeEntryTable, expenseTable, invoiceTable, paymentTable]);
    };

    // Download the data
    myConnector.getData = function (table, doneCallback) {
        var apiObj = JSON.parse(tableau.connectionData),
            apiCall = "https://secure.bill4time.com/apinode/" + apiObj.apiKey + "/v1/" + table.tableInfo.id;

        tableau.log("apiCall=" + apiCall);

        var tableData = [];
        var i = 0;

        $.getJSON(apiCall, function (resp) {
            var data = resp.data;

            for (i = 0, len = data.length; i < len; i++) {
                if (table.tableInfo.id == "users") {
                    data[i].dateOfBirth = new Date(data[i].dateOfBirth);
                }
                else if (table.tableInfo.id == "projects") {
                    data[i].createdDate = new Date(data[i].createdDate);
                }
                else if (table.tableInfo.id == "timeEntries") {
                    data[i].entryDate = new Date(data[i].entryDate);
                    data[i].createdDate = new Date(data[i].createdDate);
                }
                else if (table.tableInfo.id == "expenses") {
                    data[i].expenseDate = new Date(data[i].expenseDate);
                    data[i].createdDate = new Date(data[i].createdDate);
                }
                else if (table.tableInfo.id == "invoices") {
                    data[i].expenseDate = new Date(data[i].invoiceDate);
                    data[i].createdDate = new Date(data[i].createdDate);
                }
                else if (table.tableInfo.id == "payments") {
                    data[i].expenseDate = new Date(data[i].paymentDate);
                    data[i].createdDate = new Date(data[i].createdDate);
                }

                tableData.push(data[i]);
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function () {
        $("#submitButton").click(function () {
            var apiObj = {
                apiKey: $('#api-key').val().trim()
            };

            // Simple date validation: Call the getDate function on the date object created
            function isValidApiKey(apiKey) {
                // Try to connect to the Bill4Time API
                return true;
            }

            // Need validation?
            if (true) {
                tableau.connectionData = JSON.stringify(apiObj); // Use this variable to pass data to your getSchema and getData functions
                tableau.connectionName = "Bill4Time"; // This will be the data source name in Tableau
                tableau.submit(); // This sends the connector object to Tableau
            } else {
                $('#errorMsg').html("Enter valid API key for Bill4Time");
            }
        });
    });
})();
