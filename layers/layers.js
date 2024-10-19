ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25833").setExtent([345306.885767, 4174295.955420, 904389.466533, 4468004.356935]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_REFLUIOLCAL_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "REFLUI.OL.CAL.",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/REFLUIOLCAL_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1688610.737776, 4552196.300711, 1951822.846066, 4905176.169741]
                            })
                        });
var lyr_Mappe_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralZoning",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mappe",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Mappe_2, 0]);
var lyr_Vestizioni_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "vestizioni",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Vestizioni",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vestizioni_3, 0]);
var lyr_Particelle_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Particelle",
                            opacity: 0.376000,
                            
                            
                          });
              wms_layers.push([lyr_Particelle_4, 0]);
var format_LimitiComuni_5 = new ol.format.GeoJSON();
var features_LimitiComuni_5 = format_LimitiComuni_5.readFeatures(json_LimitiComuni_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25833'});
var jsonSource_LimitiComuni_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitiComuni_5.addFeatures(features_LimitiComuni_5);
var lyr_LimitiComuni_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitiComuni_5, 
                style: style_LimitiComuni_5,
                popuplayertitle: "Limiti Comuni",
                interactive: true,
                title: '<img src="styles/legend/LimitiComuni_5.png" /> Limiti Comuni'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_REFLUIOLCAL_1.setVisible(true);lyr_Mappe_2.setVisible(true);lyr_Vestizioni_3.setVisible(true);lyr_Particelle_4.setVisible(true);lyr_LimitiComuni_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_REFLUIOLCAL_1,lyr_Mappe_2,lyr_Vestizioni_3,lyr_Particelle_4,lyr_LimitiComuni_5];
lyr_LimitiComuni_5.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LimitiComuni_5.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': '', });
lyr_LimitiComuni_5.set('fieldLabels', {'COD_RIP': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_CM': 'no label', 'COD_UTS': 'no label', 'PRO_COM': 'no label', 'PRO_COM_T': 'no label', 'COMUNE': 'no label', 'COMUNE_A': 'no label', 'CC_UTS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_LimitiComuni_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});