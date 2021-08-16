package com.example.myapplication;

import org.json.JSONObject;

import java.util.List;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.Headers;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Query;

public interface NetworkHandler {
    @GET("api/clients")
    Call<List<Client>> getUsers();
    @GET("api/branches")
    Call<List<Branch>> getBranches();
    @POST("api/Account/Register/")
    Call<Client> Register(@Body Client body);
    
}
