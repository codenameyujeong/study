var url = "https://api.openweathermap.org/data/2.5/weather?";
url += "appid=50715911ae648d993e2f81c87124c9f1";
url += "&units=metric";
url += "&lang=kr";
url += "&q=";

//현재 날씨의 모든 정보 얻어오기
function getCurrentWeather (city) {
    var dataObj;
    var openWheatherAPI = url;

    //ajax는 비동기 프로그램 (순서없이 빨리 끝나는대로 일 처리를 함)
    $.ajax({
        type: "GET",    //서버에 get방식으로 요청을 함
        url: openWheatherAPI += city,   
        dataType: "json",   //받아올 데이터 타입
        async: false,       //비동기(async) -> 동기(sync) (비동기에서 동기로 바꿔주는 이유는 결과 데이터를 리턴시키기 위해)
        //동기는 순서대로 작동하는 것을 말한다 (차례대로)
        success: function (data) {  //성공하면 데이터가 실행(API call 성공)
            console.log(data.wind.speed); //데이터 뽑아오는 방법(콘솔로그에 띄우기())
            console.log(data.dt); //데이터 뽑아오는 방법(콘솔로그에 띄우기())
            console.log(data.weather[0].icon);    //데이터 뽑아오는 방법(콘솔로그에 띄우기())
            dataObj = data;
        },    
        error: function (request, status, error) {  //실패하면 데이터가 실행안됨 (API call 실패)
            console.log(request, status, error)
        },      
    })
    return dataObj;
}

getCurrentWeather();


//지역별 현재 온도 얻어오기
function getCurrentTemp (city) {

    var temp = {}
    var openWheatherAPI = url;

    $.ajax({
        type: "GET", //서버에 get방식으로 요청을 함
        url: openWheatherAPI += city,
        dataType: "json", //받아올 데이터 타입
        async: false, //비동기(async) -> 동기(sync) (비동기에서 동기로 바꿔주는 이유는 결과 데이터를 리턴시키기 위해)
        success: function (data) {
            temp.celsius = data.main.temp //온도
            temp.icon = data.weather[0].icon //아이콘은 날씨에 따라 다른모양
        },
        error: function (request, status, error) {
            //실패하면 데이터가 실행안됨 (API call 실패)
            console.log(request, status, error);
        },
    })
    console.log(temp)
    return temp
}
getCurrentTemp();

























































