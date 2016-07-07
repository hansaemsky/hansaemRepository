var URL = 'http://bmord-internal-min.ap-northeast-2.elasticbeanstalk.com';
//위 변수에 값을 대입하는 표현식이라고 할 수 있을까?
var frisby = require('frisby');
// frisby.globalSetup({
//    timeout으로 설정한 내용. 3초
      // timeout:30000
    //  });
frisby.create('LiveChktest')
      .get(URL + '/ord/BIX1234567890')
      .expectJSONTypes('Items.2',{
//		mediaid:{S:"613755"}
			mediaid:{S:String}
      })
      .expectMaxResponseTime(30000)
      .toss();
