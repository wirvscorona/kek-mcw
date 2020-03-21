# ApiDocumentation.DiaryControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDiaryUsingDELETE**](DiaryControllerApi.md#deleteDiaryUsingDELETE) | **DELETE** /api/diaries/{id} | Deletes diary object
[**findDiariesUsingGET**](DiaryControllerApi.md#findDiariesUsingGET) | **GET** /api/diaries | Responds with a list of diaries
[**findDiaryUsingGET**](DiaryControllerApi.md#findDiaryUsingGET) | **GET** /api/diaries/{id} | Responds with a diary object
[**findUserUsingGET**](DiaryControllerApi.md#findUserUsingGET) | **GET** /api/diaries/user/{id} | Responds with a diary object
[**newDiaryUsingPOST**](DiaryControllerApi.md#newDiaryUsingPOST) | **POST** /api/diaries/{id} | Saves new diary object
[**replaceDiaryUsingPUT**](DiaryControllerApi.md#replaceDiaryUsingPUT) | **PUT** /api/diaries/{id} | Updates a diary object



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


## findUserUsingGET

> User findUserUsingGET(id)

Responds with a diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## newDiaryUsingPOST

> Diary newDiaryUsingPOST(createDiaryDTO)

Saves new diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
let createDiaryDTO = new ApiDocumentation.CreateDiaryDTO(); // CreateDiaryDTO | createDiaryDTO
apiInstance.newDiaryUsingPOST(createDiaryDTO, (error, data, response) => {
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
 **createDiaryDTO** | [**CreateDiaryDTO**](CreateDiaryDTO.md)| createDiaryDTO | 

### Return type

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## replaceDiaryUsingPUT

> Diary replaceDiaryUsingPUT(id, newDiary)

Updates a diary object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.DiaryControllerApi();
let id = 789; // Number | id
let newDiary = new ApiDocumentation.Diary(); // Diary | newDiary
apiInstance.replaceDiaryUsingPUT(id, newDiary, (error, data, response) => {
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
 **newDiary** | [**Diary**](Diary.md)| newDiary | 

### Return type

[**Diary**](Diary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

