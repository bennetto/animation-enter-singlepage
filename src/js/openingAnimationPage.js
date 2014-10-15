/*
   _____                _   _
  / ____|              | | (_)
 | |     _ __ ___  __ _| |_ _  ___  _ __
 | |    | '__/ _ \/ _` | __| |/ _ \| '_ \
 | |____| | |  __/ (_| | |_| | (_) | | | |
 \_____|_|  \___|\__,_|\__|_|\___/|_| |_|
 */

//creation panel left and right
var panel = document.getElementsByClassName("panel-openingPage")[0];

var panelLeft = panel.cloneNode(true);
panelLeft.className = "panel panelLeft";

var panelRight= panel.cloneNode(true);
panelRight.className = "panel panelRight";

var openingPage = document.getElementsByClassName("openingPage")[0];

var panelContent = panel.getElementsByClassName("content-panel")[0];
var width = panelContent.offsetWidth;
var height = panelContent.offsetHeight;

panelLeft.setAttribute("style","display:none;");
var panelLeftContent = panelLeft.getElementsByClassName("content-panel")[0];
panelLeftContent.setAttribute("style","right:-"+width/2+"px;");

panelRight.setAttribute("style","display:none;");
var panelRightContent = panelRight.getElementsByClassName("content-panel")[0];
panelRightContent.setAttribute("style","left:-"+width/2+"px;");

openingPage.appendChild(panelLeft);
openingPage.appendChild(panelRight);

var launchOpen = panel.getElementsByClassName("launch-open")[0];
var bodySite = document.getElementsByClassName("body-site")[0];
var launchBack =  document.getElementsByClassName("launch-back")[0];



/*
  _____                              _   _
 |  __ \                            | | (_)
 | |__) |__ _ __ ___ _ __   ___  ___| |_ ___   _____
 |  ___/ _ \ '__/ __| '_ \ / _ \/ __| __| \ \ / / _ \
 | |  |  __/ |  \__ \ |_) |  __/ (__| |_| |\ V /  __/
 |_|   \___|_|  |___/ .__/ \___|\___|\__|_| \_/ \___|
                    | |
                    |_|
 */
function changePerspective(){
    var width = openingPage.offsetWidth;

    openingPage.setAttribute("style"," -webkit-perspective: "+width+";-moz-perspective: "+width+";-o-perspective: "+width+";perspective: "+width+";");
    if(width%2 != 0)
    {
        panelLeft.style.width ="50.1%";
    }else
    {
        panelLeft.style.width ="50%";
    }
}

/*
   _____ _                              _____                   _
  / ____| |                            |_   _|                 | |
 | |    | |__   __ _ _ __   __ _  ___    | |  _ __  _ __  _   _| |_
 | |    | '_ \ / _` | '_ \ / _` |/ _ \   | | | '_ \| '_ \| | | | __|
 | |____| | | | (_| | | | | (_| |  __/  _| |_| | | | |_) | |_| | |_
 \_____|_| |_|\__,_|_| |_|\__, |\___| |_____|_| |_| .__/ \__,_|\__|
                            _/ |                  | |
                          |___/                   |_|
 */

var form = panel.getElementsByTagName("form")[0];
var inputs = form.getElementsByTagName("input");

for (var i=0;i<inputs.length;i++) {
    inputs[i].addEventListener("change",function(e) {
        var value = e.target.value;
        var classInput = e.target.classList;
        panelLeft.getElementsByClassName(classInput)[0].value = value;
        panelRight.getElementsByClassName(classInput)[0].value = value;
    });
}


/*
  ______               _      ____
 |  ____|             | |    / __ \
 | |____   _____ _ __ | |_  | |  | |_ __   ___ _ __
 |  __\ \ / / _ \ '_ \| __| | |  | | '_ \ / _ \ '_ \
 | |___\ V /  __/ | | | |_  | |__| | |_) |  __/ | | |
 |______\_/ \___|_| |_|\__|  \____/| .__/ \___|_| |_|
                                   | |
                                   |_|
 */

function beforeAnimation(){
    changePerspective();


}

//event click open
launchOpen.addEventListener("click",function(){
    beforeAnimation();
    panel.setAttribute("style","display:none;");
    panelLeft.setAttribute("style","display:block;");
    panelRight.setAttribute("style","display:block;");

    setTimeout(function(){
        panel.className  = panel.className + " open";
        panelLeft.className = panelLeft.className + " open";
        panelRight.className = panelRight.className + " open";
    }, 1);

    setTimeout(function(){
        bodySite.className = bodySite.className + " open";
    }, 500);
});


//event click close
launchBack.addEventListener("click",function(){
    beforeAnimation();
    bodySite.className = " body-site";
    setTimeout(function(){
        panel.className = "panel-openingPage";
        panelLeft.className = "panel panelLeft";
        panelRight.className =  "panel panelRight";

        setTimeout(function(){
            panel.setAttribute("style","display:block;");
            panelLeft.setAttribute("style","display:none;");
            panelRight.setAttribute("style","display:none;");
        }, 1000);
    }, 500);
});