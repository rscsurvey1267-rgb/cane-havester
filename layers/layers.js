var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_7071_1 = new ol.format.GeoJSON();
var features_7071_1 = format_7071_1.readFeatures(json_7071_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7071_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7071_1.addFeatures(features_7071_1);
var lyr_7071_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7071_1, 
                style: style_7071_1,
                popuplayertitle: 'เขตส่งเสริม7071',
                interactive: true,
                title: '<img src="styles/legend/7071_1.png" /> เขตส่งเสริม7071'
            });
var format_81_7500_2 = new ol.format.GeoJSON();
var features_81_7500_2 = format_81_7500_2.readFeatures(json_81_7500_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_81_7500_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_81_7500_2.addFeatures(features_81_7500_2);
var lyr_81_7500_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_81_7500_2, 
                style: style_81_7500_2,
                popuplayertitle: '8-1_อรวรรณ สีหาวงษ์(7500)-หนองเม็ก',
                interactive: true,
                title: '<img src="styles/legend/81_7500_2.png" /> 8-1_อรวรรณ สีหาวงษ์(7500)-หนองเม็ก'
            });
var format_82_1_3 = new ol.format.GeoJSON();
var features_82_1_3 = format_82_1_3.readFeatures(json_82_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_82_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_82_1_3.addFeatures(features_82_1_3);
var lyr_82_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_82_1_3, 
                style: style_82_1_3,
                popuplayertitle: '8-2_ดงบัง1',
                interactive: true,
                title: '<img src="styles/legend/82_1_3.png" /> 8-2_ดงบัง1'
            });
var format_83_2_4 = new ol.format.GeoJSON();
var features_83_2_4 = format_83_2_4.readFeatures(json_83_2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_83_2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_83_2_4.addFeatures(features_83_2_4);
var lyr_83_2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_83_2_4, 
                style: style_83_2_4,
                popuplayertitle: '8-3_ดงบัง2',
                interactive: true,
                title: '<img src="styles/legend/83_2_4.png" /> 8-3_ดงบัง2'
            });
var format_84__5 = new ol.format.GeoJSON();
var features_84__5 = format_84__5.readFeatures(json_84__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_84__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_84__5.addFeatures(features_84__5);
var lyr_84__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_84__5, 
                style: style_84__5,
                popuplayertitle: '8-4_หนองหิน',
                interactive: true,
                title: '<img src="styles/legend/84__5.png" /> 8-4_หนองหิน'
            });
var format_86__6 = new ol.format.GeoJSON();
var features_86__6 = format_86__6.readFeatures(json_86__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_86__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_86__6.addFeatures(features_86__6);
var lyr_86__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_86__6, 
                style: style_86__6,
                popuplayertitle: '8-6_สระพะเนียด',
                interactive: true,
                title: '<img src="styles/legend/86__6.png" /> 8-6_สระพะเนียด'
            });
var format_43_24658AA_7 = new ol.format.GeoJSON();
var features_43_24658AA_7 = format_43_24658AA_7.readFeatures(json_43_24658AA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_43_24658AA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_43_24658AA_7.addFeatures(features_43_24658AA_7);
var lyr_43_24658AA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_43_24658AA_7, 
                style: style_43_24658AA_7,
                popuplayertitle: '4-3_สุวภัทร ไคขุนทด 24658 (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/43_24658AA_7.png" /> 4-3_สุวภัทร ไคขุนทด 24658 (AA ใหญ่)'
            });
var format_44_2940AA_8 = new ol.format.GeoJSON();
var features_44_2940AA_8 = format_44_2940AA_8.readFeatures(json_44_2940AA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_44_2940AA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_44_2940AA_8.addFeatures(features_44_2940AA_8);
var lyr_44_2940AA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_44_2940AA_8, 
                style: style_44_2940AA_8,
                popuplayertitle: '4-4_เรณู บุญสงค์  2940 (AA เล็ก)',
                interactive: true,
                title: '<img src="styles/legend/44_2940AA_8.png" /> 4-4_เรณู บุญสงค์  2940 (AA เล็ก)'
            });
