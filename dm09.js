
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~8291dedc-9122-4a29-b163-ed27464bc75c; yz_log_seqb=1652519012385; yz_log_seqn=38; _kdt_id_=97284269; KDTSESSIONID=YZ975080924771098625YZ4eqPajvi; nobody_sign=YZ975080924771098625YZ4eqPajvi; captcha_sid=YZ975080996363804672YZfsbeF6ms; dfp=e9a89f3d8ea01318902030510e198a5f; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1652519012330; yz_log_uuid=77e2defb-9f09-bbe2-6aa8-d9d956175579`,
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
    $notify("吊毛9", "14748667823 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

