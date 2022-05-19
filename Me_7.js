
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~d94692f6-adf5-4d13-a24c-8cce39f6521a; yz_log_seqb=1652973643118; yz_log_seqn=11; _kdt_id_=97284269; yz_ep_page_track=V4D8wLR%2FyEg2qFDZWOU3XQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=340eef046bb381d95cbfbaba6e98117a; loc_dfp=c672cc27cdfc9750f39267cc614db9f4; rdfp=340eef046bb381d95cbfbaba6e98117a; _efmdata=U2BNSMOGWhXsVXcJu1ddhdqHWyzOMZnSCrW5X7nkSM8U1tJo8b%2Fte7PA5ANAJX0E6YEb5TbotkPCZ0nyng6zfHTgjo%2FWZeJWeSuhhUjIETI%3D; _exid=ndG4KHZ94wDCPTojBC65Acstu8DRCU%2BDAfN%2FvIK3gbNJSaxGbQed0wzjJcIiXBcmUpczQJckONSjo07jz%2FbaXw%3D%3D; ec=8nqUzW8M-1651127173794-f401140fa628c-1803756286; yz_fp_hash=6644e7ebedbbffc5cbc5045bb122c051; yz_log_ftime=1652972562295; yz_log_uuid=8f4c7eb0-4287-bc82-b6e7-b1b6c24daf07; entry=3; KDTSESSIONID=YZ969243127071674368YZiELdFV65; nobody_sign=YZ969243127071674368YZiELdFV65`,
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
    $notify("W7", "元初15384192893", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
