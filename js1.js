
var verstomb1=[
    {
        cim:"A Hegyi Zsupsz",
        szerzo:"Keresztesi József",
        vers:"A Hegyi Zsupsz egy nagy, kövér,<br>nehézkes léptű, lomha lény,<br>és lenn a völgyben él szegény.<br><br>A hegyre nem megy föl soha.<br>A Kőszáli Puff rokona.<br>",
        kep:"kepek/hegyizsupsz.png",
    },
]  
$(function () {
  for (let i = 0; i < verstomb1.length; i++) {
      const element = verstomb1[i];
      $("article").append("<div id='vers'><h3>"+element.cim+"</h3><p>"+element.vers+"</p><p><img src='"+element.kep+"'></p><p>"+element.szerzo+"</p></div>");
  }
  $("h3").hover(kep);
  //$("#vers>p").eq(0).append("<img src='"+verstomb1[0].kep+"' alt='vers1'>");
  });

function kep(){
    $("img").toggle();
}