var format_45_23565AA_9 = new ol.format.GeoJSON();
var features_45_23565AA_9 = format_45_23565AA_9.readFeatures(json_45_23565AA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45_23565AA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45_23565AA_9.addFeatures(features_45_23565AA_9);
var lyr_45_23565AA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45_23565AA_9, 
                style: style_45_23565AA_9,
                popuplayertitle: '4-5_แดง แจกเกาะ 23565 (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/45_23565AA_9.png" /> 4-5_แดง แจกเกาะ 23565 (AA ใหญ่)'
            });
var format_49_AA_10 = new ol.format.GeoJSON();
var features_49_AA_10 = format_49_AA_10.readFeatures(json_49_AA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_49_AA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_49_AA_10.addFeatures(features_49_AA_10);
var lyr_49_AA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_49_AA_10, 
                style: style_49_AA_10,
                popuplayertitle: '4-9_ประเสร็ฐ คงค้างพูล (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/49_AA_10.png" /> 4-9_ประเสร็ฐ คงค้างพูล (AA ใหญ่)'
            });
var format_411_20484AA_11 = new ol.format.GeoJSON();
var features_411_20484AA_11 = format_411_20484AA_11.readFeatures(json_411_20484AA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_411_20484AA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_411_20484AA_11.addFeatures(features_411_20484AA_11);
var lyr_411_20484AA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_411_20484AA_11, 
                style: style_411_20484AA_11,
                popuplayertitle: '4-11_พยุง พลมณี 20484 (โนนหญ้าคา) (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/411_20484AA_11.png" /> 4-11_พยุง พลมณี 20484 (โนนหญ้าคา) (AA ใหญ่)'
            });
var format_412_20484AA_12 = new ol.format.GeoJSON();
var features_412_20484AA_12 = format_412_20484AA_12.readFeatures(json_412_20484AA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_412_20484AA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_412_20484AA_12.addFeatures(features_412_20484AA_12);
var lyr_412_20484AA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_412_20484AA_12, 
                style: style_412_20484AA_12,
                popuplayertitle: '4-12_พยุง พลมณี 20484 (หนองจาน) (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/412_20484AA_12.png" /> 4-12_พยุง พลมณี 20484 (หนองจาน) (AA ใหญ่)'
            });
var format_415_2394AA_13 = new ol.format.GeoJSON();
var features_415_2394AA_13 = format_415_2394AA_13.readFeatures(json_415_2394AA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_415_2394AA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_415_2394AA_13.addFeatures(features_415_2394AA_13);
var lyr_415_2394AA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_415_2394AA_13, 
                style: style_415_2394AA_13,
                popuplayertitle: '4-15_วิชาญ ปราบโจร 2394 (AA เล็ก)',
                interactive: true,
                title: '<img src="styles/legend/415_2394AA_13.png" /> 4-15_วิชาญ ปราบโจร 2394 (AA เล็ก)'
            });
var format_416_25561AA_14 = new ol.format.GeoJSON();
var features_416_25561AA_14 = format_416_25561AA_14.readFeatures(json_416_25561AA_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_416_25561AA_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_416_25561AA_14.addFeatures(features_416_25561AA_14);
var lyr_416_25561AA_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_416_25561AA_14, 
                style: style_416_25561AA_14,
                popuplayertitle: '4-16_จักรพรรดิ์ พูลสุวรรณ 25561 (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/416_25561AA_14.png" /> 4-16_จักรพรรดิ์ พูลสุวรรณ 25561 (AA ใหญ่)'
            });
var format_417_20484AA_15 = new ol.format.GeoJSON();
var features_417_20484AA_15 = format_417_20484AA_15.readFeatures(json_417_20484AA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_417_20484AA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_417_20484AA_15.addFeatures(features_417_20484AA_15);
var lyr_417_20484AA_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_417_20484AA_15, 
                style: style_417_20484AA_15,
                popuplayertitle: '4-17_พยุง พลมณี 20484 (บ้านขาม) (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/417_20484AA_15.png" /> 4-17_พยุง พลมณี 20484 (บ้านขาม) (AA ใหญ่)'
            });
