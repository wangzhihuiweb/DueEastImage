//获取地址栏参数
function getParamValue(name) {
    var paramsArray = getUrlParams();
    if (paramsArray != null) {
        for (var i = 0; i < paramsArray.length; i++) {
            for (var j in paramsArray[i]) {
                if (j == name) {
                    return paramsArray[i][j];
                }
            }
        }
    }
    return null;
}
function getUrlParams() {
    var search = window.location.search;
    // 写入数据字典
    var tmparray = search.substr(1, search.length).split("&");
    var paramsArray = new Array;
    if (tmparray != null) {
        for (var i = 0; i < tmparray.length; i++) {
            var reg = /[=|^==]/;    // 用=进行拆分，但不包括==
            var set1 = tmparray[i].replace(reg, '&');
            var tmpStr2 = set1.split('&');
            var array = new Array;
            array[tmpStr2[0]] = tmpStr2[1];
            paramsArray.push(array);
        }
    }
    // 将参数数组进行返回
    return paramsArray;
}


function GetHost() {
    //食安云地址
    return "http://localhost:25858";
}

function GetDPHost() {
    //食安点评地址
    return "http://localhost:25890";
}

function GetHZSQHost() {
    //食安互智社群地址
    return "http://localhost:10708";
}

function GetConnectHost() {
    //登录中心地址
    return "http://localhost:25827";
}

//获取Paths.xml头像类型
function GetIdByLevelCode(levelcode) {
    var id = "";
    switch (levelcode+"") {
        case "1330":
            id = "食安@微店头像";
            break;
        case "1450":
            id = "食安微店@店长头像";
            break;
        case "131":
            id = "食安点评IVIP头像";
            break;
        case "6060":
            id = "食安点评@导播头像";
            break;
    }

    return id;
}