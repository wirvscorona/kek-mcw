# ApiDocumentation.DiaryControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiaryUsingDELETE**](DiaryControllerApi.md#deleteDiaryUsingDELETE) | **DELETE** /api/diaries/{id} | Deletes diary object
[**findDiariesUsingGET**](DiaryControllerApi.md#findDiariesUsingGET) | **GET** /api/diaries | Responds with a list of diaries
[**findDiaryUsingGET**](DiaryControllerApi.md#findDiaryUsingGET) | **GET** /api/diaries/{id} | Responds with a diary object
[**saveDiaryUsingPOST**](DiaryControllerApi.md#saveDiaryUsingPOST) | **POST** /api/diaries/ | Saves new diary object
[**updateDiaryUsingPUT**](DiaryControllerApi.md#updateDiaryUsingPUT) | **PUT** /api/diaries/{id} | Updates a diary object



## deleteDiaryUsingDELETE

> Diary deleteDiaryUsingDELETE(id)

Deletes diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
let id = 789; // Number | id
apiInstance.deleteDiaryUsingDELETE(id, (error, data, response) => {
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

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findDiariesUsingGET

> Diary findDiariesUsingGET()

Responds with a list of diaries

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
apiInstance.findDiariesUsingGET((error, data, response) => {
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

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findDiaryUsingGET

> Diary findDiaryUsingGET(id)

Responds with a diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
let id = 789; // Number | id
apiInstance.findDiaryUsingGET(id, (error, data, response) => {
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

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## saveDiaryUsingPOST

> Diary saveDiaryUsingPOST(diaryDTO)

Saves new diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
let diaryDTO = new ApiDocumentation.DiaryDTO(); // DiaryDTO | diaryDTO
apiInstance.saveDiaryUsingPOST(diaryDTO, (error, data, response) => {
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
 **diaryDTO** | [**DiaryDTO**](DiaryDTO.md)| diaryDTO | 

### Return type

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateDiaryUsingPUT

> Diary updateDiaryUsingPUT(id, diaryDTO)

Updates a diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
let id = 789; // Number | id
let diaryDTO = new ApiDocumentation.DiaryDTO(); // DiaryDTO | diaryDTO
apiInstance.updateDiaryUsingPUT(id, diaryDTO, (error, data, response) => {
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
 **diaryDTO** | [**DiaryDTO**](DiaryDTO.md)| diaryDTO | 

### Return type

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

