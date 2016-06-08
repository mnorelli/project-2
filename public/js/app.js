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

    mapObj.map.on('load', function() {

        mapObj.map.addSource("user-destination", {
            "type": "geojson",
            "data": geojson
        });

        mapObj.map.addLayer({
            "id": "drone-glow-strong",
            "type": "circle",
            "source": "user-destination",
            "paint": {
                "circle-radius": 18,
                "circle-color": "#faa",
                "circle-opacity": 0.4
            }
        });

        mapObj.map.addLayer({
            "id": "drone-glow",
            "type": "circle",
            "source": "user-destination",
            "paint": {
                "circle-radius": 40,
                "circle-color": "#fff",
                "circle-opacity": 0.1
            }
        });

        mapObj.map.addLayer({
            "id": "point",
            "source": "user-destination",
            "type": "symbol",
            "layout": {
                "icon-image": "monument-15"
                }
            //     },
            // "paint": {
            //     "icon-color": "#f00"
            //     }
        });

        // Listen for the `geocoder.input` event that is triggered when a user
        // makes a selection and add a marker that matches the result.
        geocoder.on('result', function(ev) {
            mapObj.map.getSource("user-destination").setData(ev.result.geometry);
        });


        // If a feature is found on map movement,
        // set a flag to permit a mousedown events.
        mapObj.map.on('mousemove', function(e) {
            var features = mapObj.map.queryRenderedFeatures(e.point, { layers: ['point'] });

            // Change point and cursor style as a UI indicator
            // and set a flag to enable other mouse events.
            if (features.length) {
                mapObj.map.setPaintProperty ('drone-glow-strong', 'circle-color', '#3bb2d0');
                canvasObj.canvas.style.cursor = 'move';
                isCursorOverPoint = true;
                mapObj.map.dragPan.disable();
            } else {
                mapObj.map.setPaintProperty ('drone-glow-strong', 'circle-color', '#3887be');
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
var geojson = {
    "type": "FeatureCollection",
    "features": []
    }

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
    geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
    mapObj.map.getSource('user-destination').setData(geojson);
}

function onUp(e) {
    if (!isDragging) return;
    var coords = e.lngLat;

    // Print the coordinates of where the point had
    // finished being dragged to on the map.
    // coordinates.style.display = 'block';
    // coordinates.innerHTML = 'Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat;
    console.log('Longitude: ' + coords.lng + '<br />Latitude: ' + coords.lat);
    canvasObj.canvas.style.cursor = '';
    isDragging = false;
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