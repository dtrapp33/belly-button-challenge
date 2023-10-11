let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

function displayCharts(id) {

    console.log(id)

    d3.json(url).then(function(data) {

        samples =data.samples;

        console.log(samples);

        let selectedSample = samples.filter(sample => sample.id == id)[0];

        console.log(selectedSample);

        otuIds = selectedSample.otu_ids;
        otuLabels = selectedSample.otu_labels;
        sampleValues = selectedSample.sample_values;

        console.log(otuIds);
        
        var bubbleData = [{
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
              color: otuIds,
              colorscale:"Earth" ,
              size: sampleValues
            }
          }];
          
          
          var bubbleLayout = {
            title: 'Bubble Chart',
            showlegend: false,
          };
          
          Plotly.newPlot('bubble', bubbleData, bubbleLayout);
          
        // we need to slice the data to get the top 10 values, also reverse the data to get the top 10 values in descending order, 
        //and we need to add the OTU to the ID's, one way to do this is to use map to add the OTU to the ID's

        // Do bar chart


        var barData = [{
            x: sampleValues.slice(0,10).reverse(),
            y: otuIds.slice(0,10).map((index) => `otu ${index}`).reverse(),
            text: otuLabels.slice(0,10).reverse(),
            orientation: 'h',
            type: 'bar'
          }];
          
        
          
          var barLayout = {
            title: 'Bar Chart',
            
          };
          
          Plotly.newPlot('bar', barData, barLayout);
          
        // 

    });
}


function optionChanged(selectedId) {
    
    console.log(selectedId);

    displayCharts(selectedId);



}

function init() {

    d3.json(url).then(function(data) {
console.log(data);
        names = data.names;
        let dropdownMenu = d3.select("#selDataset");
        names.forEach((sample) => {
            dropdownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
        });
        displayTable(names[0]);
        displayCharts(names[0]);
    });
}
init()

function displayTable(id_) {

    d3.json(url).then(function(data) {
console.log(data);
        metadata = data.metadata;
        let table = d3.select("#sample-metadata");
        let newArray = metadata.filter(number => number.id == id_)[0];
        table.html("");

        Object.entries(newArray).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
            table
                .append("h5")
                .text(`${key}: ${value}`)

          });

    


    });
}

function optionChanged(selectedId) {
    
    console.log(selectedId);

    displayCharts(selectedId);
    displayTable(selectedId);}