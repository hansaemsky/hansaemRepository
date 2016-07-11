var URL = 'http://bmord-internal-min.ap-northeast-2.elasticbeanstalk.com';
//위 변수에 값을 대입하는 표현식이라고 할 수 있을까?
var frisby = require('frisby');
// frisby.globalSetup({
//    timeout으로 설정한 내용. 3초
      // timeout:30000
    //  });
frisby.create('GetLogtest2')
      .get(URL + '/ord/BIX1234567890')
      .afterJSON(function(json){
//	 console.log({'Items[1]': json});<<
//   	 1. ' '붙은거와 안붙은것에 대한 차이를 확인한다.
//   	 2. function(json)이라면, console.log다음에 json이 들어가야한다.?
      console.log(json.Items[1].payload.S);

      })
      .toss();
      // .expectMaxResponseTime(30000)
