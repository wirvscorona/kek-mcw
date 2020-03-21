# ApiDocumentation.ExaminationControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findExaminationUsingGET**](ExaminationControllerApi.md#findExaminationUsingGET) | **GET** /api/examinations/{id} | Responds with an examination object
[**findExaminationsUsingGET**](ExaminationControllerApi.md#findExaminationsUsingGET) | **GET** /api/examinations | Responds with a list of examinations
[**saveExaminationUsingPOST**](ExaminationControllerApi.md#saveExaminationUsingPOST) | **POST** /api/examinations | Saves new Examination object



## findExaminationUsingGET

> ExaminationDTO findExaminationUsingGET(id)

Responds with an examination object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.ExaminationControllerApi();
let id = 789; // Number | id
apiInstance.findExaminationUsingGET(id, (error, data, response) => {
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

[**ExaminationDTO**](ExaminationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findExaminationsUsingGET

> ExaminationDTO findExaminationsUsingGET(opts)

Responds with a list of examinations

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.ExaminationControllerApi();
let opts = {
  'containssymptoms': [null] // [Number] | A comma seperated list of symptom ids that should be searched for
};
apiInstance.findExaminationsUsingGET(opts, (error, data, response) => {
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
 **containssymptoms** | [**[Number]**](Number.md)| A comma seperated list of symptom ids that should be searched for | [optional] 

### Return type

[**ExaminationDTO**](ExaminationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## saveExaminationUsingPOST

> ExaminationDTO saveExaminationUsingPOST(newExaminationDTO)

Saves new Examination object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.ExaminationControllerApi();
let newExaminationDTO = new ApiDocumentation.ExaminationDTO(); // ExaminationDTO | newExaminationDTO
apiInstance.saveExaminationUsingPOST(newExaminationDTO, (error, data, response) => {
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
 **newExaminationDTO** | [**ExaminationDTO**](ExaminationDTO.md)| newExaminationDTO | 

### Return type

[**ExaminationDTO**](ExaminationDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

