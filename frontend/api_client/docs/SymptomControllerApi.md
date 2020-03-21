# ApiDocumentation.SymptomControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findSymptomsUsingGET**](SymptomControllerApi.md#findSymptomsUsingGET) | **GET** /api/symptoms | Responds with a list of symptoms
[**findUserUsingGET**](SymptomControllerApi.md#findUserUsingGET) | **GET** /api/symptoms/{id} | Responds with a symptom object
[**saveSymptomUsingPOST**](SymptomControllerApi.md#saveSymptomUsingPOST) | **POST** /api/symptoms | Saves new Symptom object



## findSymptomsUsingGET

> SymptomDTO findSymptomsUsingGET(opts)

Responds with a list of symptoms

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.SymptomControllerApi();
let opts = {
  'search': "search_example" // String | The name of the symptom (or part of it) that should be searched
};
apiInstance.findSymptomsUsingGET(opts, (error, data, response) => {
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
 **search** | **String**| The name of the symptom (or part of it) that should be searched | [optional] 

### Return type

[**SymptomDTO**](SymptomDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findUserUsingGET

> SymptomDTO findUserUsingGET(id)

Responds with a symptom object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.SymptomControllerApi();
let id = 789; // Number | id
apiInstance.findUserUsingGET(id, (error, data, response) => {
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
 **id** | **Number**| id | 

### Return type

[**SymptomDTO**](SymptomDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## saveSymptomUsingPOST

> SymptomDTO saveSymptomUsingPOST(newSymptomDTO)

Saves new Symptom object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.SymptomControllerApi();
let newSymptomDTO = new ApiDocumentation.SymptomDTO(); // SymptomDTO | newSymptomDTO
apiInstance.saveSymptomUsingPOST(newSymptomDTO, (error, data, response) => {
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
 **newSymptomDTO** | [**SymptomDTO**](SymptomDTO.md)| newSymptomDTO | 

### Return type

[**SymptomDTO**](SymptomDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

