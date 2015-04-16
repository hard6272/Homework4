//-----------------------------------------------------------------------
// Programming Assignment 4
// April 12, 2015 - BUS 353 - University of Idaho
//-----------------------------------------------------------------------
//------------------------------------------------
// Custom Color Palette
// Based on Idaho Vandals
//------------------------------------------------
// http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/University_of_Idaho_Vandals_logo.svg/2000px-University_of_Idaho_Vandals_logo.svg.png
// http://www.colorhunter.com/
// #201B16
// #D5923B
// #F9F9F9

//------------------------------------------------
// Declare Global Objects
//------------------------------------------------
Titanium.UI.setBackgroundColor('#371515');

var layout = Ti.UI.createView({layout: 'vertical'});

//------------------------------------
// Tab Group & Tabs
//------------------------------------
var tabGroup = Titanium.UI.createTabGroup();

//-----------------------
// Tab 1
//-----------------------
var winLanding = Titanium.UI.createWindow({  
    title:'Parker Gibson',
    backgroundColor:'#F9F9F9'
});

var tabLanding = Titanium.UI.createTab({  
    title:'Parker Gibson',
    window:winLanding
});

var lblLanding1 = Titanium.UI.createLabel({
	color:'#201B16',
	text:'Parker Gibson',
	font:{fontSize:28,fontFamily:'Helvetica Neue'},
	top:30,
	textAlign:'left',
	width:'auto'
});

var lblLanding2 = Titanium.UI.createLabel({
	color:'#201B16',
	text:'715 N Jefferson, #8\nMoscow, ID 83843',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	top:65,
	textAlign:'center',
	width:'auto'
});

var lblLanding3 = Titanium.UI.createLabel({
	color:'#201B16',
	text:'gibs4356@vandals.uidaho.edu\n(208) 691-2046',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	bottom:30,
	textAlign:'center',
	width:'auto'
});

var pic1 = Titanium.UI.createImageView({
   image: "parker.jpg",
   height:200, 
   width:200, 
}); 

//-----------------------
// Tab 2
//-----------------------
var winBio = Titanium.UI.createWindow({  
    title:'About Me',
    backgroundColor:'#F9F9F9'
});

var tabBio = Titanium.UI.createTab({  
//    icon:'KS_nav_ui.png',
    title:'About Me',
    window:winBio 
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: false,
  height: '100%',
  width: '100%'
});

var view = Ti.UI.createView({
  backgroundColor:'#F9F9F9',
  borderRadius: 0,
  top: 0,
  height: 750,
  width: 'auto'
});

var lblBio1 = Titanium.UI.createLabel({
	color:'#201B16',
	text:'Parker Gibson',
	font:{fontSize:28,fontFamily:'Helvetica Neue'},
	top:30,
	textAlign:'left',
	width:'auto'
});

var lblBio2 = Titanium.UI.createLabel({
	color:'#201B16',
	text:'I have a passion for computers; I always have. Although I work in basements and server rooms, I enjoy working with my hands and being outside. I love this country, and want to serve the community I live in to the best of my ability.  I will be getting my BS Information Systems from the University of Idaho in Fall 2015. I have worked for the University of Idaho ITS department while going to school, and have a heavy customer service background as well as experience with the criminal justice system doing surveillance work for a private investigator in Hayden. When I encounter a problem, I embrace it, and use the opportunity to learn and improve so as to avoid any similar problems in the future. Lastly, I love working with IT, but the most important part of any business is the people. Without the customers, and employees, there would be no business. IT is not about fixing computers so much as it is about providing solutions for people.',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	top:90,
	left:20,
	right:20,
	textAlign:'left',
	wordWrap:true,
	width:'auto'
});

var lblBio3 = Titanium.UI.createLabel({
	color:'#201B16',
	text:'715 N Jefferson, #8, Moscow, ID 83843\ngibs4356@vandals.uidaho.edu - C:(208) 691-2046',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	bottom:30,
	textAlign:'center',
	width:'auto'
});		

var pic2 = Titanium.UI.createImageView({
   image: "parker.jpg",
   height:200, 
   width:200, 
   top:460
}); 

//------------------------------------------------
// Add Objects
//------------------------------------------------
//------------------------------------
// Add Windows & Tabs
//------------------------------------
scrollView.add(view);
winBio.add(scrollView);
winLanding.add(lblLanding1);
winLanding.add(lblLanding2);
winLanding.add(lblLanding3);
winLanding.add(pic1);
scrollView.add(lblBio1);
scrollView.add(lblBio2);
scrollView.add(lblBio3);
scrollView.add(pic2);
tabGroup.addTab(tabLanding);  
tabGroup.addTab(tabBio);
//------------------------------------
// Run Main (tabGroup) 
//------------------------------------
tabGroup.open();
