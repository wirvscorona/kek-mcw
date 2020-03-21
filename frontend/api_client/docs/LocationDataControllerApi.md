# ApiDocumentation.LocationDataControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMatchingLocationsUsingPOST**](LocationDataControllerApi.md#getMatchingLocationsUsingPOST) | **POST** /locations/check | Responds with a list of matched locations
[**uploadLocationDataUsingPOST**](LocationDataControllerApi.md#uploadLocationDataUsingPOST) | **POST** /locations/upload | Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish



## getMatchingLocationsUsingPOST

> [LocationMatch] getMatchingLocationsUsingPOST(jsonData, opts)

Responds with a list of matched locations

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LocationDataControllerApi();
let jsonData = new ApiDocumentation.TimelineJsonRoot(); // TimelineJsonRoot | jsonData
let opts = {
  'maxDistanceInMeters': 100, // Number | maxDistanceInMeters
  'virusPersistenceTimeInMillis': 1800000 // Number | virusPersistenceTimeInMillis
};
apiInstance.getMatchingLocationsUsingPOST(jsonData, opts, (error, data, response) => {
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
 **maxDistanceInMeters** | **Number**| maxDistanceInMeters | [optional] [default to 100]
 **virusPersistenceTimeInMillis** | **Number**| virusPersistenceTimeInMillis | [optional] [default to 1800000]

### Return type

[**[LocationMatch]**](LocationMatch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## uploadLocationDataUsingPOST

> String uploadLocationDataUsingPOST(jsonData)

Responds with a list of diaries, if parameters are set it will respond with a list of contacts taken between start and finish

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LocationDataControllerApi();
let jsonData = new ApiDocumentation.TimelineJsonRoot(); // TimelineJsonRoot | jsonData
apiInstance.uploadLocationDataUsingPOST(jsonData, (error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

