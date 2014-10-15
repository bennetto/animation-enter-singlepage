/*
   _____                _   _
  / ____|              | | (_)
 | |     _ __ ___  __ _| |_ _  ___  _ __
 | |    | '__/ _ \/ _` | __| |/ _ \| '_ \
 | |____| | |  __/ (_| | |_| | (_) | | | |
 \_____|_|  \___|\__,_|\__|_|\___/|_| |_|
 */

//creation panel left and right
var openingPage = document.getElementsByClassName("openingPage")[0];
var panel = openingPage.getElementsByClassName("panel-openingPage")[0];

//calcul size panelContent
var panelContent = panel.getElementsByClassName("content-panel")[0];
var width = panelContent.offsetWidth;
var height = panelContent.offsetHeight;

//create panel Left
var panelLeft = panel.cloneNode(true);
panelLeft.className = "panel panelLeft";
panelLeft.setAttribute("style","display:none;");
var panelLeftContent = panelLeft.getElementsByClassName("content-panel")[0];
panelLeftContent.style.right = -width/2+"px";
openingPage.appendChild(panelLeft);

//create panel right
var panelRight= panel.cloneNode(true);
panelRight.className = "panel panelRight";
panelRight.setAttribute("style","display:none;");
var panelRightContent = panelRight.getElementsByClassName("content-panel")[0];
panelRightContent.style.left = -width/2+"px";
openingPage.appendChild(panelRight);


var bodySite = document.getElementsByClassName("body-site")[0];


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


var changeInput = function(){
    var inputs = panel.getElementsByTagName("input");
    for (var i=0;i<inputs.length;i++) {
        inputs[i].addEventListener("change",function(e) {
            var value = e.target.value;
            var classInput = e.target.classList;
            panelLeft.getElementsByClassName(classInput)[0].value = value;
            panelRight.getElementsByClassName(classInput)[0].value = value;
        });
    }
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
function beforeOpenAnimation(){
    beforeAnimation();
    changeInput();

}
function beforeCloseAnimation(){
    beforeAnimation();


}

function beforeAnimation(){
    changePerspective();
}

var saveClass = {};
//event click open
var launchOpen = panel.getElementsByClassName("launch-open")[0];
launchOpen.addEventListener("click",function(){
    beforeOpenAnimation();
    panel.style.display = 'none';
    panelLeft.style.display = 'block';
    panelRight.style.display = 'block';

    setTimeout(function(){
        saveClass["panel"] = panel.className;
        saveClass["panelLeft"] = panelLeft.className;
        saveClass["panelRight"] = panelRight.className;

        panel.className  = panel.className + " open";
        panelLeft.className = panelLeft.className + " open";
        panelRight.className = panelRight.className + " open";
    }, 1);

    setTimeout(function(){
        saveClass["bodySite"] = bodySite.className;
        bodySite.className = bodySite.className + " open";
    }, 500);
});




//event click close
var launchBack =  bodySite.getElementsByClassName("launch-back")[0];
launchBack.addEventListener("click",function(){
    beforeCloseAnimation();
    bodySite.className  = saveClass["bodySite"] ;
    setTimeout(function(){
        panel.className =  saveClass["panel"];
        panelLeft.className =  saveClass["panelLeft"];
        panelRight.className =  saveClass["panelRight"];

        setTimeout(function(){
            panel.style.display = 'block';
            panelLeft.style.display = 'none';
            panelRight.style.display = 'none';
        }, 1000);
    }, 500);
});