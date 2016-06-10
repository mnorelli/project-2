$(document).ready(function() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibW5vcmVsbGkiLCJhIjoiU3BCcTNJQSJ9.4EsgnQLWdR10NXrt7aBYGw';

    mapObj.map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/outdoors-v9', //stylesheet location
        center: [-74.50, 40], // starting position
        zoom: 9, // starting zoom
        scrollZoom: false
        });

    canvasObj.canvas = mapObj.map.getCanvasContainer();

    mapObj.map.addControl(new mapboxgl.Navigation());
    var geocoder = new mapboxgl.Geocoder();
    mapObj.map.addControl(geocoder);

placeArray = [{title: "First step in Africa", photo_url: "http://farm8.staticflickr.com/7001/6840860359_2afa42e715_o.jpg", location: "Dar Es Salaam, Tanzania", description: "From the American Embassy residence, we set off for a safari through Arusha toward Ngoro Ngoro Crater and Lake Manyara. We took a short trip to the lovely and exotic island of Zanzibar.", latitude: -6.792354, longitude: 39.2083284},
{title: "Mexican Sun", photo_url: "http://www.carnival.com/~/media/Images/PreSales/Excursions/Ports_A-F/CZM/304167/Pictures/Cozumel%20Chankanaab%20jpg.jpg", location: "Cozumel, Mexico", description: "Super clear blue waters and white sand beaches with cold cervesas in easy reach. When we were there, we rented a VW Bug, as blue as the coastal waters, with the top cut off.", latitude: 20.4229839, longitude: -86.9223432},
{title: "East Africa Safari", photo_url: "http://static1.squarespace.com/static/532f46fee4b0bf79b0b9fbc6/5453ef57e4b0c4af55efa5b1/5453ef71e4b075bd75fda5b6/1414786936079/Elephant+Walking1.gif", location: "Ngoro Ngoro Crater, Tanzania", description: "Tanzania is great place to see the 'big five' of wild game, elephants, African lion, African elephant, buffalo, leopard, and rhinoceros. In the crater are species that, because of the steep caldera walls, have genetically diverged from species outside.", latitude: -3.1740035, longitude: 35.5638921},
{title: "The San Francisco of Canada", photo_url: "https://res-5.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_1110,q_75,w_1920/v1/clients/vancouverbc/itineraries_72c84dca-fe8b-4ed7-8d58-881be3c43d48.jpg", location: "Vancouver, British Columbia", description: "This city has many similarities with San Francisco, a beautiful natural setting on a bay, walkable neighborhoods, interesting inhabitants, and movie industry!", latitude: 49.2827291, longitude: -123.1207375},
{title: "Our Nation's Capital", photo_url: "http://www.merms.mersd.org/Pages/MERMS_Washington/084D87F5-007EA7AB.0/washington-d-c-skyline.jpg", location: "Washington, DC", description: "Living in Washington, one cannot help but be steeped in the events and locations of American history. Colonial architecture sits side-by-side with modern offices and residential neighborhoods.", latitude: 38.9071923, longitude: -77.0368707},
{title: "Twiga", photo_url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Giraffes_Arusha_Tanzania.jpg", location: "Lake Manyara, Tanzania", description: "Twiga means giraffe in Ki-Swahili, and there are plenty of the slow and strikingly majestic creatures at the lake.", latitude: -3.6190593, longitude: 35.8061779}]

    var geojson = makePoints(placeArray);

    // get zoom level and decrease by 1 or proportion of total zoom
    // var ozoom = mapObj.map.getZoom()
    // console.log(ozoom)
    // var newZoom = ozoom - 1
    // if (newZoom < 1) newZoom = 1
    // mapObj.map.setZoom(newZoom)

    var search_geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [0, 0]
            }
        }]
    };

    mapObj.map.on('load', function() {

        mapObj.map.addSource("searched-point", {
            "type": "geojson",
            "data": search_geojson
        });

        mapObj.map.addSource("user-destination", {
            "type": "geojson",
            "data": geojson
        });

        mapObj.map.addLayer({
            "id": "basic-markers",
            "type": "symbol",
            "source": "user-destination",
            "layout": {
                "icon-image": "monument-15",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"]
            }
        });



        mapObj.map.addLayer({
            "id": "drone-glow-strong",
            "type": "circle",
            "source": "searched-point",
            "paint": {
                "circle-radius": 18,
                "circle-color": "#bb0",
                "circle-opacity": 0.4
            }
        });

        mapObj.map.addLayer({
            "id": "drone-glow",
            "type": "circle",
            "source": "searched-point",
            "paint": {
                "circle-radius": 40,
                "circle-color": "#fff",
                "circle-opacity": 0.1
            }
        });

        mapObj.map.addLayer({
            "id": "point",
            "source": "searched-point",
            "type": "symbol",
            "layout": {
                "icon-image": "marker-15"
                }
        });

        // Listen for the `geocoder.input` event that is triggered when a user
        // makes a selection and add a marker that matches the result.
        geocoder.on('result', function(ev) {
            mapObj.map.getSource("searched-point").setData(ev.result.geometry);
        });


        // If a feature is found on map movement,
        // set a flag to permit a mousedown events.
        mapObj.map.on('mousemove', function(e) {
            var features = mapObj.map.queryRenderedFeatures(e.point, { layers: ['point'] });

            // Change point and cursor style as a UI indicator
            // and set a flag to enable other mouse events.
            if (features.length) {
                mapObj.map.setPaintProperty ('drone-glow-strong', 'circle-color', '#f00');
                canvasObj.canvas.style.cursor = 'move';
                isCursorOverPoint = true;
                mapObj.map.dragPan.disable();
            } else {
                mapObj.map.setPaintProperty ('drone-glow-strong', 'circle-color', '#bb0');
                canvasObj.canvas.style.cursor = '';
                isCursorOverPoint = false;
                mapObj.map.dragPan.enable();
            }
        });

        // Set `true` to dispatch the event before other functions call it. This
        // is necessary for disabling the default map dragging behaviour.
        mapObj.map.on('mousedown', mouseDown, true);
    });


    $('#pinBoot').pinterest_grid({
        no_columns: 4,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });

});   ///////////////////////  end of window on load

