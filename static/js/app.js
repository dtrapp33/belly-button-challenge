let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.'

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


        // we need to slice the data to get the top 10 values, also reverse the data to get the top 10 values in descending order, 
        //and we need to add the OTU to the ID's, one way to do this is to use map to add the OTU to the ID's

        // Do bar chart

        // 

    });
}


function optionChanged(selectedId) {
    
    console.log(selectedId);

    displayCharts(selectedId);



}

function init() {



   







}