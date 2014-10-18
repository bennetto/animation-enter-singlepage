var openingAnimationPage = new function() {
    var _self = this;

    var hasClassName = function(obj,className){
        var reg = new RegExp(" " + className + " ");
        return reg.test(' ' + obj.className + ' ');
    }

    /*
      _____                _   _
     / ____|              | | (_)
     | |     _ __ ___  __ _| |_ _  ___  _ __
     | |    | '__/ _ \/ _` | __| |/ _ \| '_ \
     | |____| | |  __/ (_| | |_| | (_) | | | |
     \_____|_|  \___|\__,_|\__|_|\___/|_| |_|
     */

    this.changeAnimation = function(){
        containerGlobalClassSave = containerGlobal.className;
        panelVisible ={};
        panelVisible.initPanel = true;
        //configuration of display and create panel
        if(hasClassName(containerGlobal,"openingPage-doorAnimation"))
        {
            panelVisible.initPanel = false;
            panelVisible.left = true;
            panelVisible.right = true;
            panelVisible.perpective = true;
        }

        if(panelLeft && ! panelVisible.left)
        {
            panelLeft.remove();
            panelLeft = undefined;
        }
        if(panelRight && ! panelVisible.right)
        {
            panelRight.remove();
            panelRight = undefined;
        }

    };




    var containerGlobal =  document.getElementsByClassName("containerGlobal")[0];


//creation panel left and right
    var openingPage = containerGlobal.getElementsByClassName("openingPage")[0];
    var panel = openingPage.getElementsByClassName("panel-openingPage")[0];

    this.changeAnimation();

    var panelLeft;
    var panelRight;

    var bodySite = document.getElementsByClassName("body-site")[0];
    var saveDisplayBody = bodySite.style.display;
    bodySite.style.display = "none";

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
    function changePerspective() {
        if(panelVisible.perpective) {
            var width = openingPage.offsetWidth;

            openingPage.setAttribute("style", " -webkit-perspective: " + width + ";-moz-perspective: " + width + ";-o-perspective: " + width + ";perspective: " + width + ";");
           if(panelLeft) {
               if (width % 2 != 0) {
                   panelLeft.style.width = "50.1%";
               } else {
                   panelLeft.style.width = "50%";
               }
           }
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


    var changeInput = function () {
        var inputs = panel.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            var value = inputs[i].value;
            var classInput = inputs[i].classList;
            if( panelLeft) {
                panelLeft.getElementsByClassName(classInput)[0].value = value;
            }
            if( panelRight) {
                panelRight.getElementsByClassName(classInput)[0].value = value;
            }
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

    var creationPanel = function(){


        //calcul size panelContent
        var panelContent = panel.getElementsByClassName("content-panel")[0];
        var width = panelContent.offsetWidth;
        var height = panelContent.offsetHeight;


        //create panel Left
        if( !panelLeft && panelVisible.left) {
            panelLeft = panel.cloneNode(true);
            panelLeft.className = "panel panelLeft";
            panelLeft.setAttribute("style", "display:none;");
            var panelLeftContent = panelLeft.getElementsByClassName("content-panel")[0];
            panelLeftContent.style.right = -width / 2 + "px";
            openingPage.appendChild(panelLeft);
        }

        //create panel right
        if( !panelRight &&panelVisible.right) {
            panelRight = panel.cloneNode(true);
            panelRight.className = "panel panelRight";
            panelRight.setAttribute("style", "display:none;");
            var panelRightContent = panelRight.getElementsByClassName("content-panel")[0];
            panelRightContent.style.left = -width / 2 + "px";
            openingPage.appendChild(panelRight);
        }
    };


    function beforeOpenAnimation() {
        creationPanel();
        beforeAnimation();
        changeInput();

    }

    function beforeCloseAnimation() {
        beforeAnimation();


    }

    function beforeAnimation() {
        changePerspective();
    }

    var saveClass = {};
//event click open


    this.openOpeningPage = function () {
        beforeOpenAnimation();
        bodySite.style.display = saveDisplayBody;
        if( panelLeft) {panelLeft.style.display = 'block';}
        if( panelRight) { panelRight.style.display = 'block';}
        if(!panelVisible.initPanel) { panel.style.display = 'none'; }
        containerGlobal.className = containerGlobalClassSave + " open";

        setTimeout(function () {
            if(!panelVisible.initPanel) { panel.style.display = 'none';}
        }, 2000);

    };
    var launchOpen = panel.getElementsByClassName("launch-open")[0];
    if (launchOpen) {
        launchOpen.addEventListener("click", _self.openOpeningPage);
    }

//event click close

    this.closeOpeningPage = function () {
        beforeCloseAnimation();
        containerGlobal.className = containerGlobalClassSave + " close";
        setTimeout(function () {
            bodySite.style.display = "none";
            if(!panelVisible.initPanel) { panel.style.display = 'block';}
            if( panelLeft) {panelLeft.style.display = 'none';}
            if( panelRight) {panelRight.style.display = 'none';}
        }, 2000);

    };
    var launchBack = bodySite.getElementsByClassName("launch-back")[0];
    if (launchBack) {
        launchBack.addEventListener("click", _self.closeOpeningPage);
    }


};
