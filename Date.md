##### JavaScript new Date() NaN on iPhone

- 原因：Iphone,不支持“2017-08-08”这种格式的Date。所以需要把它转换成 “2017/08/08”这种格式

```
if (app.isAppleDevice()) {
    var dateParts = myDate.substring(0,10).split('-');
    var timePart = myDate.substr(11);
    myDate= dateParts[1] + '/' + dateParts[2] + '/' + dateParts[0] + ' ' + timePart;
}
```