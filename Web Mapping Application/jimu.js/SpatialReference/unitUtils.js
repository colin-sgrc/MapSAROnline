//>>built
define(["dojo/_base/declare","dojo/_base/array"],function(f,b){var d="INCHES FOOT FOOT_US YARDS MILES NAUTICAL_MILES MILLIMETERS CENTIMETERS METER KILOMETERS DECIMETERS LINK_CLARKE FOOT_GOLD_COAST FOOT_CLARKE CHAIN_SEARS_1992_TRUNCATED YARD_INDIAN CHAIN_BENOIT_1895_B YARD_SEARS CHAIN_SEARS FOOT_SEARS YARD_INDIAN_1937 50_KILOMETERS 150_KILOMETERS".split(" "),e="DECIMAL_DEGREES DEGREE_MINUTE_SECONDS DEGREE GRAD MGRS USNG".split(" "),c={INCHES:0.0254,FOOT:0.3048,FOOT_US:0.3048006096012192,YARDS:0.9144,
MILES:1609.344,NAUTICAL_MILES:1852,MILLIMETERS:0.0010,CENTIMETERS:0.01,METER:1,KILOMETERS:1E3,DECIMETERS:0.1,LINK_CLARKE:0.2011661949,FOOT_GOLD_COAST:0.3047997101815088,FOOT_CLARKE:0.304797265,CHAIN_SEARS_1922_TRUNCATED:20.116756,YARD_INDIAN:0.9143985307444408,CHAIN_BENOIT_1895_B:20.11678249437587,YARD_SEARS:0.9143984146160287,CHAIN_SEARS:20.11676512155263,FOOT_SEARS:0.3047994715386762,YARD_INDIAN_1937:0.91439523,"50_KILOMETERS":5E4,"150_KILOMETERS":15E4,DEGREE:0.0174532925199433,DECIMAL_DEGREES:0.0174532925199433,
MGRS:0.0174532925199433,USNG:0.0174532925199433,DEGREE_MINUTE_SECONDS:0.0174532925199433,GRAD:0.01570796326794897},a=f(null,function(){});a.convertUnit=function(a,g,b){return c[a.toUpperCase()]/c[g.toUpperCase()]*b};a.getUnitRate=function(a,b){return c[a.toUpperCase()]/c[b.toUpperCase()]};a.isProjectUnit=function(a){return-1<b.indexOf(d,a.toUpperCase())};a.isGeographicUnit=function(a){return-1<b.indexOf(e,a.toUpperCase())};a.getGeographicUnits=function(){return e};a.getProjectUnits=function(){return d};
return a});