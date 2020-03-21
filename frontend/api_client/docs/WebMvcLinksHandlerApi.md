# ApiDocumentation.WebMvcLinksHandlerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**linksUsingGET**](WebMvcLinksHandlerApi.md#linksUsingGET) | **GET** /actuator | links



## linksUsingGET

> {String: {String: Link}} linksUsingGET()

links

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.WebMvcLinksHandlerApi();
apiInstance.linksUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: {String: Link}}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.spring-boot.actuator.v3+json, application/json, application/vnd.spring-boot.actuator.v2+json

