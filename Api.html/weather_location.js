// 전체 url 가져오기
var currentURL = location.href;
var urlObj = new URL(currentURL);

// 쿼리스트링 파라메터 가져오기
var params = urlObj.searchParams;
var q = params.get("q");
console.log(q);

// 전체 날씨 정보 얻어오기
var result = getCurrentWeather(q);
console.log(result);

//데이터 바인딩
$("#temp").text(result.main.temp + "℃");
$("#wind").text(result.wind.speed + "m/s");
$("#humidity").text(result.main.humidity + "%");