var format_314_AA_16 = new ol.format.GeoJSON();
var features_314_AA_16 = format_314_AA_16.readFeatures(json_314_AA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_314_AA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_314_AA_16.addFeatures(features_314_AA_16);
var lyr_314_AA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_314_AA_16, 
                style: style_314_AA_16,
                popuplayertitle: '3-14_ห้วยชงโค-AA',
                interactive: true,
                title: '<img src="styles/legend/314_AA_16.png" /> 3-14_ห้วยชงโค-AA'
            });
var format_316_AA_17 = new ol.format.GeoJSON();
var features_316_AA_17 = format_316_AA_17.readFeatures(json_316_AA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_316_AA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_316_AA_17.addFeatures(features_316_AA_17);
var lyr_316_AA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_316_AA_17, 
                style: style_316_AA_17,
                popuplayertitle: '3-16_โคกกระเบื้อง-AA',
                interactive: true,
                title: '<img src="styles/legend/316_AA_17.png" /> 3-16_โคกกระเบื้อง-AA'
            });
var format_317_AA_18 = new ol.format.GeoJSON();
var features_317_AA_18 = format_317_AA_18.readFeatures(json_317_AA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_317_AA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_317_AA_18.addFeatures(features_317_AA_18);
var lyr_317_AA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_317_AA_18, 
                style: style_317_AA_18,
                popuplayertitle: '3-17_ตลุกพลวง-AA',
                interactive: true,
                title: '<img src="styles/legend/317_AA_18.png" /> 3-17_ตลุกพลวง-AA'
            });
var format_318_1AA_19 = new ol.format.GeoJSON();
var features_318_1AA_19 = format_318_1AA_19.readFeatures(json_318_1AA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_318_1AA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_318_1AA_19.addFeatures(features_318_1AA_19);
var lyr_318_1AA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_318_1AA_19, 
                style: style_318_1AA_19,
                popuplayertitle: '3-18_สระสี่เหลี่ยม1-AA',
                interactive: true,
                title: '<img src="styles/legend/318_1AA_19.png" /> 3-18_สระสี่เหลี่ยม1-AA'
            });
var format_319_2AA_20 = new ol.format.GeoJSON();
var features_319_2AA_20 = format_319_2AA_20.readFeatures(json_319_2AA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_319_2AA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_319_2AA_20.addFeatures(features_319_2AA_20);
var lyr_319_2AA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_319_2AA_20, 
                style: style_319_2AA_20,
                popuplayertitle: '3-19_สระสี่เหลี่ยม2-AA',
                interactive: true,
                title: '<img src="styles/legend/319_2AA_20.png" /> 3-19_สระสี่เหลี่ยม2-AA'
            });
var format_320_AA_21 = new ol.format.GeoJSON();
var features_320_AA_21 = format_320_AA_21.readFeatures(json_320_AA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_320_AA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_320_AA_21.addFeatures(features_320_AA_21);
var lyr_320_AA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_320_AA_21, 
                style: style_320_AA_21,
                popuplayertitle: '3-20_โนนเต็ง-AA',
                interactive: true,
                title: '<img src="styles/legend/320_AA_21.png" /> 3-20_โนนเต็ง-AA'
            });
var format_321_AA_22 = new ol.format.GeoJSON();
var features_321_AA_22 = format_321_AA_22.readFeatures(json_321_AA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_321_AA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_321_AA_22.addFeatures(features_321_AA_22);
var lyr_321_AA_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_321_AA_22, 
                style: style_321_AA_22,
                popuplayertitle: '3-21_บ้านโต้น-AAเล็ก',
                interactive: true,
                title: '<img src="styles/legend/321_AA_22.png" /> 3-21_บ้านโต้น-AAเล็ก'
            });
var format_322_2AA_23 = new ol.format.GeoJSON();
var features_322_2AA_23 = format_322_2AA_23.readFeatures(json_322_2AA_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_322_2AA_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_322_2AA_23.addFeatures(features_322_2AA_23);
var lyr_322_2AA_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_322_2AA_23, 
                style: style_322_2AA_23,
                popuplayertitle: '3-22_บ้านโต้น2-AAเล็ก',
                interactive: true,
                title: '<img src="styles/legend/322_2AA_23.png" /> 3-22_บ้านโต้น2-AAเล็ก'
            });
