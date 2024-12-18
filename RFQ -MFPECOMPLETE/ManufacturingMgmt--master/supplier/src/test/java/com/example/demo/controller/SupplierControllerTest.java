package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.example.demo.feign.authfeign;
import com.example.demo.model.Supplier;
import com.example.demo.model.Supplier_part;
import com.example.demo.service.SupplierService;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
class SupplierControllerTest {

	@MockBean
	private SupplierService supplierService;
	
	@MockBean
	private authfeign authFeign;
	
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	ObjectMapper mapper;
	
	private Supplier supplier_1 = new Supplier(1,"farhan","farhan@gmail.com","7896541230","Maha",8);
	private Supplier supplier_2 = new Supplier(2,"urvashi","urvashi@gmail.com","7896541230","Maha",10);
	private Supplier supplier_3 = new Supplier(3,"keerthana","keerthana@gmail.com","7896541230","Maha",6);
	
	private Supplier_part supplier_part1 = new Supplier_part(1,1,"dsa",10,12,supplier_1);
	private Supplier_part supplier_part2 = new Supplier_part(2,2,"fsa",10,12,supplier_2);
	@Test
	void getAllSupplierTestSuccess() throws Exception{
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		List<Supplier> supplierList = new ArrayList<>();
		supplierList.add(supplier_1);
		supplierList.add(supplier_2);
		supplierList.add(supplier_3);
		Mockito.when(supplierService.getAllSupplier()).thenReturn(supplierList);
		mockMvc.perform(MockMvcRequestBuilders.get("/supplier/getAllSuppliers").headers(httpheader).contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk());
	}
	
	
	@Test
	void getSupplierByPartNameTestSuccess() throws Exception{
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		List<Supplier> supplierList = new ArrayList<>();
		supplierList.add(supplier_1);
		supplierList.add(supplier_2);
		supplierList.add(supplier_3);
		Mockito.when(supplierService.getAllSupplierByPartId(Mockito.anyString())).thenReturn(supplierList);
		mockMvc.perform(MockMvcRequestBuilders.get("/supplier/getSupplierOfPart/asd").headers(httpheader).contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk());
	}
	@Test
	void getSupplierByPartNameTestFail() throws Exception{
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		List<Supplier> supplierList = new ArrayList<>();
		supplierList.add(supplier_1);
		supplierList.add(supplier_2);
		Mockito.when(supplierService.getAllSupplierByPartId("asd")).thenReturn(supplierList);
		mockMvc.perform(MockMvcRequestBuilders.get("/supplier/getSupplierOfPart/asd").headers(httpheader).contentType(MediaType.APPLICATION_JSON))
		.andExpect(status().isOk());
	}
	
	@Test
	void addSupplierSuccess() throws Exception {
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		Mockito.when(supplierService.addSupplier(supplier_1)).thenReturn(supplier_1);
		String json = mapper.writeValueAsString(supplier_1);
		mockMvc.perform(MockMvcRequestBuilders.post("/supplier/addSupplier").headers(httpheader).contentType(MediaType.APPLICATION_JSON).content(json))
				.andExpect(status().isOk());
	}
	
	@Test
	void addSupplierFail() throws Exception {
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		Mockito.when(supplierService.addSupplier(supplier_1)).thenReturn(null);
		mockMvc.perform(MockMvcRequestBuilders.post("/supplier/addSupplier").headers(httpheader))
				.andExpect(status().isBadRequest());
	}
	
	@Test
	void editSupplierSuccess() throws Exception {
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		Mockito.when(supplierService.editSupplier(supplier_1)).thenReturn(supplier_1);
		String json = mapper.writeValueAsString(supplier_1);
		mockMvc.perform(MockMvcRequestBuilders.post("/supplier/editSupplier").headers(httpheader).contentType(MediaType.APPLICATION_JSON).content(json))
				.andExpect(status().isOk());
	}
	
	@Test
	void editSupplierFail() throws Exception {
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		Mockito.when(supplierService.editSupplier(supplier_1)).thenReturn(null);
		mockMvc.perform(MockMvcRequestBuilders.post("/supplier/editSupplier").headers(httpheader))
				.andExpect(status().isBadRequest());
	}
	
	@Test
	void updateFeedbackSuccess() throws Exception {
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		Mockito.when(supplierService.updateFeedback(supplier_1)).thenReturn(supplier_1);
		String json = mapper.writeValueAsString(supplier_1);
		mockMvc.perform(MockMvcRequestBuilders.post("/supplier/updateFeedback").headers(httpheader).contentType(MediaType.APPLICATION_JSON).content(json))
				.andExpect(status().isOk());
	}
	
	@Test
	void updateFeedbackFail() throws Exception {
		Map<String,String> map = new HashMap<>();
		map.put("Authorization", "helloddvjdh");
		HttpHeaders httpheader = new HttpHeaders();
		httpheader.setAll(map);
		Mockito.when(supplierService.updateFeedback(supplier_1)).thenReturn(null);
		mockMvc.perform(MockMvcRequestBuilders.post("/supplier/updateFeedback").headers(httpheader))
				.andExpect(status().isBadRequest());
	}
	
}
