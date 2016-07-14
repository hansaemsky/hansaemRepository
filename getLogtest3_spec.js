var URL = 'http://bmord-internal-min.ap-northeast-2.elasticbeanstalk.com';
//위 변수에 값을 대입하는 표현식이라고 할 수 있을까?
var frisby = require('frisby');
// frisby.globalSetup({
//    timeout으로 설정한 내용. 3초
      // timeout:30000
    //  });
frisby.create('GetLogtest2')
      .get(URL + '/ord/BIX1234567891')
      .afterJSON(function(json){

        for(var i=0; i < json.Items.length; i++){
          console.log(json.Items[i].payload);
        }
 //인덱스는 배열보다 하나 작다.
      })
      .toss();
      // .expectMaxResponseTime(30000)