var format_323__AA_24 = new ol.format.GeoJSON();
var features_323__AA_24 = format_323__AA_24.readFeatures(json_323__AA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_323__AA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_323__AA_24.addFeatures(features_323__AA_24);
var lyr_323__AA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_323__AA_24, 
                style: style_323__AA_24,
                popuplayertitle: '3-23_บ้านหนองพลวง_AAใหญ่',
                interactive: true,
                title: '<img src="styles/legend/323__AA_24.png" /> 3-23_บ้านหนองพลวง_AAใหญ่'
            });
var format_21__25 = new ol.format.GeoJSON();
var features_21__25 = format_21__25.readFeatures(json_21__25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_21__25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21__25.addFeatures(features_21__25);
var lyr_21__25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_21__25, 
                style: style_21__25,
                popuplayertitle: '2-1_กุดเวียน-ชัยเจริญ',
                interactive: true,
                title: '<img src="styles/legend/21__25.png" /> 2-1_กุดเวียน-ชัยเจริญ'
            });
var format_22__26 = new ol.format.GeoJSON();
var features_22__26 = format_22__26.readFeatures(json_22__26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22__26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22__26.addFeatures(features_22__26);
var lyr_22__26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22__26, 
                style: style_22__26,
                popuplayertitle: '2-2_กุดหวาย',
                interactive: true,
                title: '<img src="styles/legend/22__26.png" /> 2-2_กุดหวาย'
            });
var format_23__27 = new ol.format.GeoJSON();
var features_23__27 = format_23__27.readFeatures(json_23__27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_23__27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_23__27.addFeatures(features_23__27);
var lyr_23__27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_23__27, 
                style: style_23__27,
                popuplayertitle: '2-3_ลำชี-ท๊อปบูท',
                interactive: true,
                title: '<img src="styles/legend/23__27.png" /> 2-3_ลำชี-ท๊อปบูท'
            });
var format_11_AA_28 = new ol.format.GeoJSON();
var features_11_AA_28 = format_11_AA_28.readFeatures(json_11_AA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11_AA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11_AA_28.addFeatures(features_11_AA_28);
var lyr_11_AA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11_AA_28, 
                style: style_11_AA_28,
                popuplayertitle: '1-1_บ้านโสกสนวน (AA ใหญ่)',
                interactive: true,
                title: '<img src="styles/legend/11_AA_28.png" /> 1-1_บ้านโสกสนวน (AA ใหญ่)'
            });
var format_12_AA_29 = new ol.format.GeoJSON();
var features_12_AA_29 = format_12_AA_29.readFeatures(json_12_AA_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12_AA_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12_AA_29.addFeatures(features_12_AA_29);
var lyr_12_AA_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12_AA_29, 
                style: style_12_AA_29,
                popuplayertitle: '1-2_บ้านดอนไผ่ (AA เล็ก)',
                interactive: true,
                title: '<img src="styles/legend/12_AA_29.png" /> 1-2_บ้านดอนไผ่ (AA เล็ก)'
            });
var format_17__30 = new ol.format.GeoJSON();
var features_17__30 = format_17__30.readFeatures(json_17__30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17__30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17__30.addFeatures(features_17__30);
var lyr_17__30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17__30, 
                style: style_17__30,
                popuplayertitle: '1-7_หลังโรงงาน-ศูนย์กลาง',
                interactive: true,
                title: '<img src="styles/legend/17__30.png" /> 1-7_หลังโรงงาน-ศูนย์กลาง'
            });
var format_18__31 = new ol.format.GeoJSON();
var features_18__31 = format_18__31.readFeatures(json_18__31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18__31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18__31.addFeatures(features_18__31);
var lyr_18__31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18__31, 
                style: style_18__31,
                popuplayertitle: '1-8_ศูนย์กลาง-โนนรัง-หนองสะเดา',
                interactive: true,
                title: '<img src="styles/legend/18__31.png" /> 1-8_ศูนย์กลาง-โนนรัง-หนองสะเดา'
            });
