# ApiDocumentation.ExportControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportExaminationFeaturesUsingGET**](ExportControllerApi.md#exportExaminationFeaturesUsingGET) | **GET** /api/export/examination_feature_set.csv | Responds with a list of diaries



## exportExaminationFeaturesUsingGET

> exportExaminationFeaturesUsingGET()

Responds with a list of diaries

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.ExportControllerApi();
apiInstance.exportExaminationFeaturesUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

