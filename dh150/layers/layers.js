var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Recreation_Centers_1 = new ol.format.GeoJSON();
var features_Recreation_Centers_1 = format_Recreation_Centers_1.readFeatures(json_Recreation_Centers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreation_Centers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreation_Centers_1.addFeatures(features_Recreation_Centers_1);
var lyr_Recreation_Centers_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreation_Centers_1, 
                style: style_Recreation_Centers_1,
                popuplayertitle: "Recreation_Centers",
                interactive: true,
                title: '<img src="styles/legend/Recreation_Centers_1.png" /> Recreation_Centers'
            });
var format_High_Injury_Network_2 = new ol.format.GeoJSON();
var features_High_Injury_Network_2 = format_High_Injury_Network_2.readFeatures(json_High_Injury_Network_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_High_Injury_Network_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_High_Injury_Network_2.addFeatures(features_High_Injury_Network_2);
var lyr_High_Injury_Network_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_High_Injury_Network_2, 
                style: style_High_Injury_Network_2,
                popuplayertitle: "High_Injury_Network",
                interactive: true,
                title: '<img src="styles/legend/High_Injury_Network_2.png" /> High_Injury_Network'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Recreation_Centers_1.setVisible(true);lyr_High_Injury_Network_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Recreation_Centers_1,lyr_High_Injury_Network_2];
lyr_Recreation_Centers_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'source': 'source', 'ext_id': 'ext_id', 'cat1': 'cat1', 'cat2': 'cat2', 'cat3': 'cat3', 'org_name': 'org_name', 'Name': 'Name', 'addrln1': 'addrln1', 'addrln2': 'addrln2', 'city': 'city', 'state': 'state', 'hours': 'hours', 'phones': 'phones', 'url': 'url', 'info1': 'info1', 'info2': 'info2', 'post_id': 'post_id', 'description': 'description', 'zip': 'zip', 'link': 'link', 'use_type': 'use_type', 'latitude': 'latitude', 'longitude': 'longitude', 'date_updated': 'date_updated', 'email': 'email', 'dis_status': 'dis_status', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', });
lyr_High_Injury_Network_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STNAME': 'STNAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FROM_': 'FROM_', 'TO_': 'TO_', 'GlobalID': 'GlobalID', });
lyr_Recreation_Centers_1.set('fieldImages', {'OBJECTID': 'Range', 'source': 'TextEdit', 'ext_id': 'TextEdit', 'cat1': 'TextEdit', 'cat2': 'TextEdit', 'cat3': 'TextEdit', 'org_name': 'TextEdit', 'Name': 'TextEdit', 'addrln1': 'TextEdit', 'addrln2': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'hours': 'TextEdit', 'phones': 'TextEdit', 'url': 'TextEdit', 'info1': 'TextEdit', 'info2': 'TextEdit', 'post_id': 'Range', 'description': 'TextEdit', 'zip': 'TextEdit', 'link': 'TextEdit', 'use_type': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'date_updated': 'DateTime', 'email': 'TextEdit', 'dis_status': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', });
lyr_High_Injury_Network_2.set('fieldImages', {'OBJECTID': '', 'STNAME': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'FROM_': '', 'TO_': '', 'GlobalID': '', });
lyr_Recreation_Centers_1.set('fieldLabels', {'OBJECTID': 'no label', 'source': 'no label', 'ext_id': 'no label', 'cat1': 'no label', 'cat2': 'no label', 'cat3': 'no label', 'org_name': 'no label', 'Name': 'no label', 'addrln1': 'no label', 'addrln2': 'no label', 'city': 'no label', 'state': 'no label', 'hours': 'no label', 'phones': 'no label', 'url': 'no label', 'info1': 'no label', 'info2': 'no label', 'post_id': 'no label', 'description': 'no label', 'zip': 'no label', 'link': 'no label', 'use_type': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'date_updated': 'no label', 'email': 'no label', 'dis_status': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', });
lyr_High_Injury_Network_2.set('fieldLabels', {'OBJECTID': 'no label', 'STNAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'FROM_': 'no label', 'TO_': 'no label', 'GlobalID': 'no label', });
lyr_High_Injury_Network_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});