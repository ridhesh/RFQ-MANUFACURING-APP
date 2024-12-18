package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import com.example.demo.model.Supplier;
import com.example.demo.repository.SupplierRepo;


@AutoConfigureMockMvc
class SupplierServiceTest {

	@Mock
	private SupplierService supplierService;

	@Mock
	private SupplierRepo supplierRepo;
	
	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
	}
	
	

	@Test
	public void addSupplierTest() {
		Supplier supplier = new Supplier("Lokendra", "lokendra@gmail.com", "9876543212", "Rajasthan", 10);
		supplierService.addSupplier(supplier);
		Mockito.when(supplierRepo.getOne(4)).thenReturn(supplier);
		String name = supplierRepo.getOne(4).getName();
		assertEquals(supplier.getName(), name);
	}

	@Test
	public void addSupplierNegativeTest() throws Exception {
		Supplier supplier = new Supplier("Lokendra", "lokendragmail.com", "9876543212", "Rajasthan", 10);
		supplierService.addSupplier(supplier);
	}

	@Test
	public void editSupplierTest() {
		Supplier supplier = new Supplier(1, "Rathor", "himanshu@gmail.com", "9876543212", "UP", 9);
		supplierService.editSupplier(supplier);
		Mockito.when(supplierRepo.getOne(1)).thenReturn(supplier);
		Supplier editedSupplier = supplierRepo.getOne(1);
		assertEquals(editedSupplier.getName(), supplier.getName());

	}

	@Test
	public void editSupplierNegativeTest() throws Exception {
		Supplier supplier = new Supplier(1, "Rathor", "himanshu@gmail.com", "98765212", "UP", 9);
		supplierService.editSupplier(supplier);
	}

	@Test
	public void updateFeedbackTest() {
		Supplier supplier = new Supplier(1, 10);
		supplierService.updateFeedback(supplier);
		assertEquals(10, supplier.getFeedback());
	}

	@Test
	public void updateFeedbackNegativeTest() throws Exception {
		Supplier supplier = new Supplier(1, 100);
		supplierService.updateFeedback(supplier);
	}
	
	@Test
	public void getSupplierOfPartTest() {
		List<Supplier> demoList = new ArrayList<Supplier>();
		Supplier sp1= new Supplier("Himanshu","himanshu@gmail.com","9876543212","Delhi",10);
		Supplier sp2= new Supplier("Rathor","rathor@gmail.com","9876543212","Delhi",10);
		demoList.add(sp1);
		demoList.add(sp2);
		Mockito.when(supplierService.getAllSupplierByPartId("asd")).thenReturn(demoList);
		List<Supplier> supplierList = supplierService.getAllSupplierByPartId("asd");
		assertEquals(2, supplierList.size());
	}


}
