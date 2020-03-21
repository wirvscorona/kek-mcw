# ApiDocumentation.UserControllerApi

All URIs are relative to *http://127.0.0.1:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserUsingDELETE**](UserControllerApi.md#deleteUserUsingDELETE) | **DELETE** /api/users/{id} | Deletes user object
[**findUserUsingGET1**](UserControllerApi.md#findUserUsingGET1) | **GET** /api/users/{id} | Responds with a user object
[**findUsersUsingGET**](UserControllerApi.md#findUsersUsingGET) | **GET** /api/users | Responds with a list of users
[**saveUserUsingPOST**](UserControllerApi.md#saveUserUsingPOST) | **POST** /api/users | Saves new User object
[**updateUserUsingPUT**](UserControllerApi.md#updateUserUsingPUT) | **PUT** /api/users/{id} | Updates a user object



## deleteUserUsingDELETE

> deleteUserUsingDELETE(id)

Deletes user object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.UserControllerApi();
let id = 789; // Number | id
apiInstance.deleteUserUsingDELETE(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findUserUsingGET1

> UserDTO findUserUsingGET1(id)

Responds with a user object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.UserControllerApi();
let id = 789; // Number | id
apiInstance.findUserUsingGET1(id, (error, data, response) => {
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

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findUsersUsingGET

> User findUsersUsingGET()

Responds with a list of users

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.UserControllerApi();
apiInstance.findUsersUsingGET((error, data, response) => {
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

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## saveUserUsingPOST

> UserDTO saveUserUsingPOST(newUserDTO)

Saves new User object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.UserControllerApi();
let newUserDTO = new ApiDocumentation.UserDTO(); // UserDTO | newUserDTO
apiInstance.saveUserUsingPOST(newUserDTO, (error, data, response) => {
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
 **newUserDTO** | [**UserDTO**](UserDTO.md)| newUserDTO | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## updateUserUsingPUT

> UserDTO updateUserUsingPUT(id, updatedUserDTO)

Updates a user object

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.UserControllerApi();
let id = 789; // Number | id
let updatedUserDTO = new ApiDocumentation.UserDTO(); // UserDTO | updatedUserDTO
apiInstance.updateUserUsingPUT(id, updatedUserDTO, (error, data, response) => {
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
 **updatedUserDTO** | [**UserDTO**](UserDTO.md)| updatedUserDTO | 

### Return type

[**UserDTO**](UserDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

