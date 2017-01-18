import InputValidations from "validation/InputValidations";

class ComponentList {

    minValue = InputValidations.minValue.bind(undefined, 2);
    maxValue = InputValidations.maxValue.bind(undefined, 3);

    getList():Array {
        let components = {inputs: [], complex: [], charts: [], chart: []};
        /* eslint-disable global-require */
        components.inputs.push({
            header: "TextInput",
            desc: "is the default input field to collect one line text data from form.",
            json: require("./jsons/inputs/TextInput"),
            sample: require("./samples/inputs/TextInputSample"),
            code: require("./samples/inputs/TextInputSample.txt")
        });
        components.inputs.push({
            header: "TextArea",
            desc: "is the large input field to collect multi line text data from form.",
            json: require("./jsons/inputs/TextArea"),
            sample: require("./samples/inputs/TextAreaSample"),
            code: require("./samples/inputs/TextAreaSample.txt")
        });
        components.inputs.push({
            header: "PasswordInput",
            desc: "is the default input field to collect password data from form.",
            json: require("./jsons/inputs/PasswordInput"),
            sample: require("./samples/inputs/PasswordInputSample"),
            code: require("./samples/inputs/PasswordInputSample.txt")
        });

        components.inputs.push({
            header: "DecimalInput",
            desc: "is the input field for collecting decimal data.",
            json: require("./jsons/inputs/DecimalInput"),
            sample: require("./samples/inputs/DecimalInputSample"),
            code: require("./samples/inputs/DecimalInputSample.txt")
        });
        components.inputs.push({
            header: "NumericInput",
            desc: "is the input field for collecting numeric data.",
            json: require("./jsons/inputs/NumericInput"),
            sample: require("./samples/inputs/NumericInputSample"),
            code: require("./samples/inputs/NumericInputSample.txt")
        });
        components.inputs.push({
            header: "MoneyInput",
            desc: "is the input field for collecting money data.",
            json: require("./jsons/inputs/MoneyInput"),
            sample: require("./samples/inputs/MoneyInputSample"),
            code: require("./samples/inputs/MoneyInputSample.txt")
        });

        components.inputs.push({
            header: "SelectInput",
            desc: "is the input field to provide selection items from given array items",
            json: require("./jsons/inputs/SelectInput"),
            sample: require("./samples/inputs/SelectInputSample"),
            code: require("./samples/inputs/SelectInputSample.txt")
        });

        components.inputs.push({
            header: "CheckInput",
            desc: "is the input field to provide check given item",
            json: require("./jsons/inputs/CheckInput"),
            sample: require("./samples/inputs/CheckInputSample"),
            code: require("./samples/inputs/CheckInputSample.txt")
        });

        components.inputs.push({
            header: "RadioInput",
            desc: "is the input field to provide check given item",
            json: require("./jsons/inputs/RadioInput"),
            sample: require("./samples/inputs/RadioInputSample"),
            code: require("./samples/inputs/RadioInputSample.txt")
        });

        components.inputs.push({
            header: "DateInput",
            desc: "is the input field for collecting date data.",
            json: require("./jsons/inputs/DateInput"),
            sample: require("./samples/inputs/DateInputSample"),
            code: require("./samples/inputs/DateInputSample.txt")
        });

        components.inputs.push({
            header: "DatePicker",
            desc: "is the input field for collecting date data.",
            json: require("./jsons/inputs/datepicker/DatePicker"),
            sample: require("./samples/inputs/DatePickerSample"),
            code: require("./samples/inputs/DatePickerSample.txt")
        });

        components.inputs.push({
            header: "HtmlEditor",
            desc: "is the input field for collecting html (rich text) data.",
            json: require("./jsons/inputs/htmleditor/HtmlEditor"),
            sample: require("./samples/inputs/HtmlEditorSample"),
            code: require("./samples/inputs/HtmlEditorSample.txt")
        });

        components.inputs.push({
            header: "FileUploadInput",
            desc: " is a File Upload Component",
            json: require("./jsons/inputs/upload/FileUploadInput.json"),
            sample: require("./samples/inputs/FileUploadInputSample"),
            code: require("./samples/inputs/FileUploadInputSample.txt")
        });

        components.complex.push({
            header: "Button",
            desc: " is a smart button component which prevents multiple clicks on ajax calls.",
            json: require("./jsons/buttons/Button.json"),
            sample: require("./samples/buttons/ButtonSample"),
            code: require("./samples/buttons/ButtonSample.txt")
        });
        components.complex.push({
            header: "DataGrid",
            desc: " is a smart grid with filter, sort, search capabilities.",
            json: require("./jsons/datagrid/DataGrid.json"),
            sample: require("./samples/datagrid/DataGridSample"),
            code: require("./samples/datagrid/DataGridSample.txt")
        });

        components.complex.push({
            header: "DataForm",
            desc: "is a form component which is generated from model to create or edit data.",
            json: require("./jsons/form/DataForm"),
            sample: require("./samples/form/DataFormSample"),
            code: require("./samples/form/DataFormSample.txt")
        });
        components.complex.push({
            header: "ModalDataForm",
            desc: " is an modal component which opens a DataForm inside.",
            json: require("./jsons/form/ModalDataForm.json"),
            sample: require("./samples/form/ModalDataFormSample"),
            code: require("./samples/form/ModalDataFormSample.txt")
        });

        components.complex.push({
            header: "Wizard",
            desc: " is a multipage wizard component. You can use this component to navigate user through long forms/processes step by step. It collects all data from the steps and gives you at finish stage.",
            json: require("./jsons/wizard/Wizard.json"),
            sample: require("./samples/wizard/WizardSample"),
            code: require("./samples/wizard/WizardSample.txt")
        });

        components.complex.push({
            header: "CheckTree",
            desc: " is a recursive component which generates a tree of CheckInput's from the given item.",
            json: require("./jsons/checktree/CheckTree.json"),
            sample: require("./samples/checktree/CheckTreeSample"),
            code: require("./samples/checktree/CheckTreeSample.txt")
        });

        components.complex.push({
            header: "SideMenu",
            desc: " is a menu component which will be placed at the righten side of viewport",
            json: require("./jsons/sidemenu/SideMenu.json"),
            sample: require("./samples/sidemenu/SideMenuSample"),
            code: require("./samples/sidemenu/SideMenuSample.txt")
        });


        components.complex.push({
            header: "StackLayout",
            desc: " is a layout component which supports list and thumbnail view.",
            json: require("./jsons/layouts/StackLayout.json"),
            sample: require("./samples/layouts/StackLayoutSample"),
            code: require("./samples/layouts/StackLayoutSample.txt")
        });

        components.complex.push({
            header: "DragDropLayout",
            desc: " is a layout component which provides drag and drop also click events on layer.",
            json: require("./jsons/layouts/DragDropLayout.json"),
            sample: require("./samples/layouts/DragDropLayoutSample"),
            code: require("./samples/layouts/DragDropLayoutSample.txt")
        });

        components.complex.push({
            header: "FaIcon",
            desc: "is a wrapper component for font-awesome icons.",
            json: require("./jsons/faicon/FaIcon"),
            sample: require("./samples/faicon/FaIconSample"),
            code: require("./samples/faicon/FaIconSample.txt")
        });

        components.complex.push({
            header: "Progress",
            desc: " is an indicator component for the heavy ajax loaded sites.",
            sample: require("./samples/progress/ProgressSample"),
            code: require("./samples/progress/ProgressSample.txt"),
            json: {
                methods: [
                    {name: "start", description: "Starts the progress indicator on top of the page"},
                    {name: "done", description: "Completes the progress indicator on top of the page"},
                    {name: "configure", description: "Configure the indicator"}]
            }
        });

        components.complex.push({
            header: "ProgressBar",
            desc: " is an indicator component for the heavy ajax loaded sites.",
            json: require("./jsons/progress/ProgressBar.json"),
            sample: require("./samples/progress/ProgressBarSample"),
            code: require("./samples/progress/ProgressBarSample.txt")
        });

        components.complex.push({
            header: "Notification",
            desc: " is a notification component with total count and popup list.",
            json: require("./jsons/notification/Notification.json"),
            sample: require("./samples/notification/NotificationSample"),
            code: require("./samples/notification/NotificationSample.txt")
        });


        components.complex.push({
            header: "Toast",
            desc: " is a toaster message showing utility. Helps developer to show toaster messages easly and in a standardized way",
            sample: require("./samples/toast/ToastSample"),
            json: require("./jsons/toast/Toast.json"),
            code: require("./samples/toast/ToastSample.txt")
        });

        components.complex.push({
            header: "ReCaptcha",
            desc: " is a CAPTCHA-like system designed to establish that a computer user is human (normally in order to protect websites from bots) and, at the same time, assist in the digitization of books",
            sample: require("./samples/recaptcha/ReCaptchaSample"),
            code: require("./samples/recaptcha/ReCaptchaSample.txt")
        });

        components.complex.push({
            header: "GoogleMap",
            desc: " is a wrapper component for GoogleMaps API",
            sample: require("./samples/googlemap/GoogleMapSample"),
            code: require("./samples/googlemap/GoogleMapSample.txt")
        });

        components.charts.push({
            header: "AreaChart",
            desc: " displays graphically quantitative data. It is based on the line chart. The area between axis and line are commonly emphasized with colors, textures and hatchings. Commonly one compares with an area chart two or more quantities.",
            // json: require("./jsons/charts/AreaChart.json"),
            sample: require("./samples/charts/AreaChartSample"),
            code: require("./samples/charts/AreaChartSample.txt")
        });

        components.charts.push({
            header: "BarChart",
            desc: " a bar chart or bar graph is a chart or graph that presents grouped data with rectangle|rectangular bars with lengths proportional to the values that they represent. The bars can be plotted vertically or horizontally. A vertical bar chart is sometimes called a Line graph.",
            // json: require("./jsons/charts/BarChart.json"),
            sample: require("./samples/charts/BarChartSample"),
            code: require("./samples/charts/BarChartSample.txt")
        });

        components.charts.push({
            header: "ComposedChart",
            desc: " is a layout for area, bar and line chart together.",
            // json: require("./jsons/charts/ComposedChart.json"),
            sample: require("./samples/charts/ComposedChartSample"),
            code: require("./samples/charts/ComposedChartSample.txt")
        });

        components.charts.push({
            header: "LineChart",
            desc: " a line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.It is a basic type of chart common in many fields.It is a basic type of chart common in many fields.",
            // json: require("./jsons/charts/LineChart.json"),
            sample: require("./samples/charts/LineChartSample"),
            code: require("./samples/charts/LineChartSample.txt")
        });

        components.charts.push({
            header: "PieChart",
            desc: " a pie chart (or a circle chart) is a circular statistical graphic which is divided into slices to illustrate numerical proportion. In a pie chart, the arc length of each slice (and consequently its central angle and area), is proportional to the quantity it represents",
            // json: require("./jsons/charts/PieChart.json"),
            sample: require("./samples/charts/PieChartSample"),
            code: require("./samples/charts/PieChartSample.txt")
        });

        components.charts.push({
            header: "RadarChart",
            desc: " a radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point. The relative position and angle of the axes is typically uninformative",
            // json: require("./jsons/charts/RadarChart.json"),
            sample: require("./samples/charts/RadarChartSample"),
            code: require("./samples/charts/RadarChartSample.txt")
        });

        components.charts.push({
            header: "RadialBarChart",
            desc: " is a layout chart",
            // json: require("./jsons/charts/RadialBarChart.json"),
            sample: require("./samples/charts/RadialBarChartSample"),
            code: require("./samples/charts/RadialBarChartSample.txt")
        });

        components.charts.push({
            header: "ScatterChart",
            desc: " a scatter chart (also called a scatter graph, scatter plot, scattergram, or scatter diagram) is a type of plot or mathematical diagram using Cartesian coordinates to display values for typically two variables for a set of data",
            // json: require("./jsons/charts/RobeScatterChart.json"),
            sample: require("./samples/charts/ScatterChartSample"),
            code: require("./samples/charts/ScatterChartSample.txt")
        });

        components.chart.push({
            header: "BarChart",
            desc: " a bar chart or bar graph is a chart or graph that presents grouped data with rectangle|rectangular bars with lengths proportional to the values that they represent.",
            // json: require("./jsons/charts/BarChart.json"),
            sample: require("./samples/chart/BarChartSample"),
            code: require("./samples/chart/BarChartSample.txt")
        });
        components.chart.push({
            header: "AreaChart",
            desc: " a bar chart or bar graph is a chart or graph that presents grouped data with rectangle|rectangular bars with lengths proportional to the values that they represent.",
            // json: require("./jsons/charts/BarChart.json"),
            sample: require("./samples/chart/AreaChartSample"),
            code: require("./samples/chart/AreaChartSample.txt")
        });


        return components;
    }

}

export default new ComponentList();