var format_113__32 = new ol.format.GeoJSON();
var features_113__32 = format_113__32.readFeatures(json_113__32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_113__32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_113__32.addFeatures(features_113__32);
var lyr_113__32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_113__32, 
                style: style_113__32,
                popuplayertitle: '1-13_ศาลาหนองขอน',
                interactive: true,
                title: '<img src="styles/legend/113__32.png" /> 1-13_ศาลาหนองขอน'
            });
var format_114__33 = new ol.format.GeoJSON();
var features_114__33 = format_114__33.readFeatures(json_114__33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_114__33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_114__33.addFeatures(features_114__33);
var lyr_114__33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_114__33, 
                style: style_114__33,
                popuplayertitle: '1-14_ถนนหน้าโรงงาน',
                interactive: true,
                title: '<img src="styles/legend/114__33.png" /> 1-14_ถนนหน้าโรงงาน'
            });
var format_115__34 = new ol.format.GeoJSON();
var features_115__34 = format_115__34.readFeatures(json_115__34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_115__34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_115__34.addFeatures(features_115__34);
var lyr_115__34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_115__34, 
                style: style_115__34,
                popuplayertitle: '1-15_หนองบง-หนองขามน้อย',
                interactive: true,
                title: '<img src="styles/legend/115__34.png" /> 1-15_หนองบง-หนองขามน้อย'
            });
var format_117__35 = new ol.format.GeoJSON();
var features_117__35 = format_117__35.readFeatures(json_117__35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_117__35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_117__35.addFeatures(features_117__35);
var lyr_117__35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_117__35, 
                style: style_117__35,
                popuplayertitle: '1-17_หนองปรือ',
                interactive: true,
                title: '<img src="styles/legend/117__35.png" /> 1-17_หนองปรือ'
            });
var format_118__36 = new ol.format.GeoJSON();
var features_118__36 = format_118__36.readFeatures(json_118__36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_118__36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_118__36.addFeatures(features_118__36);
var lyr_118__36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_118__36, 
                style: style_118__36,
                popuplayertitle: '1-18_บึงสำโรงตอนล่าง',
                interactive: true,
                title: '<img src="styles/legend/118__36.png" /> 1-18_บึงสำโรงตอนล่าง'
            });
var format_120__37 = new ol.format.GeoJSON();
var features_120__37 = format_120__37.readFeatures(json_120__37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_120__37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_120__37.addFeatures(features_120__37);
var lyr_120__37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_120__37, 
                style: style_120__37,
                popuplayertitle: '1-20_โมกมัน-โนนนอุดม',
                interactive: true,
                title: '<img src="styles/legend/120__37.png" /> 1-20_โมกมัน-โนนนอุดม'
            });
var format_121__38 = new ol.format.GeoJSON();
var features_121__38 = format_121__38.readFeatures(json_121__38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_121__38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_121__38.addFeatures(features_121__38);
var lyr_121__38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_121__38, 
                style: style_121__38,
                popuplayertitle: '1-21_โนนสะอาด',
                interactive: true,
                title: '<img src="styles/legend/121__38.png" /> 1-21_โนนสะอาด'
            });
var format_122__39 = new ol.format.GeoJSON();
var features_122__39 = format_122__39.readFeatures(json_122__39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_122__39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_122__39.addFeatures(features_122__39);
var lyr_122__39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_122__39, 
                style: style_122__39,
                popuplayertitle: '1-22_โนนสูง',
                interactive: true,
                title: '<img src="styles/legend/122__39.png" /> 1-22_โนนสูง'
            });
var format_123__40 = new ol.format.GeoJSON();
var features_123__40 = format_123__40.readFeatures(json_123__40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_123__40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_123__40.addFeatures(features_123__40);
var lyr_123__40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_123__40, 
                style: style_123__40,
                popuplayertitle: '1-23_โนนระเวียง',
                interactive: true,
                title: '<img src="styles/legend/123__40.png" /> 1-23_โนนระเวียง'
            });
