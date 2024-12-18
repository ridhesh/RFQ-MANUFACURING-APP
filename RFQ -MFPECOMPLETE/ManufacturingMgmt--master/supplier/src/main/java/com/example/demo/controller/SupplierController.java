package com.example.demo.controller;



import java.util.List;
import java.util.NoSuchElementException;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.feign.authfeign;
import com.example.demo.model.Supplier;

import com.example.demo.service.SupplierService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/supplier")
@CrossOrigin(origins="*")
@Slf4j
public class SupplierController {

	@Autowired
	private SupplierService sserv;
	
	@Autowired
	private authfeign afeign;
	
	@GetMapping(value="/getAllSuppliers",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Supplier>> getAllSuppliers(@RequestHeader("Authorization") String authorization) {
		log.info("Inside getAllSuppliers of Supplier Controller");
		//afeign.getUname(authorization);
		List<Supplier> suppliersList = sserv.getAllSupplier();
		if (suppliersList.isEmpty()) {
			throw new NoSuchElementException();
			//return new ResponseEntity<List<Supplier>>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Supplier>>(suppliersList, HttpStatus.OK);
	}
	
	
	@GetMapping("/getSupplierOfPart/{partName}")
	public ResponseEntity<List<Supplier>> getSupplierOfPart(@RequestHeader("Authorization") String authorization,@PathVariable String partName) throws Exception {
		log.info("Inside getSupplierOfPart of Supplier Controller");
		afeign.getUname(authorization);
		List<Supplier> supplierList = sserv.getAllSupplierByPartId(partName);
			if (supplierList.isEmpty()) {
				throw new PartNotFoundException();
				//return new ResponseEntity<List<Supplier>>(HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<List<Supplier>>(supplierList, HttpStatus.OK);

	}

	
	@PostMapping("/addSupplier")
	public ResponseEntity<Supplier> addSupplier(@RequestHeader("Authorization") String authorization,@RequestBody Supplier supplier) {
		log.info("Inside addSupplier of Supplier Controller");
		sserv.addSupplier(supplier);
		System.out.println("supplier add controller");
		return new ResponseEntity<Supplier>(supplier, HttpStatus.OK);
	}
	
	@PostMapping("/editSupplier")
	public ResponseEntity<Supplier> editSupplier(@RequestHeader("Authorization") String authorization,@RequestBody Supplier supplier) {
		log.info("Inside editSupplier of Supplier Controller");
		afeign.getUname(authorization);
		Supplier supplierEdit = sserv.editSupplier(supplier);
		if(supplierEdit == null)
			throw new EntityNotFoundException();
			//return new ResponseEntity<Supplier>(HttpStatus.NOT_FOUND);
		return new ResponseEntity<Supplier>(supplier, HttpStatus.OK);
	}
	
	@PostMapping("/updateFeedback")
	public ResponseEntity<String> updateFeedback(@RequestHeader("Authorization") String authorization,@RequestBody Supplier supplier) {
		log.info("Inside updateFeedback of Supplier Controller");
		afeign.getUname(authorization);
		Supplier supplierEdit = sserv.updateFeedback(supplier);
		if(supplierEdit == null)
			return new ResponseEntity<String>("User Not Found", HttpStatus.NOT_FOUND);
		return new ResponseEntity<String>("Feedback Updated", HttpStatus.OK);
	}
}
