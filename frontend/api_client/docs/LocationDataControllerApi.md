# ApiDocumentation.LocationDataControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMatchingLocationsUsingPOST**](LocationDataControllerApi.md#getMatchingLocationsUsingPOST) | **POST** /locations/check | Responds with a list of matched locations
[**uploadLocationDataUsingPOST**](LocationDataControllerApi.md#uploadLocationDataUsingPOST) | **POST** /locations/{user}/upload | Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish



## getMatchingLocationsUsingPOST

> [LocationMatch] getMatchingLocationsUsingPOST(jsonData)

Responds with a list of matched locations

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LocationDataControllerApi();
let jsonData = new ApiDocumentation.TimelineJsonRoot(); // TimelineJsonRoot | jsonData
apiInstance.getMatchingLocationsUsingPOST(jsonData, (error, data, response) => {
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
 **jsonData** | [**TimelineJsonRoot**](TimelineJsonRoot.md)| jsonData | 

### Return type

[**[LocationMatch]**](LocationMatch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## uploadLocationDataUsingPOST

> String uploadLocationDataUsingPOST(user, jsonData)

Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LocationDataControllerApi();
let user = "user_example"; // String | user
let jsonData = new ApiDocumentation.TimelineJsonRoot(); // TimelineJsonRoot | jsonData
apiInstance.uploadLocationDataUsingPOST(user, jsonData, (error, data, response) => {
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
 **user** | **String**| user | 
 **jsonData** | [**TimelineJsonRoot**](TimelineJsonRoot.md)| jsonData | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

