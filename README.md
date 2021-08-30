## api

```
https://getir-avnigenc.herokuapp.com/api/v1/record
```

### post api/v1/record

Get Records

**Headers**

Content-Type : application/json

**Request**

Success
```
{
	"startDate": "2016-12-07",
	"endDate": "2017-12-09",
	"minCount": 300,
	"maxCount": 500
}
```
```
{
    "msg": "SUCCESS",
    "code": 0,
    "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 310
        }
    ]
}
```

Invalid
```
{
	"startDate": "2016-11-022",
	"endDate": "2017-12-09",
	"minCount": 1,
	"maxCount": 300
}
```

```
{
    "msg": "INVALID_REQUEST",
    "code": 1,
    "records": [],
    "errors": [
        "Start Date Format should be 'YYYY MM-DD'"
    ]
}
```
## Run Test


npm run test

## start the application


``
npm install
npm run dev
```


