
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~1bf57b53-6bf2-4674-84e2-73e13005ed77; yz_log_seqb=1652519094008; yz_log_seqn=41; _kdt_id_=97284269; KDTSESSIONID=YZ975081282368053248YZcIHxSyvQ; nobody_sign=YZ975081282368053248YZcIHxSyvQ; captcha_sid=YZ975081335631872000YZzpnxJbyC; dfp=bffc15c930c2edc22b2154ecaad19ff9; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1652519093960; yz_log_uuid=3d64a895-b2ec-2c08-fdde-be084b8f7b3f`,
'Accept' : `application/json, text/plain, */*`,
'Connection' : `keep-alive`,
'Referer' : `https://shop97476437.youzan.com/wscump/checkin/result?kdt_id=97284269`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `shop97476437.youzan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x1800142f) NetType/WIFI Language/zh_CN`,
'x-yz-action-id' : `wsc-h5-ump-0ae889d3-1651277541513-316802`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $notify("吊毛10", "13660725171 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

