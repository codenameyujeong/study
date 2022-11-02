var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];


//forEach()
$('.temp').each(function(i) {
    var temp = getCurrentTemp(cityList[i]);
    var iconURL = "https://openweathermap.org/img/wn/";

    $(this).prev().children().attr('src', iconURL + temp.icon + '.png')   //attr은 속성값을 바꿔주는 값
    $(this).text(temp.celsius + 'C')     //바인딩(데이터를 넣어주는 행동)
    //this는 cityList[i] 번째에 지목되는 도시들을 의미함

})

$('.location').on({     //.on은 여러가지 이벤트를 만들때 사용됨
    'click' : function() {      //click 이벤트 생성
        var q = $(this).children('.q').attr('id')    //this는 여러가지 location 중에 어느것인지는 아직 모른다
        var redirectURL = 'pages/weather_location.html?q=' + q  //경로와 q가 합쳐지기에 부산을 선택하면 부산이 생성된다
        location.href = redirectURL //
    }
})