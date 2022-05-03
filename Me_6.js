
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `loc_dfp=b8b5b435beaf6995778ccd8a15416995; trace_sdk_context_pv_id=/wscump/checkin/result~10f26df4-0f03-4d08-a201-3dfdcc487255; yz_log_seqb=1651290431693; yz_log_seqn=17; _kdt_id_=97284269; yz_ep_page_track=Jt1P3cQA3P43SM9Jknc2gw%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=63b9388f1648b3fbdead0bdf7dd5312d; rdfp=63b9388f1648b3fbdead0bdf7dd5312d; _efmdata=iVr0oye6x3jYbLyGTZAoBTdQC9xjg0i5dcgkqrzmd819hFUk7vrOogR%2FUmknKuIBABEOvCr2AobJ0xaB1Q5a2YnMwV3y4SidhrZkdBuiaZY%3D; _exid=GGbPMr8mLtnqShzO9iTHREFM1rHkUI9n%2FQSosQR7tZCZBPODXXTZMm1IF6Epfup47Wf3PWiw57UBI4XKrujMEg%3D%3D; ec=nXXFZ7RJ-1651145371195-aaee37c13f564-532273528; yz_fp_hash=e297de3a5fb00b4ec84e465fa5af0d08; yz_log_ftime=1651145367855; yz_log_uuid=be2743eb-e4ba-1eba-e076-c226dc711c3f; KDTSESSIONID=YZ969319445971836928YZtx0Cic2F; nobody_sign=YZ969319445971836928YZtx0Cic2F`,
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
    $notify("W6", "元初18658696822", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
