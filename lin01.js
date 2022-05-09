
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~256133ca-f79a-4724-805f-02979fa5c919; _efmdata=bZ%2FH6A%2BSEbaDBywKq2LFsNnxaNC%2Fn%2FwP2ikfjmBhxTQ127nMtArfO1FzcRnCzZIG5ymcqS0%2FcwbaQzMr2QRL9vJo3MdiCmtEENus4lzt0Yg%3D; _exid=My7Gicr1V3q%2B1strX7zCZ1GvjIQrLFcVYX%2FFvSkhvQ4v6e1vN9gQ9Og8eEITZYdtG4hBoCyvxo6KhNiM27UtnQ%3D%3D; ec=IKVYvbR8-1652106687743-1b346c50f527498159625; yz_fp_hash=ecc62ce86ce8ebf96e837d1ae15fc174; yz_log_seqb=1652106686313; yz_log_seqn=12; _kdt_id_=97284269; yz_ep_page_track=9VzfSWEgFy%2BWzoi7n6Zm0g%3D%3D; yz_ep_page_type_track=iDJ3GNJDHbhHtOl6W3j3ZA%3D%3D; dfp=44b29738b5ad7504b639891e8a298c01962ae21f; yz_log_ftime=1652106686245; yz_log_uuid=3bc0bcff-b1dd-8c51-fbc7-af19c5ce91b8; KDTSESSIONID=YZ972436750357721088YZTm4gAMdS; nobody_sign=YZ972436750357721088YZTm4gAMdS; kdt_id=99209606; `,
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
    $notify("林仔1", "13602437970", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

