# ApiDocumentation.OperationHandlerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleUsingGET**](OperationHandlerApi.md#handleUsingGET) | **GET** /actuator/health/** | handle
[**handleUsingGET1**](OperationHandlerApi.md#handleUsingGET1) | **GET** /actuator/health | handle
[**handleUsingGET2**](OperationHandlerApi.md#handleUsingGET2) | **GET** /actuator/info | handle



## handleUsingGET

> Object handleUsingGET(opts)

handle

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.OperationHandlerApi();
let opts = {
  'body': {key: "null"} // {String: String} | body
};
apiInstance.handleUsingGET(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: String}**](String.md)| body | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.spring-boot.actuator.v3+json, application/json, application/vnd.spring-boot.actuator.v2+json


## handleUsingGET1

> Object handleUsingGET1(opts)

handle

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.OperationHandlerApi();
let opts = {
  'body': {key: "null"} // {String: String} | body
};
apiInstance.handleUsingGET1(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: String}**](String.md)| body | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.spring-boot.actuator.v3+json, application/json, application/vnd.spring-boot.actuator.v2+json


## handleUsingGET2

> Object handleUsingGET2(opts)

handle

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.OperationHandlerApi();
let opts = {
  'body': {key: "null"} // {String: String} | body
};
apiInstance.handleUsingGET2(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**{String: String}**](String.md)| body | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.spring-boot.actuator.v3+json, application/json, application/vnd.spring-boot.actuator.v2+json

