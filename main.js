
// Youtube API key: AIzaSyAlN2QpLejeII5xqO4eF4oI8JjLaTdhsjg
// endpoint: https://www.googleapis.com/youtube/v3/search
// Params: 'snippet', API as a string, search term as a string

var Youtube_Base_URL = 'https://www.googleapis.com/youtube/v3/search';


// Getting API Data

function getData(searchItem, callback) {
	var query = {
		part: 'snippet',
		key: 'AIzaSyAlN2QpLejeII5xqO4eF4oI8JjLaTdhsjg',
		q: searchItem,
	};
	$.getJSON(Youtube_Base_URL, query, callback);
};


// Displaying Data

function displayData(data) {
	console.log(data);
	var resultElement = '';
	if(data.items) {
		data.items.forEach(function(item) {
		resultElement += '<a href="https://www.youtube.com/watch?v=' + item.id.videoId +'">' 
		+ '<img src="' + item.snippet.thumbnails.default.url + '">' + '</a>' 
		+ '<p>' + item.snippet.title + '</p>';
	});
	}

	else {
			resultElement += '<p> No results </p>';
		};
	$('.js-query-results').html(resultElement);
};

// Event handler

function submitSearch() {
	$('.js-search-form').submit(function(event) {
		event.preventDefault();
		var query = $(this).find('.js-query').val();
		getData(query, displayData);
	});
};

$(function(){
	submitSearch();
});