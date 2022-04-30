
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~c2979a4f-0422-4089-a1c2-01f58eca2659; yz_log_seqb=1651290574869; yz_log_seqn=12; _kdt_id_=97284269; yz_ep_page_track=V4D8wLR%2FyEg2qFDZWOU3XQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=340eef046bb381d95cbfbaba6e98117a; rdfp=340eef046bb381d95cbfbaba6e98117a; loc_dfp=5e1dfbb1261bf21460c447cc14fca145; _efmdata=U2BNSMOGWhXsVXcJu1ddhdqHWyzOMZnSCrW5X7nkSM8U1tJo8b%2Fte7PA5ANAJX0EoxnsIU0nFvH5yAq8t0cF9IAEfbJa9qcG7uYn%2BxxyyYo%3D; _exid=OXu6Z5L9Nont7Jk7t3pTMZ34UHxF0ViaFiJlIRZo6ECCzJ3kg5itDz3GiQjiz0U2900j1PBTfKpY3NJKlPFoYA%3D%3D; ec=8nqUzW8M-1651127173794-f401140fa628c-1803756286; yz_fp_hash=e9d46cd762845c0a391b5494eee3b5b2; yz_log_ftime=1651127171301; yz_log_uuid=56ff8d9c-9f8c-77e2-256d-9eba20c48c58; KDTSESSIONID=YZ969243127071674368YZiELdFV65; nobody_sign=YZ969243127071674368YZiELdFV65`,
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
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
