/**
 * Created by sbortman on 10/29/14.
 */

//= require angular.js
//= require jquery.js
//= require jquery.layout-latest.js
//= require bootstrap.js
//= require ol.js
//= require_self


var mapWidgetApp = angular.module( 'MapWidgetApp', [] );

mapWidgetApp.controller( 'MapWidgetController', function ( $scope )
    {
        $scope.map = new ol.Map( {
            layers: [
                new ol.layer.Tile( {
                    source: new ol.source.TileWMS( {
                        url: 'http://omar.ossim.org/tilecache/tilecache.py',
                        params: {LAYERS: 'omar', VERSION: '1.1.1'}
                    } ),
                    extent: ol.extent.buffer( [-180, -90, 180, 90], 0 )
                } )
            ],
            controls: ol.control.defaults( {
            } ),
            target: 'map',
            view: new ol.View( {
                projection: 'EPSG:4326',
                center: [0, 0],
                maxResolution: 0.703125
            } )
        } );

        $scope.map.getView().fitExtent( [-180, -90, 180, 90 ], $scope.map.getSize() );
    }
);


$( document ).ready( function ()
{
    //$( 'body' ).layout( { applyDemoStyles: true } );

    //angular.element( $( "#map" ) ).scope().map.updateSize();
} );
