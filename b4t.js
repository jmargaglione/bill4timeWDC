(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
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
            id: "user",
            alias: "Users",
            columns: user_cols
        };

        // Schema for client projects
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
            id: "project",
            alias: "Projects",
            columns: project_cols
        };
        schemaCallback([userTable, projectTable]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        var apiObj = JSON.parse(tableau.connectionData),
            apiCallUser = "https://secure.bill4time.com/apinode/" + apiObj.apiKey + "/v1/users",
            apiCallProject = "https://secure.bill4time.com/apinode/" + apiObj.apiKey + "/v1/projects";

        if(table.tableInfo.id == "user") {
            var tableData = [];

            $.getJSON(apiCallUser, function (resp) {
                var data = resp.data;

                var i = 0;

                for (i = 0, len = data.length; i < len; i++) {
                    tableData.push(data[i]);
                    data[i].dateOfBirth = new Date(data[i].dateOfBirth);
                }

                table.appendRows(tableData);
                doneCallback();
            });
        }

        if (table.tableInfo.id == "project") {
            var tableData = [];

            $.getJSON(apiCallProject, function (resp) {
                var data = resp.data;

                var i = 0;

                for (i = 0, len = data.length; i < len; i++) {
                    tableData.push(data[i]);
                    data[i].createdDate = new Date(data[i].createdDate);
                }

                table.appendRows(tableData);
                doneCallback();
            });
        }
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
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