var group_1 = new ol.layer.Group({
                                layers: [lyr_11_AA_28,lyr_12_AA_29,lyr_17__30,lyr_18__31,lyr_113__32,lyr_114__33,lyr_115__34,lyr_117__35,lyr_118__36,lyr_120__37,lyr_121__38,lyr_122__39,lyr_123__40,],
                                fold: 'close',
                                title: 'แผนก 1'});
var group_2 = new ol.layer.Group({
                                layers: [lyr_21__25,lyr_22__26,lyr_23__27,],
                                fold: 'close',
                                title: 'แผยก 2'});
var group_3 = new ol.layer.Group({
                                layers: [lyr_314_AA_16,lyr_316_AA_17,lyr_317_AA_18,lyr_318_1AA_19,lyr_319_2AA_20,lyr_320_AA_21,lyr_321_AA_22,lyr_322_2AA_23,lyr_323__AA_24,],
                                fold: 'close',
                                title: 'แผนก 3'});
var group_4 = new ol.layer.Group({
                                layers: [lyr_43_24658AA_7,lyr_44_2940AA_8,lyr_45_23565AA_9,lyr_49_AA_10,lyr_411_20484AA_11,lyr_412_20484AA_12,lyr_415_2394AA_13,lyr_416_25561AA_14,lyr_417_20484AA_15,],
                                fold: 'close',
                                title: 'แผนก 4'});
var group_8 = new ol.layer.Group({
                                layers: [lyr_81_7500_2,lyr_82_1_3,lyr_83_2_4,lyr_84__5,lyr_86__6,],
                                fold: 'close',
                                title: 'แผนก 8'});

