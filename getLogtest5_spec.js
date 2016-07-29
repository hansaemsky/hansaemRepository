var URL = 'http://bmord-internal-min.ap-northeast-2.elasticbeanstalk.com';
//위 변수에 값을 대입하는 표현식이라고 할 수 있을까?
var frisby = require('frisby');
// frisby.globalSetup({
//    timeout으로 설정한 내용. 3초
      // timeout:30000
    //  });

frisby.create('GetLogtest3')
      .get(URL + '/ord/BIX1234567891')
//      .inspectBody()
      .afterJSON(function(json){
          for(var i=0; i < json.Items.length; i++){

            // if(json.Items[i].payload != null)
            if('payload' in json.Items[i])
            {

               var ordtrandiD = json.Items[i].payload.S;
              //  console.log(typeof ordtrandiD);
              //  console.log(ordtrandiD);
              //  console.log('ordtrandiD');
              var a = JSON.parse(ordtrandiD);
              // JSON object로 변수값을 주어 변환시키는 작업.
              console.log(a.tranid);
              // JSON object로 변환 후  출력시키는 작업.
              var b = JSON.stringify(a.tranid);
              // JSON object를 string으로 변환시키는 작업.
              console.log(b);
              //string으로 변환 후 변수값을 출력하는 작업.
            }
          }
 //인덱스는 배열보다 하나 작다.
      })
      .toss();
      // .expectMaxResponseTime(30000)