// Holds mousedown state for events. if this
// flag is active, we move the point on `mousemove`.
var isDragging;

// Is the cursor over a point? if this
// flag is active, we listen for a mousedown event.
var isCursorOverPoint;


mapObj = {};
canvasObj = {};
var search_geojson = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [0, 0]
        }
    }]
};

// build markers from array passed by erb view
function makePoints(pointsArray) {
    var featuresArray = [];
    var lons = [];
    var lats = [];

    pointsArray.forEach(function(i){
        lons.push(i.longitude);
        lats.push(i.latitude);

        featuresArray.push({
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "properties": {
                  "title": i.title,
                  "marker-symbol": "marker"
                },
                "coordinates": [i.longitude, i.latitude]
            }
        })
    })

    var minLon = Math.min.apply(null, lons);
    var minLat = Math.min.apply(null, lats);
    var maxLon = Math.max.apply(null, lons);
    var maxLat = Math.max.apply(null, lats);

    var geojson = {
        "type": "FeatureCollection",
        "features": featuresArray
        }

    mapObj.map.fitBounds([
        [minLon, minLat],
        [maxLon, maxLat]
    ]);

    return geojson
}

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

function mouseDown(e) {
    if (!isCursorOverPoint) return;

    isDragging = true;

    // Set a cursor indicator
    canvasObj.canvas.style.cursor = 'grab';

    // Mouse events
    mapObj.map.on('mousemove', onMove);
    mapObj.map.on('mouseup', onUp);
}

function onMove(e) {
    if (!isDragging) return;
    var coords = e.lngLat;

    // Set a UI indicator for dragging.
    canvasObj.canvas.style.cursor = 'grabbing';

    // Update the Point feature in `geojson` coordinates
    // and call setData to the source layer `point` on it.

    search_geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
    mapObj.map.getSource('searched-point').setData(search_geojson);
}

function onUp(e) {
    if (!isDragging) return;
    var coords = e.lngLat;

    // Print the coordinates of where the point had
    // finished being dragged to on the map.
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = 'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
    
    canvasObj.canvas.style.cursor = '';
    isDragging = false;

    var features = mapObj.map.queryRenderedFeatures(e.point);
    // console.log(features)
    if (features.length) {
        feature = []
        features.forEach(function(feat){
            if (feat.id && feat.layer.id && feat.properties.name && feature.length == 0) {
                feature = feat;
                console.log(feature.properties.name+"\n"+coords.lng+"\n"+coords.lat)
                // var popup = new mapboxgl.Popup()
                //     .setLngLat(feature.geometry.coordinates)
                //     .setHTML(feature.properties.description)
                //     .addTo(map);
                popup.setLngLat(feature.geometry.coordinates)
                    .setHTML("<b>"+feature.properties.name+"</b>")
                    .addTo(mapObj.map);

                $("#location").textContent = feature.properties.name
                console.log($("#location"))



            }
        })
        // Populate the popup and set its coordinates
        // based on the feature found.
        // popup.setLngLat(feature.geometry.coordinates)
        //     .setHTML(feature.place_name+"<br>"+coords.lng + '<br>' + coords.lat)
        //     .addTo(map);
        
    }
    // Change the cursor style as a UI indicator.
    // mapObj.map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

    if (!features.length) {
        popup.remove();
        return;
    }

    // var feature = features[0];

    
}

/*
Ref:
Thanks to:
http://www.jqueryscript.net/layout/Simple-jQuery-Plugin-To-Create-Pinterest-Style-Grid-Layout-Pinterest-Grid.html
*/


/*
    Pinterest Grid Plugin
    Copyright 2014 Mediademons
    @author smm 16/04/2014

    usage:

     $(document).ready(function() {

        $('#blog-landing').pinterest_grid({
            no_columns: 4
        });

    });


*/
;(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 11);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                // $this.removeClass('c'+t);
                $this.removeClass('c');
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);