lyr_GoogleHybrid_0.setVisible(true);lyr_7071_1.setVisible(true);lyr_81_7500_2.setVisible(true);lyr_82_1_3.setVisible(true);lyr_83_2_4.setVisible(true);lyr_84__5.setVisible(true);lyr_86__6.setVisible(true);lyr_43_24658AA_7.setVisible(true);lyr_44_2940AA_8.setVisible(true);lyr_45_23565AA_9.setVisible(true);lyr_49_AA_10.setVisible(true);lyr_411_20484AA_11.setVisible(true);lyr_412_20484AA_12.setVisible(true);lyr_415_2394AA_13.setVisible(true);lyr_416_25561AA_14.setVisible(true);lyr_417_20484AA_15.setVisible(true);lyr_314_AA_16.setVisible(true);lyr_316_AA_17.setVisible(true);lyr_317_AA_18.setVisible(true);lyr_318_1AA_19.setVisible(true);lyr_319_2AA_20.setVisible(true);lyr_320_AA_21.setVisible(true);lyr_321_AA_22.setVisible(true);lyr_322_2AA_23.setVisible(true);lyr_323__AA_24.setVisible(true);lyr_21__25.setVisible(true);lyr_22__26.setVisible(true);lyr_23__27.setVisible(true);lyr_11_AA_28.setVisible(true);lyr_12_AA_29.setVisible(true);lyr_17__30.setVisible(true);lyr_18__31.setVisible(true);lyr_113__32.setVisible(true);lyr_114__33.setVisible(true);lyr_115__34.setVisible(true);lyr_117__35.setVisible(true);lyr_118__36.setVisible(true);lyr_120__37.setVisible(true);lyr_121__38.setVisible(true);lyr_122__39.setVisible(true);lyr_123__40.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_7071_1,group_8,group_4,group_3,group_2,group_1];
lyr_7071_1.set('fieldAliases', {'รหัส พนง': 'รหัส พนง', 'แผนก': 'แผนก', 'ชื่อ': 'ชื่อ', });
lyr_81_7500_2.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_82_1_3.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_83_2_4.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_84__5.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_86__6.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_43_24658AA_7.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_44_2940AA_8.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_45_23565AA_9.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_49_AA_10.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_411_20484AA_11.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_412_20484AA_12.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_415_2394AA_13.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_416_25561AA_14.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_417_20484AA_15.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_314_AA_16.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_316_AA_17.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_317_AA_18.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_318_1AA_19.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_319_2AA_20.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_320_AA_21.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_321_AA_22.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_322_2AA_23.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_323__AA_24.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_21__25.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_22__26.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_23__27.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_11_AA_28.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', 'ตัด/ไม่ตัด': 'ตัด/ไม่ตัด', });
lyr_12_AA_29.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', 'ตัด/ไม่ตัด': 'ตัด/ไม่ตัด', });
lyr_17__30.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_18__31.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_113__32.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_114__33.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_115__34.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_117__35.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_118__36.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_120__37.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_121__38.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_122__39.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_123__40.set('fieldAliases', {'GPSID': 'GPSID', 'COUTA': 'COUTA', 'ชื่อชาวไร่': 'ชื่อชาวไร่', 'รหัสพนง': 'รหัสพนง', 'ชื่อพนง': 'ชื่อพนง', 'พันธุ์อ้อย': 'พันธุ์อ้อย', 'ประเภทอ้อย': 'ประเภทอ้อย', 'ใช้รถตัด': 'ใช้รถตัด', 'พื้นที่ไร่': 'พื้นที่ไร่', });
lyr_7071_1.set('fieldImages', {'รหัส พนง': 'TextEdit', 'แผนก': 'TextEdit', 'ชื่อ': 'TextEdit', });
lyr_81_7500_2.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_82_1_3.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_83_2_4.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_84__5.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_86__6.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_43_24658AA_7.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_44_2940AA_8.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_45_23565AA_9.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_49_AA_10.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_411_20484AA_11.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_412_20484AA_12.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_415_2394AA_13.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_416_25561AA_14.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_417_20484AA_15.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_314_AA_16.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_316_AA_17.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_317_AA_18.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_318_1AA_19.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_319_2AA_20.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_320_AA_21.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_321_AA_22.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_322_2AA_23.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_323__AA_24.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_21__25.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_22__26.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_23__27.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_11_AA_28.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', 'ตัด/ไม่ตัด': 'TextEdit', });
lyr_12_AA_29.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', 'ตัด/ไม่ตัด': 'TextEdit', });
lyr_17__30.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_18__31.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_113__32.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_114__33.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_115__34.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_117__35.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_118__36.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_120__37.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_121__38.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_122__39.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_123__40.set('fieldImages', {'GPSID': 'TextEdit', 'COUTA': 'TextEdit', 'ชื่อชาวไร่': 'TextEdit', 'รหัสพนง': 'TextEdit', 'ชื่อพนง': 'TextEdit', 'พันธุ์อ้อย': 'TextEdit', 'ประเภทอ้อย': 'TextEdit', 'ใช้รถตัด': 'TextEdit', 'พื้นที่ไร่': 'TextEdit', });
lyr_7071_1.set('fieldLabels', {'รหัส พนง': 'inline label - always visible', 'แผนก': 'no label', 'ชื่อ': 'no label', });
lyr_81_7500_2.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_82_1_3.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_83_2_4.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_84__5.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_86__6.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_43_24658AA_7.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_44_2940AA_8.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_45_23565AA_9.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_49_AA_10.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_411_20484AA_11.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_412_20484AA_12.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_415_2394AA_13.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_416_25561AA_14.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_417_20484AA_15.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_314_AA_16.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_316_AA_17.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_317_AA_18.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_318_1AA_19.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_319_2AA_20.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_320_AA_21.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_321_AA_22.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_322_2AA_23.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_323__AA_24.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_21__25.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_22__26.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_23__27.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_11_AA_28.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', 'ตัด/ไม่ตัด': 'no label', });
lyr_12_AA_29.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', 'ตัด/ไม่ตัด': 'no label', });
lyr_17__30.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_18__31.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_113__32.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_114__33.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_115__34.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_117__35.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_118__36.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_120__37.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_121__38.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_122__39.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_123__40.set('fieldLabels', {'GPSID': 'no label', 'COUTA': 'no label', 'ชื่อชาวไร่': 'no label', 'รหัสพนง': 'no label', 'ชื่อพนง': 'no label', 'พันธุ์อ้อย': 'no label', 'ประเภทอ้อย': 'no label', 'ใช้รถตัด': 'no label', 'พื้นที่ไร่': 'no label', });
lyr_123__40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});