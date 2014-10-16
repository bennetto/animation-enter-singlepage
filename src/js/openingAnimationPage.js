
var openingAnimationPage = new function() {
    var _self = this;
    /*
      _____                _   _
     / ____|              | | (_)
     | |     _ __ ___  __ _| |_ _  ___  _ __
     | |    | '__/ _ \/ _` | __| |/ _ \| '_ \
     | |____| | |  __/ (_| | |_| | (_) | | | |
     \_____|_|  \___|\__,_|\__|_|\___/|_| |_|
     */

    var containerGlobal =  document.getElementsByClassName("containerGlobal")[0];
    var containerGlobalClassSave = containerGlobal.className;

//creation panel left and right
    var openingPage = containerGlobal.getElementsByClassName("openingPage")[0];
    var panel = openingPage.getElementsByClassName("panel-openingPage")[0];

//calcul size panelContent
    var panelContent = panel.getElementsByClassName("content-panel")[0];
    var width = panelContent.offsetWidth;
    var height = panelContent.offsetHeight;

//create panel Left
    var panelLeft = panel.cloneNode(true);
    panelLeft.className = "panel panelLeft";
    panelLeft.setAttribute("style", "display:none;");
    var panelLeftContent = panelLeft.getElementsByClassName("content-panel")[0];
    panelLeftContent.style.right = -width / 2 + "px";
    openingPage.appendChild(panelLeft);

//create panel right
    var panelRight = panel.cloneNode(true);
    panelRight.className = "panel panelRight";
    panelRight.setAttribute("style", "display:none;");
    var panelRightContent = panelRight.getElementsByClassName("content-panel")[0];
    panelRightContent.style.left = -width / 2 + "px";
    openingPage.appendChild(panelRight);


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
        var width = openingPage.offsetWidth;

        openingPage.setAttribute("style", " -webkit-perspective: " + width + ";-moz-perspective: " + width + ";-o-perspective: " + width + ";perspective: " + width + ";");
        if (width % 2 != 0) {
            panelLeft.style.width = "50.1%";
            panelRight.style.width = "50.1%";
        } else {
            panelLeft.style.width = "50%";
            panelRight.style.width = "50%";
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
            panelLeft.getElementsByClassName(classInput)[0].value = value;
            panelRight.getElementsByClassName(classInput)[0].value = value;
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
    function beforeOpenAnimation() {
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
        panel.style.display = 'none';
        panelLeft.style.display = 'block';
        panelRight.style.display = 'block';

        setTimeout(function () {
            containerGlobal.className = containerGlobalClassSave + " open";
        }, 1);

    };
    var launchOpen = panel.getElementsByClassName("launch-open")[0];
    if (launchOpen) {
        launchOpen.addEventListener("click", _self.openOpeningPage);
    }

//event click close

    this.closeOpeningPage = function () {
        beforeCloseAnimation();
        containerGlobal.className = containerGlobalClassSave + " close";
    };
    var launchBack = bodySite.getElementsByClassName("launch-back")[0];
    if (launchBack) {
        launchBack.addEventListener("click", _self.closeOpeningPage);
    }
};
